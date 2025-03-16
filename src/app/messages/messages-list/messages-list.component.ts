import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from '../services/messages.service';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { MatDialog } from '@angular/material/dialog';
import { MessagePageComponent } from '../message-form/message-form.component';
import { Firestore } from '@angular/fire/firestore';
import { DatePipe } from '../../shared/pipes/date.pipe';

@Component({
  standalone: true,
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    DatePipe
  ]
})
export class MessagesListComponent implements OnInit {
  isLoading = true;
  messages$: Observable<Message[]>;
  dataSource = new MatTableDataSource<Message>([]);

  constructor(private messagesService: MessagesService,
    private dialog: MatDialog,
    private firestore: Firestore
  ) {
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messagesService.getMessages().subscribe((messages) => {
      console.log(messages)
      this.isLoading = false;
      this.dataSource.data = messages || [];
    });
  }
    openDialog(): void {
      const dialogRef = this.dialog.open(MessagePageComponent, {
        width: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('dialog closed');
      });
  }
  async deleteMessage(messageId: string) {
    this.isLoading = true;
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        await this.messagesService.deleteMessage(messageId);
        this.isLoading = false;
        console.log('Message with ID ${messageId} deleted successfully.');
      } catch (error) {
        this.isLoading = false;
        console.error('Error deleting message:', error);
      }
    } else {
      this.getMessages();
    }
  }
}

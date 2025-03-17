import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessagesService } from '../services/messages.service';
import { Message } from '../../models/message.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './message-form.component.html',
  styleUrls: ['./messages-form.component.scss'],
})
export class MessagePageComponent implements OnInit{
  messageForm: FormGroup;
  loading:boolean = false;
  constructor(
    private dialogRef: MatDialogRef<MessagePageComponent>,
    public fb: FormBuilder,
    private snackBar: MatSnackBar,
    private messagesService: MessagesService
  ) {}

ngOnInit() {
  this.messageForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    message: [null, [Validators.required, Validators.minLength(10)]]
  });
}

showSnackbar(message: string, action: string = 'Close') {
  this.snackBar.open(message, action, {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  });
}
closeDialog(): void {
  this.dialogRef.close();
}

onSubmit() {
  this.loading = true;
  if (this.messageForm && this.messageForm.value.email &&
    this.messageForm.value.message) {
    const newMessage: Message = {
      email: this.messageForm.value.email,
      message: this.messageForm.value.message,
      timeStamp: new Date()
    };

    this.messagesService.addMessage(newMessage).then(() => {
      this.showSnackbar('Message added successfully!', 'Close');
      this.messageForm.reset();
      this.closeDialog();
      this.loading = false;
    }).catch((error) => {
      this.loading = false;
      this.showSnackbar('Failed to add message. Try again.', 'Close');
      console.error('Error adding message: ', error);
    });
  }
}
}

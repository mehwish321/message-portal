import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MessagePageComponent } from './message-form/message-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageComponent } from './messages.component';

const routes: Routes = [
    { path: '', component: MessagesListComponent }
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MessageComponent,
    MessagesListComponent,
    MessagePageComponent,
    DatePipe,
    RouterModule.forChild(routes)
  ]
})
export class MessagesModule { }

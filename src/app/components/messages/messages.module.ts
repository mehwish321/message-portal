import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagePageComponent } from './message-form/message-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './messages.component';

const routes: Routes = [
    { path: '', component: MessagesListComponent }
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    MessageComponent,
    MessagesListComponent,
    MessagePageComponent,
    RouterModule.forChild(routes)
  ]
})
export class MessagesModule { }

import { Routes } from '@angular/router';

export const messagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./messages-list/messages-list.component').then((m) => m.MessagesListComponent),
  }
];

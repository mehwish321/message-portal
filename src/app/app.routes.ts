import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'messages', loadChildren: () => import('./components/messages/messages.module').then(m => m.MessagesModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' }

];

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'messages', loadChildren: () => import('./components/messages/messages.module').then(m => m.MessagesModule) }
];

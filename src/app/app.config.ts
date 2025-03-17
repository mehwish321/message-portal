import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from '../environments/environment';
import { routes } from '../app/app.routes';
import { provideStore } from '@ngrx/store';
import { MessagesService } from './components/messages/services/messages.service';
import { messageReducer } from './store/messages.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserAnimationsModule,
    MatDialogModule,   
    provideStore({ messages: messageReducer }),
    MessagesService,
    provideRouter(routes),
    provideAnimations(),
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), 
  ],
};

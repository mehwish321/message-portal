import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { environment } from '../environments/environment';
import { routes } from '../app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserAnimationsModule,
    MatDialogModule,   
    provideRouter(routes),
    
    provideRouter([], withComponentInputBinding()),
    provideAnimations(),
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), 
  ],
};

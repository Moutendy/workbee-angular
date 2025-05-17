import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../src/app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"workbee-c279c","appId":"1:924621305787:web:8756c6edc79d0ef001f69e","databaseURL":"https://workbee-c279c-default-rtdb.firebaseio.com","storageBucket":"workbee-c279c.firebasestorage.app","apiKey":"AIzaSyDsX8AvJ4JWOP-BPmeyZxXGMbdPHx6sqWc","authDomain":"workbee-c279c.firebaseapp.com","messagingSenderId":"924621305787","measurementId":"G-C2Y3WW5BBR"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};

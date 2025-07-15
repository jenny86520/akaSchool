import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";

import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";

import { environment } from "./environments/environment";
import { MainComponent } from "./app/post-layout/main/main.component";
import { PostComponent } from "./app/post/post.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "**",
        component: PostComponent,
      },
    ],
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostLayoutModule } from "./post-layout/post-layout.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { firebaseConfig } from "../environments/environment";
import { PostComponent } from "./post/post.component";

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

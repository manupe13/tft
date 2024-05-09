import { AppRoutingModule } from './app-routing.module';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideStorage (() => getStorage())
    ],
    declarations: [
        AppComponent,

          ],
  bootstrap: [
    AppComponent
  ],
    providers: [

    ]
})

export class AppModule { }

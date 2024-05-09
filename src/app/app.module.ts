import { AppRoutingModule } from './app-routing.module';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
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
        FooterComponent,
        HeaderComponent,

          ],
  bootstrap: [
    AppComponent
  ],
    providers: [

    ]
})

export class AppModule { }

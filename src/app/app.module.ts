import { AppRoutingModule } from './app.routes';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { GoogleRegisterComponent } from './components/google-register/google-register.component';
import { GoUpArrowComponent } from './components/go-up-arrow/go-up-arrow.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { LoginComponent } from './pages/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PantryComponent } from './pages/pantry/pantry.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        MatDialogModule,
        provideStorage (() => getStorage())
    ],
    declarations: [
        AppComponent,
        AccountComponent,
        ConfirmDialogComponent,
        ForgotPasswordComponent,
        FooterComponent,
        GoogleRegisterComponent,
        GoUpArrowComponent,
        HeaderComponent,
        HomeComponent,
        IngredientsComponent,
        LoginComponent,
        PantryComponent,
        RecipesComponent,
        RegisterComponent,
        UpdatePasswordComponent,

          ],
  bootstrap: [
    AppComponent
  ],
    providers: [

    ]
})

export class AppModule { }

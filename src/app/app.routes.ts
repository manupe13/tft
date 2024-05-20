import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { GoogleRegisterComponent } from './pages/google-register/google-register.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { LoginComponent } from './pages/login/login.component';
import { PantryComponent } from './pages/pantry/pantry.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

export const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'google-register',
    component: GoogleRegisterComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ingredients',
    component: IngredientsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pantry',
    component: PantryComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

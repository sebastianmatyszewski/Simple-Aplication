import { QuestionComponent } from './question/question.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guards';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    title: 'Użytkownicy',
    data: { roles: ['ADMIN'] },
    // data: { roles: ['ADMIN', 'USER'] },
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN', 'USER'] },
  },
  {
    path: 'question',
    component: QuestionComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN', 'USER'] },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

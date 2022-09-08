import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrintError } from './print-error/print-error.component';
import { HeaderInterceptor } from './token.interceptor';
import { MenuComponent } from './menu/menu.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, UsersComponent, PrintError, MenuComponent, QuestionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

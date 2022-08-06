import { ListasModule } from './todo-listo/listas/listas.module';
import { AuthModule } from './auth/auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ListasModule,
    HttpClientModule,
    ListasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

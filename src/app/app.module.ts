import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommittiesComponent } from './committies/committies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { JoinusComponent } from './joinus/joinus.component';
import { BoardusComponent } from './boardus/boardus.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{HttpClientModule}from '@angular/common/http';

@NgModule({
  //components and directives
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    CommittiesComponent,
    ContactusComponent,
    EventsComponent,
    FooterComponent,
    JoinusComponent,
    BoardusComponent,
    PagenofoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  //services
  providers: [],
  //root component , parent component, starter
  bootstrap: [AppComponent] 
})
export class AppModule { }

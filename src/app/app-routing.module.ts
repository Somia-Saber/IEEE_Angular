import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BoardusComponent } from './boardus/boardus.component';
import { CommittiesComponent } from './committies/committies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'section1',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'Committees',component:CommittiesComponent},
  {path:'events',component:EventsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'header',component:HeaderComponent},
  {path:'joinus',component:JoinusComponent},
  // {path:'/section1/joinus',component:HomeComponent},
  {path:'boardus',component:BoardusComponent},
  {path:'footer',component:FooterComponent },

  {path:'',redirectTo:'/section1',pathMatch:'full'},
  {path:"**",component:PagenofoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

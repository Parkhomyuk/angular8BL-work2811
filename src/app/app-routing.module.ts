import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { CheckboxDynamoComponent } from './checkbox-dynamo/checkbox-dynamo.component';
import {MainPageComponent} from "./main/main-page/main-page.component";
import {ReservationsComponent} from "./reservations/reservations/reservations.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";



const routes: Routes = <Routes>[
  {path: '', component: MainComponent, children:[
    {path:'', component: MainPageComponent, children:[
      {path: '', component: ReservationsComponent},
      {path: 'check', component: CheckboxComponent},
      {path: 'tables', component: CheckboxDynamoComponent},

    ]}
  ]},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

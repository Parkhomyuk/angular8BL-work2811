import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { CheckboxDynamoComponent } from './checkbox-dynamo/checkbox-dynamo.component';
const routes: Routes = [
  {path: '', component:  MainComponent , child[
    
  ]},
  {path: 'home', component: CheckboxDynamoComponent},
  
  {path: 'main', component: MainComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

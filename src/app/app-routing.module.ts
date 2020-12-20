import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
{path: "",component: MainComponent},
{path: "about",component:AboutComponent},
{path: "login",component:LoginComponent},
{path: "**",component:NotFoundComponent},
{path: "contact", redirectTo:"/about", pathMatch:"full"},
{path: "contacts", redirectTo:"/about", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

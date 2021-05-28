import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { BoxsComponent } from './Components/boxs/boxs.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DetailsComponent } from './Components/home/details/details.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home/:id',component:DetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'box',component:BoxsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

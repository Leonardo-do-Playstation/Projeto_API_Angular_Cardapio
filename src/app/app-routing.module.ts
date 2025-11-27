import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './models/dishes/dishes.component';
import { HomeComponent } from './models/home/home.component';
import { DrinksComponent } from './models/drinks/drinks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },       
  { path: 'home', component: HomeComponent },
  { path: 'pratos', component: DishesComponent },
  { path: 'bebidas', component: DrinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
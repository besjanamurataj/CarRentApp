import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';


const routes: Routes = [
  {
      path: 'car',
    loadChildren: () =>
       import('./components/car/car.module').then(m => m.CarModule)
    },
   {
     path: 'model',
    loadChildren: () =>
     import('./components/model/model.module').then((m) => m.ModelModule),
 },
  {
    path: 'fueltype',
    loadChildren: () =>
      import('./components/fuel-type/fuel-type.module').then(
        (m) => m.FuelTypeModule
      ),
  },
  
  { path: 'login',component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

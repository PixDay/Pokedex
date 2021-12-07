import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './pages/regions/regions.component';

const routes: Routes = [
  { path: '', redirectTo: '/regions', pathMatch: 'full' },
  { path: 'regions', component: RegionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

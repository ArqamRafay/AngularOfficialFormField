import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormfieldComponent } from './componeent/formfield/formfield.component';


const routes: Routes = [{path: 'formFieldControl', component: FormfieldComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

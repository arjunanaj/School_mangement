import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbstractComponent } from './abstract/abstract.component';
import { AddAbstractComponent } from './add-abstract/add-abstract.component';
import { AddComponent1Component } from './add-component1/add-component1.component';
import { AddComponent2Component } from './add-component2/add-component2.component';

import { ComponentInfo1Component } from './component-info1/component-info1.component';
import { ComponentInfo2Component } from './component-info2/component-info2.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowListComponent } from './show-list/show-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  { path: '', redirectTo:'/abstract', pathMatch: 'full' },

  { path: 'abstract', component: AbstractComponent },
  { path: "compo_1", component:ComponentInfo1Component},
  { path: "compo_2", component:ComponentInfo2Component },
  {path:"signin",component:LoginComponent},
  {path:"signup",component:RegisterComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"addAbstract",component:AddAbstractComponent},
  {path:"addComponent_1",component:AddComponent1Component},
  {path:"addComponent_2",component:AddComponent2Component},
  {path:"addStudent",component:AddStudentComponent},
  {path:"showStudent",component:ShowListComponent},
  {path:"updateStudent/:id",component:UpdateStudentComponent},
  {path:"updateStudentByName/:name",component:UpdateStudentComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserUploadComponent } from './user-upload/user-upload.component';

const routes: Routes = [
  {path:"",redirectTo:"uploadUser",pathMatch:"full"},
  {path:"uploadUser",component:UserUploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path:"",redirectTo:"uploadUser",pathMatch:"full"},
  {path:"uploadUser",component:UserUploadComponent},
  {path:"viewUser",component:UserViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

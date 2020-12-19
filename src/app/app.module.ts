import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { UserUploadService } from './user-upload.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserViewComponent } from './user-view/user-view.component';
import { UserViewService } from './user-view.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserUploadComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserUploadService,UserViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }

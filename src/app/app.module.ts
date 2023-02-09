import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { UploadComponent } from './pages/upload/upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [AppComponent, AvatarComponent, UploadComponent],
  imports: [
    BrowserModule,
    FileUploadModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    ToastModule,
    CheckboxModule,
    ButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

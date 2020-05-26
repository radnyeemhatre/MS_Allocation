import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angular-6-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewGradComponent } from './components/view-grad/view-grad.component';
import { AddGradComponent } from './components/add-grad/add-grad.component';
import { EditGradComponent } from './components/edit-grad/edit-grad.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatButtonModule,MatIconModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material'

export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [ 
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('934480810155-g4h7fbn8k3e9b0eo8c2qfb8kes36mk8g.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
}  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewGradComponent,
    AddGradComponent,
    EditGradComponent,
    NotFoundComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,        
    MatNativeDateModule,        
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

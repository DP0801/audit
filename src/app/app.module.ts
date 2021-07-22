import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './web/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { DepartmentComponent } from './admin/department/department.component';
import { FeaturesComponent } from './web/features/features.component';
import { AboutusComponent } from './web/aboutus/aboutus.component';
import { ContactusComponent } from './web/contactus/contactus.component';
import { FooterComponent } from './web/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    HomeComponent,
    DepartmentComponent,
    FeaturesComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

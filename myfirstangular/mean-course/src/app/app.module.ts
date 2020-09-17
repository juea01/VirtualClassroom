import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VclassHeaderComponent } from './vclassheader/vclassheader.component';
import { HeaderToolbarComponent } from './headertoolbar/headertoolbar.component';
import { MainHeaderComponent } from './mainheader/mainheader.component';
import {BodyComponent}  from './body/body.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import { SigninComponent } from './signin/signin.component';
import {SubjectComponent} from './student/subject/subject.component'


@NgModule({
  declarations: [
    AppComponent, VclassHeaderComponent, HeaderToolbarComponent, BodyComponent, MainHeaderComponent, SigninComponent, SubjectComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressBarModule,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

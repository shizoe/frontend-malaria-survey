import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './users/home/home.component';
import { UserslistComponent } from './admin/userslist/userslist.component';
import { UserdetailsComponent } from './admin/userdetails/userdetails.component';
import { UsersignupComponent } from './admin/usersignup/usersignup.component';
import { FollowuplistComponent } from './patient/followuplist/followuplist.component';
import { LabresultsComponent } from './patient/labresults/labresults.component';
import { FollowupdetailComponent } from './patient/followupdetail/followupdetail.component';
import { PatientlistComponent } from './patient/patientlist/patientlist.component';
import { PatientregistrationComponent } from './patient/patientregistration/patientregistration.component';
import { AboutComponent } from './admin/about/about.component';
import { MwenseComponent } from './admin/mwense/mwense.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { PatientdetailsComponent } from './patient/patientdetails/patientdetails.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule, MatOptionModule, MatRippleModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserslistComponent,
    UserdetailsComponent,
    UsersignupComponent,
    FollowuplistComponent,
    LabresultsComponent,
    FollowupdetailComponent,
    PatientlistComponent,
    PatientregistrationComponent,
    AboutComponent,
    MwenseComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    SidenavComponent,
    HeaderComponent,
    PatientdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    // * MATERIAL IMPORTS
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PatientdetailsComponent, LoginComponent]
})
export class AppModule { }

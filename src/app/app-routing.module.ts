import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./users/home/home.component";
import {LoginComponent} from "./users/login/login.component";
import {FollowuplistComponent} from "./patient/followuplist/followuplist.component";
import {LabresultsComponent} from "./patient/labresults/labresults.component";
import {PatientlistComponent} from "./patient/patientlist/patientlist.component";
import {PatientregistrationComponent} from "./patient/patientregistration/patientregistration.component";
import {FollowupdetailComponent} from "./patient/followupdetail/followupdetail.component";
import {UserslistComponent} from "./admin/userslist/userslist.component";
import {UsersignupComponent} from "./admin/usersignup/usersignup.component";
import {UserdetailsComponent} from "./admin/userdetails/userdetails.component";
import {AboutComponent} from "./admin/about/about.component";
import {MwenseComponent} from "./admin/mwense/mwense.component";
import {NotFoundComponent} from "./error/not-found/not-found.component";
import {UnauthorizedComponent} from "./error/unauthorized/unauthorized.component";
import {AuthGuard} from "./guards/auth.guard";
import {Role} from "./models/role.enum";
import {PatientdetailsComponent} from "./patient/patientdetails/patientdetails.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {
    path: 'followuplist', component: FollowuplistComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}}
  ,
  {
    path: 'labresults', component: LabresultsComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}
  },
  {
    path: 'details', component: FollowupdetailComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}
  },
  {
    path: 'patientlist', component: PatientlistComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}
  },
  {
    path: 'registration', component: PatientregistrationComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}
  },
  {
    path: 'followup', component: FollowupdetailComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}
  },

  {
    path: 'userslist', component: UserslistComponent,
    canActivate: [AuthGuard],
    data:{roles:[Role.ADMIN]}
  },
  {
    path: 'signup', component: UsersignupComponent,
    canActivate: [AuthGuard],
    data:{roles: [Role.ADMIN]}
  },
  {
    path: 'userdetails', component:UserdetailsComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.ADMIN, Role.USER]}
  },
  {path: 'about', component: AboutComponent},
  {path: 'mwense', component: MwenseComponent},

  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router)
  {
    this.router.errorHandler = (error:any) => {
      this.router.navigate(['/404']);
    };
  }
}

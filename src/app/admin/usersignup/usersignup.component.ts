import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string="";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id){
      this.router.navigate(['/home'])
      return
    }
  }

  register()
  {
    this.authenticationService.register(this.user).subscribe(data=>{
      this.router.navigate(['/userslist']);
    },err => {
      if(err?.status === 409){
        this.errorMessage = 'Username already exists.';
      }else
      {
        this.errorMessage = 'Unexpected error, please try again. If this problem persists. Please contact your sys admin' + err?.errorMessage;
      }
    })
  }

}

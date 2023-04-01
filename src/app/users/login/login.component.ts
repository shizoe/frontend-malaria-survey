import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string ="";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id) {
      this.router.navigate(['/home'])
      return
    }
  }

  login(){
    this.authenticationService.login(this.user).subscribe(data=>{
      this.router.navigate(['/followuplist']);
    }, err =>{
      this.errorMessage = 'Username or Password is incorrect.';
      console.log(err);
    })
  }

}

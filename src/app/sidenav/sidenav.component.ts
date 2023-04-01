import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {Role} from "../models/role.enum";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentUser: User = new User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data=>{
      this.currentUser = data;
    });
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN;
  }

  ngOnInit(): void {
  }

}

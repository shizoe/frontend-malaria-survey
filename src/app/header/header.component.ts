import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {AuthenticationService} from "../services/authentication.service";
import {Role} from "../models/role.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  currentUser: User = new User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data=>{
      this.currentUser = data;
    });
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut(){
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

}

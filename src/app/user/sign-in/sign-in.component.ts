import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials : IUserCredentials = { email: '', password: ''};
  signInError : boolean = false;

  constructor(private userSvc: UserService, private router: Router) {
    
  }

  signIn() {
    this.signInError = false; // if first attepmpt is fail then clear this
    this.userSvc.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true)
    });
  }
}

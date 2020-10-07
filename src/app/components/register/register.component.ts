import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message: string;
  buttonDisabled: boolean = false;
  success: boolean = false;

  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
  }

  submitRegistration(formData): void {
    if (formData.password !== formData.confirmPass) {
      this.message = "Passwords do not match.";
      return;
    }

    this.buttonDisabled = true;
    const user = {
      username: formData.username,
      password: formData.password,
      firstname: formData.firstName,
      lastname: formData.lastName
    }

    this.backendService.registerUser(user).subscribe(data => {
      // If result is a user, switch to success screen,
      // otherwise show error message
      if (data.id) {
        sessionStorage.setItem('user', JSON.stringify(data));
        this.success = true;
        this.router.navigateByUrl('/');
      } else if (data.message) {
        this.message = data.message;
        this.buttonDisabled = false;
      }
    }, (e) => {
      console.log(e);
    });
  }
}

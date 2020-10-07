import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  buttonDisabled: boolean = false;
  success: boolean = false;

  constructor(private backendService: BackendService,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin(formData) {
    this.buttonDisabled = true;

    const creds = {
      username: formData.username,
      password: formData.password,
    }

    this.backendService.login(creds).subscribe(data => {
      // If result is a user, switch to success screen,
      // otherwise show error message
      if (data.id) {
        this.sessionService.updateUserSessionData(data);
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

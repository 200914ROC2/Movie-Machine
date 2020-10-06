import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  submitRegistration(formData): void {
    let user: User = {
      id: 0,
      username: formData.username,
      password: formData.password,
      password_hash: undefined,
      firstname: formData.firstName,
      lastname: formData.lastName
    }
    console.log(user);
    this.backendService.registerUser(user).subscribe(data => console.log(data), (e) => console.log(e), () => console.log('done'));
  }
}

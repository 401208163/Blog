import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = {
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  signup() {
    const formData = this.signupForm;
    this.http.post('http://106.15.206.216:3000/users', formData).toPromise().then((data: any) =>{
      console.log(data);
     });
  }
}

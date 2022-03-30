// @ts-ignore
import { Component } from '@angular/core';
import {Tutorial} from "../models/tutorial.model";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser = {
    userName: '',
    password: '',
    newUser: false
  };

  constructor(private un: string, private pw: string) {}
  ngOnInit(): void {
  }
  saveUserName(): void {
    const data = {
      userName: this.currentUser.userName,
      password: this.currentUser.password
    };
  }

  /*
  TODO: Connect to database for validation
  getUser(userName: string): void {
    this.currentUser.get(userName)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  msg = '';
  valid = false;

  validate() {
    this.valid = !this.valid;
    if (this.valid) {
      this.msg = 'login successful!';
    } else {
      this.msg = "Try again!";
    }
  }

   */
  newUser(): void {
    this.submitted = false;
    this.currentUser = {
      userName: '',
      password: '',
      newUser: true
    };
  }
  submitted = false;
  message: string = 'Invalid username / password'

  sayMessage() {
    alert(this.message);
  }

  msg = '';
  valid = false;
}

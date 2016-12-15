import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  template: `
    <h1>Login Form</h1>
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input type="text" 
             name="username" 
             formControlName="username"
             placeholder="username...">
             
      <input type="password" 
             name="password" 
             formControlName="password"
             placeholder="password...">
                
      <button type="submit">login</button>
    </form>
  `,
})

export class LoginComponent {

  private loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;

  constructor() {
    this.username = new FormControl();
    this.password = new FormControl();

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    })
  }

  public login() {
    console.log(this.loginForm.value);
  }


}

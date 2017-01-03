import {Component, OnDestroy} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MalamValidaors} from "./malam-validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  styles  : [`
    input.ng-invalid {background-color: red}
    input.ng-valid {background-color: green}
  `],
  template: `
    <h1>Login Form</h1>
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input type="text" 
             name="username" 
             formControlName="username"
             placeholder="username...">
             
      <span *ngIf="!username.valid">Not Valid!</span>             
             
      <input type="password" 
             name="password" 
             formControlName="password"
             placeholder="password...">
                
      <button type="submit">login</button>
    </form>
  `,
})

export class LoginComponent implements OnDestroy{

  private loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;
  private router: Router;


  ngOnDestroy(): void {
    console.log('LOGIN COMPONENT DESTROYED');
  }


  constructor(router: Router) {
    this.router   = router;
    this.username = new FormControl('',
        Validators.compose([
          MalamValidaors.noSpace,
          MalamValidaors.noNir
        ]),
    );

    this.password = new FormControl();

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });

    this.username.valueChanges.subscribe( char => console.log(char) )
    this.username.statusChanges.subscribe( status => console.log(status) )
  }

  public login() {
    this.router.navigate(['list', this.loginForm.value.username]);
  }


}

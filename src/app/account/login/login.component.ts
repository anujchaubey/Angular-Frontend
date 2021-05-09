import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/authorization/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  clickshowPassword: string = 'password';
  constructor(private formBuilder: FormBuilder, private _server: ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.loginForm.controls; }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  // get acceptTerms() { return this.loginForm.get('acceptTerms'); }
  showpassword(event: any): void {
    if (event.currentTarget.checked == true) {
      this.clickshowPassword = 'text';
    } else {
      this.clickshowPassword = 'password';
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      // console.log(JSON.stringify(this.loginForm.value, null, 4))
      // this._server.postApi()
    }
  }
}

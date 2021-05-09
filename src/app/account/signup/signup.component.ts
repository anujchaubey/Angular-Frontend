import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/authorization/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickshowPassword: string = 'password';
  constructor(private formBuilder: FormBuilder, private _server: ApiService, private _router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.registerForm.controls; }
  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get acceptTerms() { return this.registerForm.get('acceptTerms'); }

  showpassword(event: any): void {
    if (event.currentTarget.checked == true) {
      this.clickshowPassword = 'text';
    } else {
      this.clickshowPassword = 'password';
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      // console.log(JSON.stringify(this.registerForm.value, null, 4))
      // console.log(this.registerForm.value.username)

      // const fromData = new FormData();
      // fromData.append("username", this.registerForm.value.username);
      // fromData.append("email", this.registerForm.value.email);
      // fromData.append("password", this.registerForm.value.password);
      this._server.postApi('login', this.registerForm.value).subscribe((res) => {
        console.log(res)
        this._router.navigate(['/login']);
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  formLogin:FormGroup = this.fb.group({ // agrupo todos los datos del formulario (y valida)
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  fieldValidator(fiel: string) {
    return this.formLogin.controls?.[fiel].errors && this.formLogin.controls?.[fiel].touched
  }

  login(email:string, password: string){
    console.log(email, password);
  }
}

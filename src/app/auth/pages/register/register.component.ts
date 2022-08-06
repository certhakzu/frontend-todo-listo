import { userLogin } from './../../../../interface/userLogin';
import { AuthService } from './../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  formRegister:FormGroup = this.fb.group({ // agrupo todos los datos del formulario (y valida)
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  });

  fieldValidator(fiel: string) {
    return this.formRegister.controls?.[fiel].errors && this.formRegister.controls?.[fiel].touched
  }

  register(name: string, email:string, password: string){
    this.authService.SignUp({name, email, password} as any).then(() => alert("registrado")).catch(err => alert("ERROR!!!"));
  }
}

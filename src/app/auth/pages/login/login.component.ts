import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private aService: AuthService) { }

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

    this.aService.SignIn(email, password).then(() => this.router.navigate(['/listas'])).catch(error => alert("Error al Iniciar Sesión!"));
  }

  registerGoogle() {
    this.aService.SingInGoogle().then(() => this.router.navigate(["/listas"]).catch(() => alert('Ocurrió un error inesperado')));
  }

}

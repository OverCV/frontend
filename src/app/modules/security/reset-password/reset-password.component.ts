import { Component, OnInit } from '@angular/core';
// No se inicializan automáticamente.
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DefaultValues } from 'src/app/config/default-values';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

/* ngOnInit implica que cuando se inicialice el componente de Angular entonces empiece a usar el siguieinte código */

export class ResetPasswordComponent implements OnInit {

  // Visión de modalidad
  verEmail: boolean = true
  verMensaje: boolean = false
  

  // Constructor del formulario
  grupoForm: FormGroup = new FormGroup({}) /* Recibe un objeto vacío */
  
  avatar_usuario = 'src/assets/logos/Logo-r.png'
  

  constructor(
    // Inyección de dependencias.
    private FB: FormBuilder
    ) { } 


  ngOnInit(): void {
    // Cuando se inicie se crea el componente con sus propiedades.
    this.BuildingForm()
  }

  onCargarMessage(): void {
    console.log('msg')
    
    this.verMensaje = true
    this.verEmail = false
  }
  
  onCargarEmail(): void {
    console.log('mail')
    this.verEmail = true
    this.verMensaje = false
  }

  BuildingForm() {
    this.grupoForm = this.FB.group({
      // Estamos aplicando validaciones sobre el campo del formulario.
      cellphone: [DefaultValues.cellphone, [Validators.required, Validators.pattern]],
      username: [DefaultValues.username, [Validators.required, Validators.email, Validators.minLength(5)]],
    })
  }

  /**
   * Al usar el botón se acciona la petición para desde el servidor Python enviar la notificación con contraseña nueva.
   */
  ResetPasswordRequest() {
    
  }
}
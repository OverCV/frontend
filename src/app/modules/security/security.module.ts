import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SecurityRoutingModule } from './security-routing.module'
import { WaitingPageComponent } from './reset-password/waiting-page/waiting-page.component'
import { EmailComponent } from './reset-password/waiting-page/email/email.component'
import { MessageComponent } from './reset-password/waiting-page/message/message.component'
// Estos formularios no se autoimportaron.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { ChangePasswordComponent } from './change-password/change-password.component'

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    EmailComponent,
    MessageComponent,
    ChangePasswordComponent,
    WaitingPageComponent,
  ],
  imports: [
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class SecurityModule { }

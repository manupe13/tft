import { Component, OnInit } from '@angular/core';
import { ResetPasswdService } from '../../services/reset-passwd.service';
import { FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  constructor() { }

  /*userEmail = new FormControl('');

  constructor(private resetPasswdSvc:ResetPasswdService,
              private router:Router,
              private dialog: MatDialog) { }

  ngOnInit(): void { }

  async onReset() {

    try {
      const email = this.userEmail.value!!;
      await this.resetPasswdSvc.resetPassword(email);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: 'Correo electrónico enviado, ¡comprueba tu bandeja de entrada!'
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.router.navigate(['/login']);
      });
    } catch(error) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: 'El correo electrónico no existe, inténtelo de nuevo.'
      });
      dialogRef.afterClosed().subscribe((result) => {
        // Do nothing
      });
    }
  }*/

}

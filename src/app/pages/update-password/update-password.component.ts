import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { ResetPasswdService } from '../../services/reset-passwd.service';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {

  editable: boolean = true;
  visiblePasswd: boolean = false;

  constructor(private router: Router,
              private dialog: MatDialog) { }

  setEditable(): void {
    if (this.editable) {
      this.editable = true;
    } else {
      this.editable = false;
    }
  }

  goBack() {
    if (!this.editable) {
      this.router.navigate(['/']);
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: '¿Estás seguro de que quieres retroceder? Perderá los datos añadidos'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.router.navigate(['/account']);
        }
      });
    }
  }

  visibilityChange1() {
    const eyeControl = document.querySelector('#visibility');
    const passwdField = document.querySelector('#currentPasswd') as HTMLInputElement;
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
      eyeControl?.classList.add('fa-eye-slash');
      eyeControl?.classList.remove('fa-eye');
      passwdField.type = 'password';
    } else {
      this.visiblePasswd = true;
      eyeControl?.classList.add('fa-eye');
      eyeControl?.classList.remove('fa-eye-slash');
      passwdField.type = 'text';
    }
  }

  visibilityChange2() {
    const eyeControl = document.querySelector('#visibility2');
    const passwdField = document.querySelector('#newPasswd') as HTMLInputElement;
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
      eyeControl?.classList.add('fa-eye-slash');
      eyeControl?.classList.remove('fa-eye');
      passwdField.type = 'password';
    } else {
      this.visiblePasswd = true;
      eyeControl?.classList.add('fa-eye');
      eyeControl?.classList.remove('fa-eye-slash');
      passwdField.type = 'text';
    }
  }

  visibilityChange3() {
    const eyeControl = document.querySelector('#visibility3');
    const passwdField = document.querySelector('#repeatNewPasswd') as HTMLInputElement;
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
      eyeControl?.classList.add('fa-eye-slash');
      eyeControl?.classList.remove('fa-eye');
      passwdField.type = 'password';
    } else {
      this.visiblePasswd = true;
      eyeControl?.classList.add('fa-eye');
      eyeControl?.classList.remove('fa-eye-slash');
      passwdField.type = 'text';
    }
  }

  /*currentPassword = '';
  newPassword = '';
  repeatNewPassword = '';

  isCurrentPasswordValid = false;
  passwordMatch = false;

  visiblePasswd: boolean = false;

  editable: boolean = true;

  showCurrentPassword = false;
  showNewPassword = false;
  showRepeatNewPassword = false;

  constructor(private resetPasswdSvc:ResetPasswdService,
              public globalData: GlobalDataService,
              private router: Router,
              private dialog: MatDialog){ }


  async onSubmit() {
    const error = this.validatePassword();

    if (error !== '') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: error
      });

      dialogRef.afterClosed().subscribe((result) => {
        // Do nothing
      });
      return;
    }

    const confirmed = await this.resetPasswdSvc.confirmPassword(this.currentPassword);

    if (confirmed && this.newPassword) {
      this.isCurrentPasswordValid = true;
      await this.resetPasswdSvc.updatePassword(this.newPassword);
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: 'La contraseña se ha cambiado correctamente.'
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.router.navigate(['/user-profile']);
      });
    } else {
      this.isCurrentPasswordValid = false;
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data:'La contraseña actual no es correcta o no se ha especificado una nueva contraseña.'
      });
      dialogRef.afterClosed().subscribe((result) => {
        // Do nothing
      });
    }
  }

  checkPasswords() {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\S]{8,}$/;

    if (this.newPassword !== this.repeatNewPassword) {
      this.passwordMatch = false;
    } else if (!passwordPattern.test(this.newPassword)) {
      this.passwordMatch = false;
    } else {
      this.passwordMatch = true;
    }
  }

  validatePassword() {
    let error = '';

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\S]{8,}$/;

    if (!this.passwordMatch) {
      error = 'Las contraseñas nuevas no coinciden.';
    }

    if (!passwordPattern.test(this.newPassword)) {
      error = 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y tener una longitud de al menos 8 caracteres.';
    }

    return error;
  }






  */

}

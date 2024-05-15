import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  visiblePasswd: boolean = false;

  user: any = {
    email: '',
    password: ''
  };

  constructor(private navCtl: Router, private dialog: MatDialog) { }

  loginUser() {

  }

  visibilityChange() {
    const eyeControl = document.querySelector('#visibility');
    const passwdField = document.querySelector('#user-password') as HTMLInputElement;
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

  loginGoogle() {

  }

  openDialog(msg: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: msg
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        history.back();
      }
    });
  }

}

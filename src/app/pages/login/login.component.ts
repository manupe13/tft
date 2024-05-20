import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  visiblePasswd: boolean = false;

  user: any = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private dialog: MatDialog) { }

  loginUser() {
    /*this.userService.loginEmail(this.user.email, this.user.password)
    .then((userCredential) => {
      const userId = userCredential.user?.uid;
      if (userId) {
        this.globalData.setLoggedUserId(userId);
        this.updateUserRol(userId);
      }
      this.router.navigate(['/account']);
    })
    .catch(error => {
      const err = error.message as string;
      this.openDialog(err.replace("Firebase: ", "").replace(/\s\(.+?\)\./, ""));
    });*/
  }

  loginGoogle() {
    /*this.userService.loginGoogle().then(() => {
      const uidUser = this.userService.getCurrentUserId();
      if (uidUser) {
        this.globalDataService.setLoggedUserId(uidUser);
      }
      const docRef = this.af.collection<{ email: string, nombre: string }>('usuarios').doc(uidUser).get();
      docRef.subscribe(docSnapshot => {
        if (docSnapshot && docSnapshot.exists) {
          this.router.navigate(['/account']);
        } else {
          this.router.navigate(['/google-register']);
        }
      });
    }).catch(error => {
      const err = error.message as string;
      this.openDialog(err.replace("Firebase: ", "").replace(/\s\(.+?\)\./, ""));
    });*/
  }

  /*updateUserRol(id: string) {
    this.userService.getUsuarioById(id).then(userPromise => {
      from(userPromise).subscribe(user => {
        if(user.rol) {
          this.globalData.setLoggedInUserRol(user.rol);
        }
      })
    });
  }*/

  visibilityChange() {
    const eyeControl = document.querySelector('#visibility');
    const passwdField = document.querySelector('#login') as HTMLInputElement;
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

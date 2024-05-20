import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  editable: boolean = false;
  visiblePasswd: boolean = false;

  userId: string = '';

  userPasswd: string = '';

  //user: User = { };

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    /*if (!this.userService.getCurrentUserId()) {
      this.router.navigate(['/login']);
    }
    this.globalData.getLoggedUserId().subscribe(id => {
      this.userId = id;
    });
    if (this.userId) {
      this.userService.getUserData(this.userId).subscribe((userData: User) => {
          this.user = userData;
          console.log(this.user);
          if(this.user.password){
            this.userPasswd = this.user.password.replace(/./g, "*");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.userId = "no hay usuario";
    }*/
  }

  setEditable(): void {
    if (this.editable) {
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  /*logOut() {
    this.userService.logOut().then(() => {
      console.log('Sesión cerrada correctamente');
      this.globalData.setLoggedUserId('null');
      this.globalData.setLoggedInUserRol('null');
      this.router.navigate(['/login']);
      this.user = {};
      this.userId = 'null';
    }).catch((error) => {
      console.error(error);
    });
  }

  upadateData() {
    console.log(this.userId);
    this.userService.updateUser(this.userId, this.user).then(updatedPromise => {
      if (updatedPromise) {
        console.log("Se ha actualizado");
        this.setEditable();
      } else {
        console.log("No se ha actualizado");
      }
    });
  }*/

  setVisiblePasswd() {
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
    }else {
      this.visiblePasswd = true;
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
          this.editable = false;
          this.router.navigate(['/account']);
        }
      });
    }
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  editable: boolean = false;

  constructor(private navCtl:Router, private router: Router, private dialog: MatDialog) { }

  openDialog(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: '¿Estás seguro de que quieres retroceder? Perderá los datos añadidos'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.navCtl.navigate(['/login']);
      }
    });
  }

  /*setEditable(): void {
    if (this.editable) {
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  goBack() {
    if (!this.editable) {
      this.router.navigate(['/login']);
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
  }*/

}

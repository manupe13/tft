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

  constructor(private navCtl:Router,private dialog: MatDialog) { }

  openDialog(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: '¿Estás seguro de que quieres retroceder? Perderá los datos añadidos'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.navCtl.navigate(['login']);
      }
    });
  }

}

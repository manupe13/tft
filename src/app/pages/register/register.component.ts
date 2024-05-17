import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usuario:User = { };

  user:any = {
    name:null,
    surname1:null,
    surname2:null,
    date:null,
    country:null,
    phone:null,
    email:null,
    password:null
  };

  forma!:FormGroup;

  phonePattern = /^(6|7|8|9)\d{8}$/;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.?[a-zA-Z]{2,4}$/;
  passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;

  //editable: boolean = false;

  constructor(private usrServ: UserService, public globalData: GlobalDataService, private navCtl:Router, private dialog: MatDialog, private fb:FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario(){
    this.forma = this.fb.group({
      name:['', [Validators.required]],
      surname1:['', [Validators.required]],
      surname2:['', [Validators.required]],
      date:['', [Validators.required]],
      country:['', [Validators.required]],
      phone:['', [Validators.required, Validators.pattern(this.phonePattern)]],
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get nombreNoValido(){
    return this.forma.get('name')?.invalid && this.forma.get('name')?.touched;
  }
  get surname1NoValido(){
    return this.forma.get('surname1')?.invalid && this.forma.get('surname1')?.touched;
  }
  get surnam2eNoValido(){
    return this.forma.get('surname2')?.invalid && this.forma.get('surname2')?.touched;
  }
  get dateNoValido(){
    return this.forma.get('date')?.invalid && this.forma.get('date')?.touched;
  }
  get countryNoValido(){
    return this.forma.get('country')?.invalid && this.forma.get('country')?.touched;
  }
  get phoneNoValido(){
    return this.forma.get('phone')?.invalid && this.forma.get('phone')?.touched && !this.phonePattern.test(this.forma.get('phone')?.value);
  }
  get emailNoValido(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched && !this.emailPattern.test(this.forma.get('email')?.value);
  }
  get passwordNoValido(){
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }

  onSubmit(){
    this.usuario.nombre = this.user.name;
    this.usuario.apellido1 = this.user.surname1;
    this.usuario.apellido2 = this.user.surname2;
    this.usuario.date = this.user.date;
    this.usuario.country = this.user.country;
    this.usuario.phone = this.user.phone;
    this.usuario.email = this.user.email;
    this.usuario.password = this.user.password;
    this.usuario.existentes = [];
    this.usuario.consumidos = [];
    this.usrServ.registerEmail(this.user.email, this.user.password, this.usuario).then(() => {
      const userID = this.usrServ.getCurrentUserId();
      if(userID){
        this.globalData.setLoggedUserId(userID);
        this.navCtl.navigate(['account']);
      }
    }).catch((err) => {
      console.error(err);
    });
  }

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

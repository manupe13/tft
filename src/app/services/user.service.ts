import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, authState } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../interfaces/user';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private af: AngularFirestore, private auth: Auth, private router: Router) { }

  getUsuarios() {
    return this.af.collection<User>('usuarios').valueChanges();
  }

  async getUsuarioById(id: string) {
    return this.af.collection<User>('usuarios').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as User;
      })
    );
  }

  async createUser(user: User): Promise<string>{
    try {
      return this.af.collection<User>('usuarios').add(user).then(
        (docRef => {
          return docRef.id;
        })
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async updateUser(id: string, user: User) {
    try {
      await this.af.collection<User>('usuarios').doc(id).update(user).then();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async deleteUser(id: string) {
    try {
      await this.af.collection<User>('usuarios').doc(id).delete();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  loginEmail(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async loginGoogle() {
    try {
      const userCredential = await signInWithPopup(this.auth, new GoogleAuthProvider());
      const user = {
        email: userCredential.user.email,
        nombre: userCredential.user.displayName
      };
      const docRef = this.af.collection<{ email: string, nombre: string }>('usuarios').doc(userCredential.user.uid).get();
      const docSnapshot = await docRef;
      if(docSnapshot && docSnapshot){
        this.router.navigate(['/account']);
      }else{
        this.router.navigate(['/google-register']);
      }
    } catch (error) {
      console.log('Error al autenticar con Google:', error);
    }
  }

  registerEmail(email: string, password: string, usuario: User) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(userCredential =>{
      this.af.collection('usuarios').doc(userCredential.user.uid).set(usuario);
    })
  }

  updateUserWithGoogle(uid:string, user: User){
    try {
      this.af.collection<User>('usuarios').doc(uid).set(user).then();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  logOut() {
    return signOut(this.auth);
  }

  userLogged(){
    return authState(this.auth);
  }

  getCurrentUserId(){
    return this.auth.currentUser?.uid;
  }

  getUserData(userId: string): Observable<User> {
    return this.af.collection('usuarios').doc(userId).valueChanges()
      .pipe(
        map((userData: any) => {
          const id = userId;
          return { id, ...userData } as User;
        })
      );
  }

}

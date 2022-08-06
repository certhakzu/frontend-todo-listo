import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { userLogin } from 'src/interface/userLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) { }

   /**
   * Metodo para realizar el registro de usuario
   * @param email
   * @param password
   */
  async SignUp(user: userLogin/* name: string, email: string, password: string */) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      await this.SetUserData(result.user);

    } catch (error) {

    }

  }

  async SetUserData(user: any) {
    /* const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const users: userLogin = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: ""

    };
    return await userRef.set(users, {
      merge: true,
    }); */
    console.log(user);
  }

  /**
   * metodo para iniciar sesion en la app
   * @param email
   * @param password
   */

   async SignIn(email: string, password: string) {
    try {
      await this.afAuth
        .signInWithEmailAndPassword(email, password);

    } catch (error) {
      alert('Revisa tu correo o contraseña');
    }
  }

  async SingInGoogle() {
    try {
        let res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        const user: userLogin = {
          id: res.user?.uid!,
          name: res.user?.displayName!,
          email: res.user?.email!,
          password: ""
        }
        await this.SignUp(user);
    } catch (error) {
      console.log("Ocurrio un error");
    }
}
}

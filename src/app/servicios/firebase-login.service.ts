import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {

  constructor(private afAuth:AngularFireAuth, private router:Router) { }
  login(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }
  logout(){
    return this.afAuth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }
  async create_user(email:string,password:string){
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email,password);
    return userCredential;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor() { }
  login(credentials: any){
  console.log(credentials, "desde el servicio");
  return new Promise((accept, reject) => {
  if (credentials.email === 'rualre18@gmail.com' && credentials.password === '123456') {
      accept('login correct');
      reject('login incorrect')
  }
  });
  }
}

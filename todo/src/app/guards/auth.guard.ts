import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    let fezDoacao = localStorage.getItem('fezdoacao');

    if(fezDoacao == null || fezDoacao == undefined){
      this.router.navigate(['doacao'])
      return false;
    }

    return true;
  }

};


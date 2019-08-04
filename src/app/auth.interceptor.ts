import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { Subject } from 'rxjs';
import { ReplaceSource } from 'webpack-sources';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
   constructor(){}

   intercept(req, next){
       var token = localStorage.getItem('token')
       var authRequest = req.clone({
           headers: req.headers.set('Authorization', `bearer ${token}`) 
       })
       return next.handle(authRequest)
   }

}
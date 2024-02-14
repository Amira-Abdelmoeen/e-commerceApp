import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface accountDataInterface{
  name? : string ;
  email : string;
  password : string;
  repassword? : string;
  phone? : string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  registerApi(rData :accountDataInterface):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` ,rData)
  }

}

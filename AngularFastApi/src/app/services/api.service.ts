import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel} from 'src/app/main/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) { }

  getTablet():Observable<any>{

    let uri="http://35.194.0.229:8082/backen2/rs/user2/ListUsers"
    let url=uri

    // console.log(url)
    let headers =new HttpHeaders().set('Content-Type', 'application/json')

    // return this.http.get<any>('/api/ListUsers');
    return this.http.get<any>(uri);

  }
  registrarTablet(user:UserModel):Observable<any>{
    let uri="http://35.194.0.229:8082/backen2/rs/user2/RegistroUser"
    let url=uri
    return this.http.post<any>(uri,user);
  }



}

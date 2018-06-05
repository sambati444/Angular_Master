import{Injectable} from '@angular/core';
import{Http,Headers} from '@angular/http';

@Injectable()
export class AuthenticateService{

constructor(private http:Http){}
getServers(){
 return   this.http.get('http://localhost:8080/greeting?name=uttej');
}

} 
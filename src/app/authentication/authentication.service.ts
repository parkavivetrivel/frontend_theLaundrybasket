import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class AuthenticationService {
  
  

  constructor(private http:HttpClient) { }

  signupuserData(uservalues: any){
    let headers2 = new HttpHeaders({'Content-Type':'application/json'});
    let options = ({headers:headers2});
    let body = {
      
      username: uservalues.username,
      email: uservalues.email,
      password: uservalues.password
    }
    return this.http.post('https://thelaundrybasket.onrender.com/signup', JSON.stringify(body),options);
  }

  loginuserdata(uservalues: any){
    let headers2 = new HttpHeaders({'Content-Type':'application/json'});
    let options = ({headers:headers2});
    let body = {
      
      username: uservalues.username,
      password: uservalues.password
    }
    let par = this.http.post('https://thelaundrybasket.onrender.com/login', JSON.stringify(body),options);
    return par;

  }
 orderuserData(uservalues: any){
    let headers2 = new HttpHeaders({'Content-Type':'application/json'});
    let options = ({headers:headers2});
    let body = {      
      ServiceType: uservalues.ServiceType,
      NoOfShirts: uservalues.NoOfShirts,
      NoOfPants: uservalues.NoOfPants,
      NoOfLadiesTop: uservalues.NoOfLadiesTop,
      NoOfBlouse: uservalues.NoOfBlouse,
      NoOfDhoti: uservalues.NoOfDhoti,
      NoOfSaree: uservalues.NoOfSaree,
      NoOfShaul: uservalues.NoOfShaul,
      totalitems: uservalues.totalitems,
      totalamount: uservalues.totalamount,
    }
    let parkavi = this.http.post('https://thelaundrybasket.onrender.com/orderList', JSON.stringify(body),options);
    return parkavi;
  }
  AccessOrderData(){
    let parkavi = this.http.get('https://thelaundrybasket.onrender.com/orderList');
    return parkavi;
    


  }
  
  


  }



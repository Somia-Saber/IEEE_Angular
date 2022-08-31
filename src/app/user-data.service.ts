import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
apiUrl = "http://localhost:3000/api/user";
  constructor(public httpclint:HttpClient) {}

getuser(){
  return this.httpclint.get(this.apiUrl);
}
saveUser(data:any){
  console.log(data);
  return this.httpclint.post(this.apiUrl,data);
}
  //  postUserData(){
  //   try{
  //   //  return this.httpclint.post(this.apiUrl);

  //   }catch(err:any){
  //     console.log(err.message);
  //   }
  //  }
}

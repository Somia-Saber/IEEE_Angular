import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}
    login = new FormGroup({
      Username : new FormControl(''),
      Password : new FormControl('')
});
   

  ngOnInit(): void {
  }
  saveData(){
    console.log(this.login.value);
  }

}

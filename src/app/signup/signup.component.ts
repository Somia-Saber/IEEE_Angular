import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import{UserDataService} from '../user-data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user:UserDataService) {}
    signup = new FormGroup({
      FirstName : new FormControl(''),
    LastName: new FormControl(''),
    IeeeId: new FormControl(''),
    Position: new FormControl(''),
  Phone: new FormControl(''),
   UniId: new FormControl(''),
    facluty: new FormControl(''),
  major: new FormControl(''),
    level: new FormControl(''),
    Email: new FormControl(''),
  gender: new FormControl(''),
    BirthDate: new FormControl(''),
    City: new FormControl(''),
    Password: new FormControl(''),
    Confirm: new FormControl(''),
    imgg: new FormControl('')

});

  ngOnInit(): void {
  }
  saveData(){
    // console.log(this.signup.value);
    this.user.saveUser(this.signup.value).subscribe((result)=>{
      console.log(result);
    });
  }
}

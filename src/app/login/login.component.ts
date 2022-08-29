import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginResto=new FormGroup({
  
    email:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private getlogin:RestoService) { }

  ngOnInit(): void {
  }
  logindata(){
    console.log(this.loginResto.value)
  //   this.getlogin.loginlist(this.loginResto.value).subscribe((result)=>{
  //     console.log(result);
  
    
  //  })
  }

}

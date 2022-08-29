import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  constructor(private reg :RestoService) { }

  ngOnInit(): void {
  }
  alertreg:boolean=false;
  collectionregdata(){
    // console.log(this.register.value)
    this.reg. registervalue(this.register.value).subscribe((regs)=>{
      console.log(regs);
      this.alertreg=true;
    })
    this.register.reset({})
  }
  closealertreg(){
    this.alertreg=false;
  }

}

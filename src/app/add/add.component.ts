import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private add:RestoService) { 

  }
  addResto=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  address:new FormControl('')
})
alert:boolean=false;
  ngOnInit(): void {
  }
  collectdata(){
    // console.log(this.addResto.value)
    this.add.postlist(this.addResto.value).subscribe((result)=>{
       console.log(result);
       this.alert=true;
     
    })
    this.addResto.reset({})
  }
  closealert(){
    this.alert=false;
  }



}

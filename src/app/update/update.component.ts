import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 
   editResto=new FormGroup({
    name: new FormControl<string>('',{nonNullable:true}) , 
    email:new FormControl('') ,
    address:new FormControl('')
    
  })

  res: any = {};
  
 
  constructor(private route:ActivatedRoute, private resto:RestoService) {
    
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])
    this.resto.getCurdata(this.route.snapshot.params['id']).subscribe((response)=>{
      this.res = response;
     
      this.editResto.patchValue({
        name: this.res.name,
        email: this.res.email,
        address: this.res.address,
      });
      
    
 
    })
   
  }
  alart:boolean=false;
  updatecollection(){
    // console.log(this.editResto.value)
    this.resto.getupdarevalue((this.route.snapshot.params['id']),this.editResto.value).subscribe((val)=>{
      console.log(val)
      this.alart=true;
    })
this.editResto.reset({})
     
  }
  updatealert(){
    this.alart=false;
  }


}

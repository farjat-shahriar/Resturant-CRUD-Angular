import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
collection:any=[];
  constructor(private getdata:RestoService) { 
    this.getdata.getlist().subscribe((res)=>{
      //  console.log(res)
       this.collection =res;
    })
  }
  deleteresto(item: any){
    this.collection.splice(item-1,1);
//  console.log(item)
  this.getdata.deleterestodata(item).subscribe((result)=>{
    console.log(result)
   
})
  }
  ngOnInit(): void {
  }

}

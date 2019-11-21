import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  myData = [
    {
      name:"kalpriksh",
      mage:29
    },
    {
      name:"dss",
      mage:52
    },{
      name:"sggs",
      mage:42
    },{
      name:"fdsfg",
      mage:21
    },{
      name:"dfsh",
      mage:24
    }
  ];
  constructor(private myService : RecordsService) {

   }

   ClickFunction = () =>
   {
      console.log(this.myService.getData());

   }

   AlterData = () =>
   {
     this.myService.AlterData(this.myData);
   }

  ngOnInit() {
  }

}

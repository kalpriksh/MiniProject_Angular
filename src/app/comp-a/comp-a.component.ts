import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  isEnabled = true;
  myField = 'lol';

  records = [
    {
      name:"kalpriksh",
      age:29
    },
    {
      name:"dss",
      age:52
    },{
      name:"sggs",
      age:42
    },{
      name:"fdsfg",
      age:21
    },{
      name:"dfsh",
      age:24
    }
  ]

  constructor() { }

  clickFunction = (e) => {

    console.log(e);
    this.isEnabled = !this.isEnabled;

  }
  

  ngOnInit() {
      
  }

}

import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  isEnabled = true;
  myField = 'lol';

  records = {};

  constructor(private allRecords : RecordsService) {
    this.records  =  allRecords.getData();
   }

  clickFunction = () => {
    console.log(this.allRecords.getData());
  }
  

  ngOnInit() {
      
  }

}

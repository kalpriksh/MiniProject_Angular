import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() {
    
   }

  dataCommon =[
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

  getData(){
    return this.dataCommon
  }

  AlterData = (array) =>{
    this.dataCommon = array;
  }

}

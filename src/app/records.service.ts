import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


interface myData{
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
    
   }

  dataCommon =[
      
  ] 

  getData(){
    return this.http.get<myData>("http://localhost:8003/file.json")
  }

  AlterData = (array) =>{
    this.dataCommon = array;
  }

}

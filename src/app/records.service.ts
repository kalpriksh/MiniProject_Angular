import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



interface myData{
  records: Array<{
    name: String,
    age: number
  }>
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
    // return this.http.get<myData>("/api/file.json")
    // return this.http.get('http://localhost:8003/api/file.json')
    return this.http.get<myData>('/api/file.json')

  }

  AlterData = (array) =>{
    this.dataCommon = array;
  }

}

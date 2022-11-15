import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const basestudentUrl = "http://localhost:8080/student"
const createstudentUrl = "http://localhost:8080/student/add"
const delstudentUrl = "http://localhost:8080/student/del"
const putstudentUrl = "http://localhost:8080/student/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllstudent():Observable<any>{
  const url = "http://localhost:8080/allstudent"
  return this._http.get<any>(url)
}

 // create
 createstudent(student: any):Observable<any>{
  console.log(student,'createapi=>');
  return this._http.post(createstudentUrl, student)
}

//deleting 

deletestudent(id: any): Observable<any> {
  return this._http.delete(`${delstudentUrl}/${id}`);

}

//update 
updatestudent(id: any, student: any): Observable<any> {
  return this._http.put(`${putstudentUrl}/${id}`, student);

}

//get one 
getOnestudent(id:any):Observable<any>{
  return this._http.get(`${basestudentUrl}/${id}`);
}

}

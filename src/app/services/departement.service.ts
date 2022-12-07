import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IDepartement } from '../interface/departement.interface';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseurl=environment.baseurl;
  constructor(private httpClient: HttpClient) { }

  
  // getdep(): Observable<string> {
  //   return this.httpClient.get('departement/all'
  //  , {
  //     responseType: "text",
  //   });
  // }

  getAllDep():Observable<IDepartement[]>{
    return this.httpClient.get<any>(`${this.baseurl}/departement/all`)
  }

    createDep(departement:any){
    return this.httpClient.post(`${environment.baseurl}/departement/add`,departement)
   }


   deleteDep(id:any){
    return this.httpClient.delete(`${environment.baseurl}/deletedep/${id}`)
  }

  updateDep(id:any,depart: any){
    return this.httpClient.put(`${environment.baseurl}/updatedep/${id}`,depart)
  }
}

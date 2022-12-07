import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

/*   readonly API_URL = "http://localhost:9092/scrum/etudiant"

  readonly ENDPOINT_etudiants = "/etudiants" */

  constructor(private httpClient: HttpClient) { }


/* getEtudiants(){
  return this.httpClient.get(this.API_URL+this.ENDPOINT_etudiants)
} */
}
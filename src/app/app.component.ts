import { Component } from '@angular/core';
import { EtudiantService } from './services/etudiant.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers:[EtudiantService]
})
export class AppComponent /*implements OnInit*/ {
  title = 'Angprj';
  // etudiants: Object

  constructor(/*private etudiantService: EtudiantService*/){}

/*ngOnInit() { 
   console.log('On init...')
  this.etudiantService.getEtudiants().subscribe((datas) => {
    this.etudiants = datas;
  }) 
}
*/
}

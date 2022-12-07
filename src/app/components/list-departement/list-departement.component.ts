import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDepartement } from 'src/app/interface/departement.interface';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  public departments:IDepartement[]=[];
  constructor(private _depService:DepartementService) { }

  ngOnInit(): void {
    this.getDep()
    console.log(this.getDep);
    
  }

  getDep() {
    this._depService.getAllDep().subscribe((response: any) => {
      this.departments = response;
      console.log("deps",this.departments);
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    }
    );
  }







}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { type } from 'os';
import { IDepartement } from 'src/app/interface/departement.interface';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  
  submitted = false;
  listedep:any;
nomDep:any=""

  constructor(
    private departementservice: DepartementService,
   
   
    ) { 
    }

  ngOnInit() {


  
           this.getDep();
  }


  // getDep() {
  //    this.departementservice.getAllDep().subscribe((d)=>{
  //     console.log(d);
  //    });
  // }

  getDep() {
    this.departementservice.getAllDep().subscribe((res: IDepartement[]) => {
      this.listedep = res;
      console.log('listedep', this.listedep);
    },(erroor : HttpErrorResponse)=>{
      alert(erroor.message)
    }
    );

  }

  onSubmit(): void {

   this.submitted = true;
     
    this.departementservice
      .createDep({nomDepart:this.nomDep})
      .subscribe((res: any) => {
        console.log(res);
        Swal.fire('Name added !!');
      });
    // console.log(JSON.stringify(this.form.value, null, 2)); 
  }

}

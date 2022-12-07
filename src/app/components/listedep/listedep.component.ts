import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listedep',
  templateUrl: './listedep.component.html',
  styleUrls: ['./listedep.component.css']
})
export class ListedepComponent implements OnInit {
  
  listedep:any;
  closeResult = '';
  constructor(
    private departementservice: DepartementService,
    private modalService: NgbModal,
    private formdep: FormGroup
  ) { }

  ngOnInit(): void {
    this.getDep();
  }

  
  getDep() {
    this.departementservice.getAllDep().subscribe((res: any) => {
      this.listedep = res['data'];
      console.log('listedep', this.listedep);
    },(err:any)=>{
      console.log("error",err)
    });
  }




  
  deletesubdep(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.departementservice.deleteDep(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          this.getDep();
        });
      }
    });
  }

  open(content: any, subcategory: any) {
    this.formdep.patchValue({
      name: subcategory.name,
      description: subcategory.description,
      _id: subcategory._id,
    });

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
Updatedep(){
  this.departementservice.updateDep(this.formdep.value._id, this.formdep.value).subscribe((res: any) => {
  console.log("reponse: ",res);
    Swal.fire('Category update')
    this.getDep();
  })

}
}

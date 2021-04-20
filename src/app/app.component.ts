import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { enumValues } from 'src/environments/confg';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'practice1';
  public hide:boolean=false;
  public isClicked: boolean = true;
  closeResult:string;
  tableData: any = Object.values(enumValues.tableData);


  constructor(private modalSerice: NgbModal) { }

  ngOnInit(): void {
    
    this.tableData.forEach(e => {
      console.log(e.date)
       let date = new Date(Date.UTC (e.date));
      e.date = date.toUTCString();
    });
    
      
  }

  clickBtn() {
    this.isClicked = true;
  }
  
  public javaEmps: Array<any> = [
    {
        name:"Tejas",
        eid:1,
        club:"Barca"
    },
    {
      name:"neymar",
      eid:1,
      club:"Barca"
  },
  {
    name:"ronaldo",
    eid:1,
    club:"Barca"
}
  ];

  open(content) {
    this.modalSerice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open2(content) {
    // this.hide = true;
    
    this.modalSerice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      $('#content1').modal('hide');
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
}

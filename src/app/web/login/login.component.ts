import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  display='none'; //default Variable
  constructor() { }

  ngOnInit(): void {
  }

  closeModalDialog(){
    console.warn('test');
    this.display='none'; //set none css after close dialog
   }
}

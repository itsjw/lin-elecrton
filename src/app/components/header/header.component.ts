import { Component, OnInit } from '@angular/core';
const {ipcRenderer: ipc} = require('electron');
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  handleclick(type:string){

    ipc.send(type);
    
  }
  handeldblclick(){
    alert()
  }
  ngOnInit() {
    
  }

}

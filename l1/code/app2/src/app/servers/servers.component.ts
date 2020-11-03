import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreateMsg = "No server created";

  constructor() { }

  ngOnInit(): void {
    let tm = 2000 + (Math.random() * 3200);
    console.log("tm " + tm);
    var fnDelegate = function(tm : number, me : ServersComponent){
      console.log("tm tring " + tm);
      me.allowAddServer = true;
    }
    setTimeout(() => { fnDelegate(tm, this);}, tm);
    tm = 8000 + (Math.random() * 3200);
    console.log("tm " + tm);
  }

  doAddNewServer() : void{
    console.log("Add");
    const dt = new Date();
    this.serverCreateMsg = "Server crearted at " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  }

}

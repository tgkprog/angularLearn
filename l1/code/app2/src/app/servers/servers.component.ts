import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreateMsg = "No server created";
  serverName = "Default server";

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
    this.serverCreateMsg = "Server crearted at " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds()
    + " with name : " + this.serverName + ".";
  }

  onServerNameTxtChange(event : Event) : void {
    console.log(event);
    //this.serverName
   //// this.serverName = (<HTMLInputElement>event.target).value;

  }

  onUpdateTextTest1(event : Event) : void{
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
  }
}

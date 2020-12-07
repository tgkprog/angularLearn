import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
  //,
  //styleUrls: ['./app.component.css']
})
export class ServerComponent {
  static serverCnt = 0;
  serverId = ++ServerComponent.serverCnt;
  serverName : string = 'node ' + this.serverId;
  serverOnline = (this.serverId == 1 ? true : false);
  timeUp : number = 0; 
  

  constructor() {
    ///this.serverName = n;
    setInterval(() => {
      this.timeUp++;
    }, 1000);
   }

  getServerStatus(){
    if(this.serverOnline){
      return "online";
    }else{
      return "offline";
    }
  }
  
}

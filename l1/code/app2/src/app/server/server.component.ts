import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
  //,
  //styleUrls: ['./app.component.css']
})
export class ServerComponent {
  static serverCnt = 0;
  serverId = ++ ServerComponent.serverCnt;
  serverName : string = 'node ' + this.serverId;
  serverOnline = (this.serverId == 1 ? true : false);

  

  constructor() {
    ///this.serverName = n;
   }

  getServerStatus(){
    if(this.serverOnline){
      return "online";
    }else{
      return "offline";
    }
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ParaComponent } from './para/para.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, ParaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

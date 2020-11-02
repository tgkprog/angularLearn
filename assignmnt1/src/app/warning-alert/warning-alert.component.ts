import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'o-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  msg = "Default Warning Reason"

  constructor() { }

  ngOnInit(): void {
  }

}

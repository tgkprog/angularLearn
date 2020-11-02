import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'o-success-alert',
  template: `<p>Success</p>`,
  styles: ['p{color:#44ff11;background-color : purple}',
`p{text-align: center}`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

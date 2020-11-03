import { Component, OnInit } from '@angular/core';

let s3 = "h4 {color : blue}";
class A{
 s2 : string = `h4 {color : red}`;
}
const x = new A();
let c1 : string = "h4 {padding : 30px}" ;
let c2 : string =  x.s2;
/*console.log(x.s2 + ", " + (typeof (x.s2)));
console.log(c1 + ", " + (typeof (c1)));
console.log("c2 " + c2 + ", type " + (typeof (c2)));
console.log("c1 type is same as c2's type? " + (typeof (c1) === (typeof (c2))));*/
@Component({
  selector: 'opara',
  template: `
  <br>
  Count is {{ c }}
  <h4>Para comp</h4>
  `,
  styles: [`
  color : gray
  `, s3, c1
  //,c2, or  x.s2 throws error "Failed to resolve styles at position 3 to a string"
]

})
export class ParaComponent implements OnInit {
  c = 1;
  constructor() { }

  ngOnInit(): void {
  }

}

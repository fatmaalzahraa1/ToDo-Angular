
import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  tasks:Array<any>;


  add(e:any){
    this.tasks.push(e);

  }
  constructor(){
    this.tasks=[];
  }

}
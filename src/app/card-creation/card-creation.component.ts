import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.scss']
})
export class CardCreationComponent implements OnInit {
  userData:any
  userList :any
  constructor() { }

  ngOnInit(): void {
    this.userData= [{
      name:"Kavsih",
      email:"kavish",
      age:"21"
    },{
      name:"Arun",
      email:"arun",
      age:"21"
    },{ 
      name:"Karthi",
      email:"karthi",
      age:"23"
    },{
      name:"surya",
      email:"surya",
      age:"25"
    },{
      name:"Kruthika",
      email:"Kruthika@gmail",
      age:"78"
    }],
    this.userList = [
      
    ]
  }

}

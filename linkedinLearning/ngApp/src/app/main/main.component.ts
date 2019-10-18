import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = "EL-IDRISSI MOHAMMED"

  constructor() { }

  ngOnInit() {
  }

  userClick(){
    console.log("button Clicked")
  }

}

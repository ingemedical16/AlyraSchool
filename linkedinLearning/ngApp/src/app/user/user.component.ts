import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new  FormGroup( {
    name: new FormControl(''),
    email: new FormControl(''),
  })
  //dateService: DateService; j#ai fait public
  
  constructor(public dateService: DateService ) { 
    
  }

  ngOnInit() {
    
    
  }
  showForm(){
    console.log(this.userForm);
  }

}

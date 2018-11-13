import { Component, OnInit } from '@angular/core';
import { User } from '../../userClasses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = new User('Ravi Yadav', 'Web Developer');
  hideGrid = true;
  constructor() { }
  ngOnInit() {
  }

}

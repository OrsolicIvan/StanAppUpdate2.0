import { Apartment } from 'src/app/_models/apartment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-ap',
  templateUrl: './rent-ap.component.html',
  styleUrls: ['./rent-ap.component.css']
})
export class RentApComponent implements OnInit {
apartment:Apartment
  constructor() { }

  ngOnInit(): void {
  }

}

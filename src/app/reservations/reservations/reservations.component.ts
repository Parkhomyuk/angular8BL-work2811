import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
 
import {MatTableDataSource} from '@angular/material/table';





interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
   
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 146989754,
    
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 146989754,
  
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 146989754,
 
  }
];
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})




export class ReservationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  countries = COUNTRIES;

}

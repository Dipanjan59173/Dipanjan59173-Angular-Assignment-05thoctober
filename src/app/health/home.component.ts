import { Component, OnInit } from '@angular/core';
import { WeightService } from './weight.service';
import { IWeight } from './weights';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle="Home Weight List"
  weights: IWeight[];
  
  constructor(private _weightService:WeightService) { }

  ngOnInit(): void {
    
     this.weights=this._weightService.getWeight()
  }

}

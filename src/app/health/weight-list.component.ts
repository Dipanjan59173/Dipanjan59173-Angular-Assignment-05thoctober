import { Component, OnInit } from '@angular/core';
import { WeightService } from './weight.service';
import { IWeight } from './weights';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent implements OnInit {
  pageTitle="Weight List"
  weights: IWeight[]
  

  constructor(private _weightServic:WeightService) {

   }

  ngOnInit(): void {
    this.weights = this._weightServic.getWeight()
  }

}

import { Component, OnInit } from '@angular/core';
import { Icommunity } from './icommunity';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  pageTitle="Home Comment List"
  communities: Icommunity[];

  constructor(private _communityService:WeightService) { }

  ngOnInit(): void {
    this.communities=this._communityService.getComment()
  }

}

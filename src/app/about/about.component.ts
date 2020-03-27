import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  pageTitle: String = 'Location Data fetched for location:';
  locationDetails: any[] = [
        {
            "loadOirigin": 89, 
            "trailerPrefix": "RPS", 
            "trailerNmbr": "123456", 
            "NextLoadPointList": [ 
            {"nlpId":"6104","nlpCount":"300"}, 
            {"nlpId":"6125","nlpCount":"205"}, 
            {"nlpId":"6145","nlpCount":"0"} 
            ] 
        },
        {
            "loadOirigin": 132, 
            "trailerPrefix": "RPS", 
            "trailerNmbr": "123456", 
            "NextLoadPointList": [ 
            {"nlpId":"6104","nlpCount":"300"}, 
            {"nlpId":"6125","nlpCount":"205"}, 
            {"nlpId":"6145","nlpCount":"0"} 
            ] 
        }
    ];

  ngOnInit(): void {
  }

}

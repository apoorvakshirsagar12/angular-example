import { Component, OnInit } from '@angular/core';
import { DvmResp } from '../classes/dvmResp';
import { HandlingUnitDue } from '../classes/handlingUnitDue';
import { NextLoadPoint } from '../classes/nextLoadPoint';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  constructor(private httpClient: HttpClient){ }

  lstDetails: DvmResp[];
  reqId: number;
  count: number;
  temp: NextLoadPoint[];
  onIdKeyUp(event:any){
    this.reqId= event.target.value;
  }
  
  getCommentsByParameter(){
    this.httpClient.get(`http://www.mocky.io/v2/5e8230d62f000050002fb95a`)
    .subscribe(
      (data:any)=>{
       this.lstDetails = data.handlingUnitDueList
       console.log(this.lstDetails);
      }
    );
  }

}

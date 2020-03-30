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

  onIdKeyUp(event:any){
    this.reqId= event.target.value;
  }
  
  getCommentsByParameter(){
    
    if(!this.reqId){
     document.getElementById("msg").innerHTML = "Location ID is empty";
    }else if(isNaN(this.reqId)){
      document.getElementById("msg").innerHTML = "Invalid Location ID";
     }
    else{
      document.getElementById("msg").innerHTML = "";
      this.httpClient.get(`http://www.mocky.io/v2/5e8230d62f000050002fb95a`)
    .subscribe(
      (data:any)=>{
       this.lstDetails = data.handlingUnitDueList
      }
    );
    }
  }

}

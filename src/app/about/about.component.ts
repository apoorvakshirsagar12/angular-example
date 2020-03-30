import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/posts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  constructor(private httpClient: HttpClient){ }

  lstPosts: Posts[];
  reqId: number;
  onIdKeyUp(event:any){
    this.reqId= event.target.value;
  }
  
  getCommentsByParameter(){
    this.httpClient.get(`https://jsonplaceholder.typicode.com/posts?id=${this.reqId}`)
    .subscribe(
      (data:any[])=>{
        console.log(data.length);
        this.lstPosts = data;
      }
    );
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(public http: Http){

  }
  get_people(){
    return this.http.get("https://swapi.co/api/people/").map(res => res.json())
  }
  get_more(suiv){
    return this.http.get(suiv).map(res => res.json())
  }
}

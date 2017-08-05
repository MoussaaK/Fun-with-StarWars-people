import { Component } from '@angular/core';
import  { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})

export class AppComponent {
  title = 'appMouss';
  // data = [
  //   {name: "Benoit", email: "benoit@gmail.com", age: 20},
  //   {name: "Mahmoud", email: "mahmoud@shoppyfood.com", age: 21},
  //   {name: "Moussa", email: "moussa@gmail.com", age: 20},
  //   {name: "hakim", email: "hakim@gmail.com", age: 20},
  //   {name: "hakim", email: "hakim@gmail.com", age: 32},
  //   {name: "hakim", email: "hakim@gmail.com", age: 20},
  //   {name: "hakim", email: "hakim@gmail.com", age: 30},
  //   {name: "hakim", email: "hakim@gmail.com", age: 20},
  //   {name: "hakim", email: "hakim@gmail.com", age: 20},
  //   {name: "hakim", email: "hakim@gmail.com", age: 40},
  //   {name: "hakim", email: "hakim@gmail.com", age: 20}
  // ]
  data;
  next;
  prev;
  page;
  constructor(public appservice: AppService){
    appservice.get_people().subscribe(data => {
      this.data = data.results;
      this.next = data.next;
      this.prev = data.previous;
      this.page = 1;
      console.log("data", data)
    })
  }

  get_people(choice){
    let choix = ""
    if(choice) {
      choix = this.next;
    } else {
      choix = this.prev;
    }
    this.appservice.get_more(choix).subscribe(data => {
        this.data = data.results;
        this.next = data.next;
        this.prev = data.previous;
        this.page = choix.slice(-1);
        console.log("get_people", data);
    })
  }
}

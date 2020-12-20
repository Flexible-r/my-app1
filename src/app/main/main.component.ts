import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  model = {
    gorod: "",
    strana: ""
  }
  models:any[]=[]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addItem() {
   localStorage.setItem("data",JSON.stringify(this.model))
   this.models.push({
     "gorod":this.model.gorod,
     "strana":this.model.strana
   })
  }
}
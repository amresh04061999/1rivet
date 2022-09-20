import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrls: ['./wordcounter.component.scss']
})
export class WordcounterComponent implements OnInit {
  customText: string;
  constructor() {
    this.customText="Java is to JavaScript what car is to Carpet.";
   }

  ngOnInit(): void {
  }

}

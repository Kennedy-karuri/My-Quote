import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [ 
    new Quote(1, 'MARTIN lUTHER', 'yolo','Steve',new Date(2020,4,15)),
    new Quote(2, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'hey you',new Date()),
    new Quote(3, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'hey you',new Date()),
    new Quote(4, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'hey you',new Date()),
    new Quote(5, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'hey you',new Date()),
  ];  
  constructor() { }
  
  ngOnInit(): void {
  }

}

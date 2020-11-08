import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [ 
    new Quote(1, 'MARTIN lUTHER', 'I have a dream','Steve',new Date(2020,4,15)),
    new Quote(2, 'SOCRATES', 'The unexamined life is not worth living.', 'Petrah',new Date(2020,7,30)),
    new Quote(3, 'SOCRATES', 'Wonder is the beginning of wisdom', 'Ken',new Date(2019,6,27)),
    new Quote(4, 'Aristotle', 'The roots of education … are bitter, but the fruit is sweet.', 'Farzana',new Date(2019,8,29)),
    new Quote(5, 'Sir Isaac Newton', 'If I have seen further it is by standing on the shoulders of giants', 'Carol',new Date(2020,8,6)),
  ];  
  constructor() { }
  
  ngOnInit(): void {
  }

}

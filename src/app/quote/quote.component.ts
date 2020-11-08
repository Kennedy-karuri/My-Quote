import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Thomas A. Edison', '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”', 'Steve', new Date(2020, 11, 11)),
    new Quote(2, 'Steve Jobs', ' “Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ', 'Petrah', new Date(2020, 12, 30)),
      
  ]; 
  addNewQuote(quote) {
    let goalLength = this.quotes.length;
    quote.id = goalLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upvote(index) {
    this.quotes[index].upvote++;
  }

 
  downvote(index) {
    this.quotes[index].downvote++;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this quote. ${this.quotes[index].user}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

 constructor() { }
  ngOnInit(): void {
  }

}

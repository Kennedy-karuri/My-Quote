import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newQuote = new Quote(0, "", "", "", new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote =  new Quote(0, "", "", "", new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}

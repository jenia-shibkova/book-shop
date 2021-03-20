import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../../models/book.models';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input()
  book: IBook;

  @Output()
  addToCart = new EventEmitter<IBook>();

  onBuy() {
    this.addToCart.emit(this.book);
  }

  getAvailabilityTitle(): string {
    return this.book.isAvailable ? '' : 'Not Available';
  }
}

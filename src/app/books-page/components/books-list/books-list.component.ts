import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { IBook } from '../../models/book.models';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BookListComponent {
  @Input()
  books: IBook[] = [];

  constructor(private cartService: CartService) {}

  addToCart(book: IBook) {
    if (book.isAvailable) {
      this.cartService.addProduct(book);
    }
  }
}

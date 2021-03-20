import { Component } from '@angular/core';
import { DATA } from '../data/data';
import { IBook } from './models/book.models';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BookPageComponent {
  books: IBook[] = DATA.slice(0, 3);
}

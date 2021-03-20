import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IBook } from './books-page/models/book.models';
import { DATA } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false }) title: ElementRef;

  books: IBook[] = DATA.slice(0, 3);

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Book Shop';
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { BookListComponent } from './components/books-list/books-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookPageComponent } from './books-page.component';

@NgModule({
  declarations: [BookPageComponent, BookListComponent, BookItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [BookPageComponent, BookListComponent],
})
export class BooksPageModule {}

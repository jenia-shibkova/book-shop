import { IBook } from 'src/app/books-page/models/book.models';

export interface ICartItem extends Pick<IBook, 'id' | 'name'> {
  price: number;
  quantity: number;
  subTotal: number;
  isSelected: boolean;
}

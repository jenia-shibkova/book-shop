import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBook } from 'src/app/books-page/models/book.models';
import { ICartItem } from 'src/app/cart/models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  goods: ICartItem[] = [];

  public goodsSubject$ = new Subject<ICartItem[]>();

  constructor() {
    this.goodsSubject$.next(this.goods);
  }

  public updateProducts() {
    this.goodsSubject$.next(this.goods);
  }

  addProduct(book: IBook) {
    const currentGood = this.goods.find((productInCart) => productInCart.id === book.id);

    if (currentGood) {
      const index = this.goods.indexOf(currentGood);
      this.goods[index] = this.increaseQuantity(currentGood);
    } else {
      this.goods.push({
        id: book.id,
        name: book.name,
        price: book.price,
        subTotal: book.price,
        quantity: 1,
        isSelected: false,
      });
    }

    this.updateProducts();
  }

  increaseQuantity(product: ICartItem) {
    const quantity = product.quantity + 1;
    const subTotal = product.price * quantity;

    return { ...product, subTotal, quantity };
  }

  decreaseQuantity(product: ICartItem) {
    if (product.quantity === 1) {
      this.removeProduct(product);
    }

    const quantity = product.quantity - 1;
    const subTotal = product.price * quantity;

    return { ...product, subTotal, quantity };
  }

  switchSelection(param: boolean) {
    if (param) {
      this.goods = this.goods.map((productInCart) => this.selectItem(productInCart));
    } else {
      this.goods = this.goods.map((productInCart) => this.deselectItem(productInCart));
    }

    this.updateProducts();
  }

  selectItem(product: ICartItem) {
    const isSelected = true;
    return { ...product, isSelected };
  }

  deselectItem(product: ICartItem) {
    const isSelected = false;
    return { ...product, isSelected };
  }

  increaseItem(product: ICartItem) {
    const index = this.goods.indexOf(product);
    this.goods[index] = this.increaseQuantity(product);
  }

  decreaseItem(product: ICartItem) {
    const index = this.goods.indexOf(product);
    this.goods[index] = this.decreaseQuantity(product);
  }

  removeProduct(product: ICartItem) {
    this.goods = this.goods.filter((productInCart) => productInCart.id !== product.id);
    this.updateProducts();
  }

  removeAllProducts() {
    this.goods = [];
    this.updateProducts();
  }

  isAllSelected(): boolean {
    const selected = this.goods.filter((productInCart) => productInCart.isSelected === true);
    if (selected.length === this.goods.length) {
      return true;
    }
    return false;
  }

  getTotal() {}
}

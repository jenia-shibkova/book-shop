import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/shared/services/cart.service';
import { ICartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  goods: ICartItem[] = [];

  selectedAll = false;

  private goods$: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.goods$ = this.cartService.goodsSubject$.subscribe((goods) => {
      this.goods = goods;
    });
  }

  ngOnDestroy(): void {
    this.goods$.unsubscribe();
  }

  onIncrease(product: ICartItem) {
    this.cartService.increaseItem(product);
  }

  onDecrease(product: ICartItem) {
    this.cartService.decreaseItem(product);
  }

  isCartNotEmpty(): boolean {
    return !!this.goods.length;
  }

  toggleItems() {
    this.selectedAll = !this.selectedAll;
    this.cartService.switchSelection(this.selectedAll);
  }

  removeAll() {
    this.cartService.removeAllProducts();
    this.selectedAll = false;
  }

  onChecked() {
    if (this.cartService.isAllSelected()) {
      this.selectedAll = true;
      this.cartService.switchSelection(this.selectedAll);
    } else {
      this.selectedAll = false;
    }
  }
}

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ICartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input()
  product: ICartItem;

  @Output()
  decrease = new EventEmitter<ICartItem>();

  @Output()
  increase = new EventEmitter<ICartItem>();

  @Output()
  toggleItem = new EventEmitter<ICartItem>();

  @Output()
  isSelected: EventEmitter<any> = new EventEmitter<any>();

  onDecrease() {
    this.decrease.emit(this.product);
  }

  onIncrease() {
    this.increase.emit(this.product);
  }

  onChecked() {
    this.isSelected.emit(this.product.isSelected);
  }
}

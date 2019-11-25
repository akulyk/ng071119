import { Component, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { IProduct } from '../../mock/products';
import { ProductsService } from '../products.service';
import { ModalService } from '../modal/modal.service';
import { CardConfirmModalComponent } from './card-confirm-modal/card-confirm-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: IProduct;
  @Input()
  public isOdd: boolean;

  constructor(
    private modalService: ModalService
    //  @Optional() private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    // this.productsService.getProducts('ProductCardComponent');
  }

  public addToCart(): void {
    this.modalService.open({
      component: CardConfirmModalComponent,
      context: {
        product: this.product,
        save: () => {
          console.log('Add to cart');
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}

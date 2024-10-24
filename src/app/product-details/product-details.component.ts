import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;
  //Send data to child
  //@Input accepts product variable in the component usage as [product]
  //<app-product-details [product]="currentProduct"></app-product-details>

  //Send events to parent (may include data)
  @Output() buy = new EventEmitter()
  //send event with (buy)
  // <app-product-details [product]="currentProduct" (buy)="addToCart(currentProduct)"></app-product-details>


  constructor(){
    this.product;
  }

  getImageUrl(product : IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    if(product.discount > 0)
      return 'strikethrough';
    //return 'strikethrough bold';
    //return ['strikethrough'];
    else
      return '';
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}

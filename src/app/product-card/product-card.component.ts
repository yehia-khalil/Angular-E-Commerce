import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {CartService } from  '../cart.service'
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product;

  constructor(
    private cartService: CartService
  ) { }
  
  ngOnInit(): void {
    
  }
  cartIcon = faCartPlus;

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart!')
  }

  

}

import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  

  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }

  onChange(event) {
   const inputValue = event.target.value;
   console.log(inputValue);
   let totalString = document.getElementById('my-price').innerHTML;
   console.log(totalString);
   let totalNumber = parseInt(totalString); 
   console.log(totalNumber);
   
   let quantity = inputValue * totalNumber; 
   let quantityString = quantity.toString();
   document.getElementById('my-row').lastElementChild.innerHTML = quantityString + " EUR";
   
  }

  ngOnInit(): void {
  }

}

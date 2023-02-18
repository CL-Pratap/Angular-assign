import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent {


  public products = [


    { id: 1, name: 'Product 1', price: 9.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 3, name: 'Product 3', price: 29.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 4, name: 'Product 4', price: 39.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 5, name: 'Product 5', price: 49.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 6, name: 'Product 6', price: 59.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 7, name: 'Product 7', price: 69.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 8, name: 'Product 8', price: 79.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 9, name: 'Product 9', price: 89.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 10, name: 'Product 10', price: 99.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
  ];

  addToCart(id: number) {
    for (let product of this.products) {
      if (id === product.id) { product.quantity = product.quantity + 1 }
    }
  }
  removeFromCart(id: number) {
    for (let product of this.products) {
      if (id === product.id && product.quantity > 0) {
        product.quantity = product.quantity - 1
      }
    }
  }

  totalCost : number= 0;
  calculate(){
     let price=0;
     for(let product of this.products)
     {price= price + product.price*product.quantity}
     this.totalCost=price}
}

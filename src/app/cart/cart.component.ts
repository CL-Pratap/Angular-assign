import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent {


  public products = [


    { id: 1, name: 'Mobile', price: 9.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 2, name: 'Laptop', price: 19.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 3, name: 'Tab', price: 29.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 4, name: 'Book', price: 39.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 5, name: 'Monitor', price: 49.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 6, name: 'Desktop', price: 59.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 7, name: 'Pen', price: 69.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 8, name: 'Mouse', price: 79.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 9, name: 'Key board', price: 89.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
    { id: 10, name: 'Adapter', price: 99.99, image: 'https://dummyimage.com/300x200/000/fff', quantity: 1 },
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

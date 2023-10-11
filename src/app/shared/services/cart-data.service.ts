import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  // Let's have some default cart items
  // and then let's make it subscribable to Header comp

  // Step 1: default cart items
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // Step 2: Create an Observable. This should also act as Observer.
  // It's Subject. Because the Subject should have default cart items
  // we will choose BehaviourSubject
  // Let's create an object for BehaviourSubject class
  private cartItems = new BehaviorSubject(this.defaultCartItems);

  // Step 3: We will make the cartItems as Observable.
  // So, that any component can subscribe
  latestCartItems: Observable<any[]> = this.cartItems.asObservable();

  addToCart(product: any) {
    console.log(product);

    // let's work on adding this product to the exisiting cart items
    this.latestCartItems.pipe(take(1)).subscribe((existingCartItems: any[]) => {
      console.log(existingCartItems);
      const updatedCartItems = [...existingCartItems, product];
      this.cartItems.next(updatedCartItems);
    });
  }
}

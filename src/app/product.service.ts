import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsAsync(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add('ProductService: fetched products async');
    return products;
  }

  getProduct(id: number): Product{
    const product = PRODUCTS.find(p => p.id === id)!;
    this.messageService.add('ProductService: fetched products');
    return product;
  }
}

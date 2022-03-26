import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(id);
  }

  goBack(): void {
    this.location.back();
  }

}

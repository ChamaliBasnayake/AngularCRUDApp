import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:Observable<IProduct[]> = null;

  constructor(
    private router: Router,
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.products =this.productService.getAllProducts();
  }
  deleteProduct(product):void{
    this.productService.deleteProduct(product);
  }
  viewProduct(product):void{
    this.router.navigate(['products/view/'+product.id]);
  }
}

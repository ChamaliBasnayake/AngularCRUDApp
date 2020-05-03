import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product$:Observable<IProduct>;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit(){
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.productService.getProductById(Number.parseInt(params.get('id')))
      ));
      
  }
  editProduct(product$):void{
    this.product$.subscribe(product$ =>{
      console.log('edit clicked');
      this.router.navigate(['products/edit/'+product$.id]);
    });
  }

}

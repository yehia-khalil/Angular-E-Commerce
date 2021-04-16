import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { product } from '../Model/product.model';
import { ServiceService } from '../services/service.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  private _routeParamSub: Subscription;
  product: product;
  cartIcon = faCartPlus;

  constructor(
    private _productService: ServiceService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._routeParamSub = this._route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this._productService.getProductByID(params.get('id')).subscribe((res:any) => {
          this.product = res.data
          console.log(this.product);
        })
        
      }
    })
  }

  ngOnDestroy(): void {
    this._routeParamSub.unsubscribe();
  }

}

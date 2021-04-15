import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { product } from '../Model/product.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: product[];

  constructor(private http: ServiceService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe((res: any)=>{
      this.products=res.data
      console.log(res.data);
    }
    );
    
  }

}

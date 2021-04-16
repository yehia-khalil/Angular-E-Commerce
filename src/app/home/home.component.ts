import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { product } from '../Model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: product[];
  pages;
  p:number;
  fakeArray;
  constructor(private http: ServiceService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe((res: any)=>{
      this.products=res.data
      this.pages=res.total_items
      this.fakeArray= new Array(this.pages)
      console.log(res.data);
    }
    );
    
  }

  getPage(page){
    this.http.getPage(page).subscribe((data: any) => {
      this.products=data.data
    })
  }

}

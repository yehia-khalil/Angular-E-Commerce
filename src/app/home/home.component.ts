import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: ServiceService) { }

  ngOnInit(): void {
    this.http.getProducts().subscribe((res: any)=>console.log(res)
    );
    
  }

}

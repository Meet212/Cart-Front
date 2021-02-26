import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

//TODO :populate product from api
  products:Product[]=[
     new Product(1,'product 1','this is good',100,),
     new Product(2,'product 1','this is good',150, ),
     new Product(3,'product 1','this is good',200, ),
     new Product(4,'product 1','this is good',300, ),
     new Product(5,'product 1','this is good',400, ),
     new Product(6,'product 1','this is good',500, ),
     new Product(7,'product 1','this is good',500,),
  
    ]
  constructor() { }

  getProduct():Product[]{

    return this.products;
  }

}

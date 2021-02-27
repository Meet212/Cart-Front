import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ProductService } from  'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[];

  wishlist:number[]=[];

  constructor(private productService:ProductService,private WishlistService:WishlistService) { }

  ngOnInit(): void {
 this.loadproducts();
  }

  loadproducts(){
    this.productService.getProduct().subscribe((products)=>{
      this.productList=products;
      this.loadWishlist();
    });
  }
  
loadWishlist(){
  this.WishlistService.getWishlist().subscribe(productId=>{
    console.log(productId)
    this.wishlist=productId
  })
}

}

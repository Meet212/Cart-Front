import { Injectable } from '@angular/core';
import { wishlistUrl } from "src/app/config/api"
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(){
    return this.http.get(wishlistUrl).pipe(
      map((result:any[])=>{
        let productId=[]

        result.forEach(item=>productId.push(item.id))

        return productId;
      })
    )
  }

  addToWhishlist(productId){
    return this.http.post(wishlistUrl,{id:productId})
  }

  removeFromWishlist(productId){
return this.http.delete(wishlistUrl + '/' +productId);
  }





}

import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Product } from '../product';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products:Product[]=[]

  constructor(private _WishlistService:WishlistService,private toastEvokeService:ToastEvokeService , private _CartService: CartService) { }

  ngOnInit(): void {
    this._WishlistService.getWishListApi().subscribe({
      next: (res) => 
      {
        this.products = res.data
       },
      error: (err) => {console.log(err) }
    })

  }

  addFav(pId:string):void{
    this._WishlistService.addToWhishListApi(pId).subscribe({
     next: (res) => {
       this.toastEvokeService.success('Success', res.message).subscribe();
   
        },
     error: (err) => {console.log(err) }
    })
   }

   addCartBtn(pId:string)
   {
    this._WishlistService.addToWhishListApi(pId).subscribe({
     next: (res) =>{
       this.toastEvokeService.success('Success', res.message).subscribe();
       this._CartService.cartItemsNum.next(res.numOfCartItems) 
       
     }
    })
   
 
   }
}

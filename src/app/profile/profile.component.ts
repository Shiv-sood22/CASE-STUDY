import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products';
import { CartModel } from '../model/products';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }



  productStock: Products[] = [{id: 1, name: "Amoxicillin", description: "500 mg.", price:220},
  {id: 2, name: "Vitamin D", description: "50000 IU", price: 180},
  {id: 3, name: "Ibuprofen", description: "800 mg.", price: 320},
  {id: 4, name: "Cetirizine hydrochloride", description: "10 mg.", price: 450},
  {id: 5, name: "Azithromycin", description: " 250 mg.", price: 250},
  {id: 6, name: "Amlodipine besylate", description: "10 mg .", price: 250},
  {id: 7, name: "Albuterol sulfate ", description: "108 mcg/act.", price: 250}]

  cartArr: CartModel[] = []
  cartNotVisible = true

  total = 0
  tax = 0
  grandTotal = 0

  addTOCart(btn: HTMLButtonElement){
    var id = btn.id
    var idNo = +id
    if(this.cartArr.some(el => el.id === idNo)){
      var index = this.cartArr.findIndex(e => e.id === idNo)
      this.cartArr[index].quantity = this.cartArr[index].quantity + 1
    }else{
      var newCartProduct: CartModel = {id: idNo, name: this.productStock[idNo - 1].name, price: this.productStock[idNo - 1].price, quantity: 1}
      this.cartArr.push(newCartProduct)
    }

    this.totalPrice()
    this.cartNotVisible = false
  }

  totalPrice(){
    this.total = 0
    this.tax = 0
    this.grandTotal = 0
    for(let prod of this.cartArr){
      var price = prod.quantity * prod.price
      this.total = this.total + price
      this.tax = (this.total * 18) / 100
      this.grandTotal = this.total + this.tax
    }
  }

  deleteFormCart(btn: HTMLButtonElement){
    var idP = +btn.id
    var index = this.cartArr.findIndex(e => e.id === idP)
    if(index !== -1){
        this.cartArr.splice(index,1)
    }

    this.totalPrice()
    if(this.cartArr.length === 0){
      this.cartNotVisible = true
    }
  }

  increaseProd(btn: HTMLButtonElement){
    var idP = +btn.id
    var index = this.cartArr.findIndex(e => e.id === idP)
    this.cartArr[index].quantity = this.cartArr[index].quantity + 1

    this.totalPrice()
  }

  decreaseProd(btn: HTMLButtonElement){
    var idP = +btn.id
    var index = this.cartArr.findIndex(e => e.id === idP)
    var chk = this.cartArr[index].quantity - 1
    if(chk === 0){
      this.deleteFormCart(btn)
    }else{
      this.cartArr[index].quantity = this.cartArr[index].quantity - 1
    }

    this.totalPrice()
    if(this.cartArr.length === 0){
      this.cartNotVisible = true
    }
  }

}  



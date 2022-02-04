export class Products {
   
        id: number
        name: string
        description: string
        price: number
    
        constructor(){
            this.id = 0
            this.name = ""
            this.description = ""
            this.price = 0
        }
    }
    
    export class CartModel{
        id: number
        name: string
        price: number
        quantity: number
    
        constructor(){
            this.id = 0
            this.name = ""
            this.price = 0
            this.quantity = 0
        }
    }
    


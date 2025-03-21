function product(name,price,totalprice){
    this.name = name;
    this.price = price;
    this.totalprice = totalprice;
}
product.prototype.discount = function(discount){
   const a = (this.price * 2)/100;
   return `${this.name} your total price is ${this.price - a}`;
}
product.prototype.cartbuy = function(dis){
    console.log(this.totalprice)
  if(this.totalprice > 200000){
let c = this.totalprice - ((this.totalprice*dis)/100);
    return `${this.name} you have got special discount ${c} of ${dis} %`
  }else{
    return this.totalprice;
  }
}





module.exports = product;

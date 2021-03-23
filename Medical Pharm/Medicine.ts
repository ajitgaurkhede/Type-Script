export class Medicine {
  brandName: string;
  price: number;
  quantity: number;
  status: string;

  constructor(){
      this.brandName = "";
      this.price = 0;
      this.quantity = 0;
      this.status = '';
  }

  public getStatus(): string {
    return status;
  }

  public setStatus(status: string) {
    this.status = status;
  }

  public getBrandName(): string {
    return this.brandName;
  }

  public setBrandName(brandName: string) {
    this.brandName = brandName;
  }

  public getPrice() {
    return this.price;
  }

  public setPrice(price:number) {
    this.price = price;
  }

  public getQuantity() {
    return this.quantity;
  }

  public setQuantity(quantity:number) {
    this.quantity = quantity;
  }

  public toString() {
    return (
      "Brand Name : " +
      this.brandName +
      "\tPrice : " +
      this.price +
      "\tQuantity : " +
      this.quantity +
      "\n"
    );
  }
}

export class CartProduct {
  title:string;
  id:number;
  image:string;
  category:string;
  description:string;
  rating:{
    count:number,
    rate:number
  };
  price:number;
  selectedQuantinty:string
  constructor(){
    this.title="",
    this.id=0,
    this.image="",
    this.category="",
    this.description="",
    this.rating={
      count:0,
      rate:0
    },
    this.price=0,
    this.selectedQuantinty=""
  }
}

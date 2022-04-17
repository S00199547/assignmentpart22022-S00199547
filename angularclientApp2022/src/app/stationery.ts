import { number, string } from "joi"

export interface Stationery {

    _id,
    name:string,
    price:number,
   quantity:number,
   //brandname:string,
    tags:string[];

}

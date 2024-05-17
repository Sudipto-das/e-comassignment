import { atom } from "recoil"

interface Product {
    id: string,
    title: string,
    description: string,
    price: number,
    category:string,
    image:string,
    rating: {
        count: number,
        rate: number
    }
}

export const productState = atom <Product[]>({
    key:'productState',
    default:[]
})
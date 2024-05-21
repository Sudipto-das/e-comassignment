import { atom } from "recoil"

 export interface cartItem {
    id: string,
    title: string,
    description: string,
    price: number,
    category:string,
    image:string,
    rating?: {
        count: number,
        rate: number
    }
    item_count:number
}

export const cartItemState = atom <cartItem[]>({
    key:'cartItemState',
    default: JSON.parse(localStorage.getItem('cartItem') || '[]'),
})
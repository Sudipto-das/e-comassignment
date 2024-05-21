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

const getCartItems = (): cartItem[] => {
    if (typeof window !== "undefined") { // Check if window is defined (i.e., running in the browser)
        const storedCart = localStorage.getItem('cartItem');
        return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
}

export const cartItemState = atom <cartItem[]>({
    key:'cartItemState',
    default: getCartItems()
})
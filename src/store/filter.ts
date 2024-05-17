import { atom } from "recoil";

export const selectedPriceState = atom<string[]>({
    key:'selectedPriceState',
    default:[]
})
export const selectedCategoryState = atom<string[]>({
    key:'selectedCategoryState',
    default:[]
})
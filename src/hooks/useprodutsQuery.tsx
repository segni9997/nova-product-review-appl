import { useQuery } from "react-query";
import { api } from "../api/Api";
import { Product, Productlist } from "../api/types/type";


export const useProductslistQuery = () => useQuery<Productlist,Error>({
    queryKey: ['products'],
    queryFn:api.ProductLists,
})

export const useProductQuery = (productId:string) => useQuery<Product,Error>({
    queryKey: ['products', productId],
    queryFn:()=>api.product(productId),
})


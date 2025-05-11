import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../services/product.service.js";

export const useGetProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => ProductService.getAllProducts(),
        select: ({data}) => data,
        enabled: true,
        retry: 0
    })
}
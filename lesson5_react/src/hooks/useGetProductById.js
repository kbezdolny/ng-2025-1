import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../services/product.service.js";

export const useGetProductById = (id) => {
    return useQuery({
        queryKey: ['product'],
        queryFn: () => ProductService.getProduct(id),
        select: ({data}) => data,
        enabled: true,
        retry: 0
    })
}
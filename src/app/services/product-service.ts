import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ProductInterface } from "../interface/product-interface";

export function useGetProducts() {
    return useInfiniteQuery({
        queryKey: ['products'],
        staleTime: 60 * 5,
        queryFn: async ({ pageParam = 0 }) => {
            const res = await fetch(`https://dummyjson.com/products?limit=${20}&skip=${pageParam}`)
            const data = res.json()
            return data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.skip + 20,
    })
}

export function useGetProductById(id: number) {
    return useQuery({
        queryKey: [`product/${id}`],
        staleTime: 60 * 5,
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json() as ProductInterface
            return data
        },
    })
}

export function useSearchProducts(query: string) {
    return useQuery({
        queryKey: [`products-${query}`],
        staleTime: 60 * 5,
        enabled: !!query,
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
            const data = await res.json()
            return data
        },
    })
}
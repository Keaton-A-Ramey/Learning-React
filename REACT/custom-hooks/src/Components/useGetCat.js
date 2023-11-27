import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
    const { 
        data, 
        refetch, 
        isLoading: isCatLoading,
        error, } = useQuery({queryKey:  ["cat"], queryFn: () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)}
    });

    const refetchData = () => {
        refetch();
        console.log("Data refetched!");
    };

    return { data, refetchData, isCatLoading };
}
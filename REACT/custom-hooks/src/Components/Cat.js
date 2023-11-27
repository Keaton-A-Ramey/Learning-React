import { useGetCat } from "./useGetCat";

export const Cat = () => {
    const {data, isCatLoading, refetchData}  = useGetCat();
    if (isCatLoading) return <h1>LOADING</h1>
    // Remember not to do onClick={refetchData()}. The parentheses make it refetch on mounting.
    // If you have arguments, do onClick={() => refetechData(arg, arg2)}
    return (
        <div>
            <button onClick={refetchData}>ANOTHER FACT!</button>
            <h1>{data?.fact}</h1>
        </div>
    );
};
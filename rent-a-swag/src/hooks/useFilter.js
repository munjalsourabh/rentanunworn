import { useSelector } from "react-redux"
import { useGetProductsMutation } from "../features/apiSlice"
import { useEffect, useState } from "react";

export default function useFilter() {
    const filters = useSelector((state) => state.filters)

    const [getProducts, {data, isSuccess}] = useGetProductsMutation();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((response) => {
            console.log(' response ', response );
            setProducts([...response.data]);
        });
        console.log('inside custom hook');
    }, [filters])

    return products;
}
import { useSelector } from "react-redux"
import { useGetProductsMutation } from "../features/apiSlice"
import { useEffect, useState } from "react";

export default function useFilter() {
    const filters = useSelector((state) => state.filters)

    const [getProducts, {data, isSuccess, isLoading, isError}] = useGetProductsMutation();

    const isLoggedIn = useSelector(state => state.authentication.isLoggedIn)

    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (isLoggedIn) {
            console.log(' filters ', filters);
            getProducts(filters).then((response) => {
                console.log(' response ', response );
                setProducts([...response.data]);
            });
            console.log('inside custom hook');
        }
    }, [filters, isLoggedIn])

    return [products, isLoading];
}
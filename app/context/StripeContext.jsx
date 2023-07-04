'use client'

import { useState, useEffect, createContext } from "react";
import axios from "axios";

const StripeContext = createContext();

const StripeProvider = ({children}) => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetchPrices()
    }, [])
 
    const fetchPrices = async () => {
     const {data} = await axios.get('/api/getproducts')
     console.log(data)
     setPrices(data)
    }
 
    return (
        <StripeContext.Provider value={[prices, setPrices]}>
             {children}
        </StripeContext.Provider>
    )
}

export { StripeContext, StripeProvider};
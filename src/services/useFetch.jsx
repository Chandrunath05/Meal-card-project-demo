import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url);
            setData(result.data);
        }
        fetchData();
    }, [])
    return {data};
}
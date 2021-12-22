import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://pacific-caverns-05949.herokuapp.com/AllOrder')
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return [orders, setOrders];
};

export default useOrders;
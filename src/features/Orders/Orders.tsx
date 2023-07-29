import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectOrdersList} from "./OrdersSlice";
import {fetchOrders} from "./OrdersThunk";
import OneOrder from "../../components/Order/OneOrder";

const Orders = () => {
    const {id, dishes} = useAppSelector(selectOrdersList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch])

    return (
        <>
            <h4>Orders</h4>
            <OneOrder key={id}
                      dishes={dishes}
                      id={id}
            />
        </>
    );
};

export default Orders;
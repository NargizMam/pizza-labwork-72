import {createAsyncThunk} from "@reduxjs/toolkit";
import {AllOrders, ApiOrdersList} from "../../types";
import {AppDispatch} from "../../app/store";
import axiosApi from "../../axiosApi";
import {fetchOneDish} from "../Dishes/DishesThunk";

export const fetchOrders= createAsyncThunk<AllOrders, undefined, {dispatch: AppDispatch}>(
    'orders/fetchAll',
    async (_, thunkAPI) => {
        const ordersResponse = await axiosApi.get<ApiOrdersList | null>('/orders.json');
        const orders = ordersResponse.data;
        let allOrders: AllOrders = {
            id: '',
            dishes: [
                {dishId: '',
                    amount: 0}
            ]
        };
        if (orders) {
            Object.keys(orders).forEach(orderId => {
                allOrders.id = orderId;
                allOrders.dishes = orders[orderId].dishes;
                orders[orderId].dishes.forEach(dishOrder => {
                    thunkAPI.dispatch(fetchOneDish(dishOrder.dishId));
                })
            });

        }
        return allOrders;
    }
);
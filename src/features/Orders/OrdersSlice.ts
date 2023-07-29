import {AllOrders, OrdersDish} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchOrders} from "./OrdersThunk";
import {RootState} from "../../app/store";

interface OrderState {
    orderList: AllOrders;
    totalPrice: number;
    orderDish: OrdersDish[],
    fetchOrderLoading: boolean;
}
const initialState: OrderState = {
    orderList: {
        id: '',
        dishes: [],
    },
    orderDish: [],
    totalPrice: 0,
    fetchOrderLoading: false,
}
const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getTotalPrice: (state,{payload} ) => {
            state.totalPrice += parseInt(payload);
        },
        addDish: (state, {payload: id}: PayloadAction<string>) => {
            const existingIndex = state.orderDish.findIndex(cartDish => cartDish.dishId === id);
            if(existingIndex !== -1){
                state.orderDish[existingIndex].amount++;
            }else{
                state.orderDish.push({dishId: id, amount: 1});
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.fetchOrderLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, {payload:orders}) => {
            state.fetchOrderLoading = false;
            state.orderList = orders;
        });
        builder.addCase(fetchOrders.rejected, (state) => {
            state.fetchOrderLoading = false;
        });
    }
});
export const ordersReducer = orderSlice.reducer;
export const selectOrdersList = (state: RootState) => state.orders.orderList;
export const selectTotalPrice = (state: RootState) =>state.orders.totalPrice;
export const selectFetchOrderLoading = (state: RootState) => state.orders.fetchOrderLoading;
export const {getTotalPrice, addDish} = orderSlice.actions;
import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {IDish, IDishesList, TApiDish} from "../../types";
import {AppDispatch} from "../../app/store";

export const createDish = createAsyncThunk<void, TApiDish>(
    'dishes/create',
    async (dish) => {
        await axiosApi.post('/dishes.json', dish)
    }
);
export const fetchDishes = createAsyncThunk<IDish[], undefined, {dispatch: AppDispatch}>(
    'dishes/fetchAll',
    async (_) => {
        const dishesResponse = await axiosApi.get<IDishesList | null>('/dishes.json');
        const dishes = dishesResponse.data;
        let newDishes: IDish[] = [];
        if(dishes){
            newDishes = Object.keys(dishes).map((key) => {
                return { ...dishes[key], id: key};
            });
        }
        return newDishes;
    }
);
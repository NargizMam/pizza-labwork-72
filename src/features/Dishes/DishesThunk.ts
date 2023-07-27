import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {TApiDish} from "../../types";

export const createDish = createAsyncThunk<void, TApiDish>(
    'dishes/create',
    async (dish) => {
        await axiosApi.post('/dishes.json', dish)
    }
);
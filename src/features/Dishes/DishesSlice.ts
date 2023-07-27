import {createSlice} from "@reduxjs/toolkit";
import {createDish, deleteDish, fetchDishes, updateDish} from "./DishesThunk";
import {RootState} from "../../app/store";
import {IDish} from "../../types";

interface DishesState {
    createLoading: boolean;
    fetchLoading: boolean;
    allDishes: IDish[];
    updating: boolean;
    deleteLoading: boolean | string;
}
const initialState: DishesState = {
    createLoading: false,
    fetchLoading: false,
    allDishes: [],
    updating: false,
    deleteLoading: false,

}
const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createDish.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(createDish.fulfilled, (state) => {
            state.createLoading = false;
        });
        builder.addCase(createDish.rejected, (state) => {
            state.createLoading = false;
        });
        builder.addCase(fetchDishes.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchDishes.fulfilled, (state, {payload: dishesList}) => {
            state.fetchLoading = false;
            state.allDishes = dishesList;
        });
        builder.addCase(fetchDishes.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(updateDish.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(updateDish.fulfilled, (state) => {
            state.createLoading = false;
        });
        builder.addCase(updateDish.rejected, (state) => {
            state.createLoading = false;
        });
        builder.addCase(deleteDish.pending, (state, action) => {
            state.deleteLoading = action.meta.arg;
        });
        builder.addCase(deleteDish.fulfilled, (state) => {
            state.deleteLoading = false;
        });
        builder.addCase(deleteDish.rejected, (state) => {
            state.deleteLoading = false;
        });
    }
});
export const dishesReducer = dishesSlice.reducer;
export const selectCreateDishLoading = (state: RootState) => state.dishes.createLoading;
export const selectAllDishes = (state: RootState) => state.dishes.allDishes;
export const selectDishesFetchLoading = (state: RootState) => state.dishes.fetchLoading;
export const selectUpdateLoading = (state: RootState) => state.dishes.updating;
export const selectDeleteDishLoading = (state: RootState) => state.dishes.deleteLoading;




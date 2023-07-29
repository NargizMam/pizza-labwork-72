import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectCreateDishLoading} from "../../features/Dishes/DishesSlice";
import DishForm from "../../components/DishForm/DishForm";
import {TApiDish} from "../../types";
import {createDish} from "../../features/Dishes/DishesThunk";
import {Grid} from "@mui/material";


const NewDish = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const creating = useAppSelector(selectCreateDishLoading);

    const onCreate = async (dish: TApiDish) => {
        await dispatch(createDish(dish));
        await navigate('/');
    };

    return (
        <Grid container spacing={3} >
            <Grid item xs={6}>
                <DishForm onSubmit={onCreate} isLoading={creating}/>
            </Grid>
        </Grid>
    );
};

export default NewDish;
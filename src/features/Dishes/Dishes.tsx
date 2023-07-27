import React, {useEffect} from 'react';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Container} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectAllDishes, selectDishesFetchLoading} from "./DishesSlice";
import {fetchDishes} from "./DishesThunk";
import Spinners from "../../UI/Spinner/Spinners";
import DishItem from "../../components/DishItem/DishItem";


const Dishes = () => {
    const dispatch = useAppDispatch();
    const allDishes = useAppSelector(selectAllDishes);
    const fetching = useAppSelector(selectDishesFetchLoading);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    let dishes: React.ReactNode = <Spinners/>;

    if(!fetching){
        dishes = allDishes.map((item) => (
            <DishItem
                key={item.id}
                dish={item}
            />
        ))
    }
    return (
        <>
            <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline' } }}
                >
                    Dishes
                </Typography>
                <Button variant='contained' component={NavLink} to='/new-dish'>Add new dish</Button>
            </Container>
            <Container style={{textAlign: 'center'}}>
                {dishes}
            </Container>
        </>

    );
};

export default Dishes;
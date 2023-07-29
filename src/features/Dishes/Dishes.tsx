import React, {useEffect} from 'react';
import Typography from "@mui/material/Typography";
import {Button, Container} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectAllDishes, selectDishesFetchLoading} from "./DishesSlice";
import {fetchDishes} from "./DishesThunk";
import Spinners from "../../UI/Spinner/Spinners";
import DishItem from "../../components/DishItem/DishItem";
import Box from "@mui/material/Box";
import {selectTotalPrice} from "../Orders/OrdersSlice";


interface Props{
    isAdmin: boolean;
}
const Dishes: React.FC<Props> = ({isAdmin}) => {
    const dispatch = useAppDispatch();
    const allDishes = useAppSelector(selectAllDishes);
    const fetching = useAppSelector(selectDishesFetchLoading);
    const totalPrice = useAppSelector(selectTotalPrice);


    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);


    return (
        <>
            {fetching ? <Spinners/> : null}
            <Container maxWidth="xl">
                <Box>
                    {isAdmin &&
                        <Box style={{display: 'flex',justifyContent: 'space-between'}}>
                            <Typography title="Dishes"
                                        className="dishes-page__content"
                                        variant="h4"
                            >All types of pizza</Typography>
                            <Button color='success'
                                    variant='contained'
                                    component={NavLink} to="/admin/new-dish"
                            >Add new Dish</Button>
                        </Box> }
                </Box>
                <Box className="dishes-page__content">
                    {allDishes.length > 0 ?
                        allDishes.map(dish => (
                            <DishItem key={dish.id}
                                      dish={dish}
                                      isAdmin={isAdmin}
                            /> )) : <h4>Список блюд пуст!</h4>
                    }
                    {totalPrice > 0 && !isAdmin &&
                        <div className="container">
                            <hr/>
                            <div className="col border-0 p-2 text-center">
                                <div className="row">
                                    <div className="col text-right">
                                        Total:
                                    </div>
                                    <div className="col-3 text-right">
                                        <strong>{totalPrice}</strong> KGS
                                    </div>
                                    <Button color='success' component={NavLink} to='/orders'
                                            variant="contained"
                                            style={{width: '100%'}}>Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    }
                </Box>
            </Container>
        </>
    );
};

export default Dishes;
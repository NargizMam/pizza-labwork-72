import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {IDish} from "../../types";
import {Button, CardActions, Container} from "@mui/material";
import {Delete, Edit} from '@mui/icons-material';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {deleteDish, fetchDishes} from "../../features/Dishes/DishesThunk";
import {selectDeleteDishLoading} from "../../features/Dishes/DishesSlice";
import {addDish, getTotalPrice} from "../../features/Orders/OrdersSlice";

interface Props {
    dish: IDish;
    isAdmin: boolean,
}
const DishItem: React.FC<Props> = ({dish, isAdmin}) => {
    const dispatch = useAppDispatch();
    const deleteLoading = useAppSelector(selectDeleteDishLoading);

    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
    const image = dish.image || imageUrl;

    const onDelete = async () => {
      await  dispatch(deleteDish(dish.id));
      await dispatch(fetchDishes());

    }
    const getOrder = async () => {
        await dispatch(addDish(dish.id));
        await dispatch(getTotalPrice(dish.price));
    }
    return (
        <Card
            sx={{ display: 'flex' , m: 2, width: 700 ,height: 100, justifyContent: 'space-between'}}
            onClick={getOrder}
        >
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={image}
                alt={dish.name}
            />
            <Container sx={{ display: 'flex', mt: 5, justifyContent: 'space-between' }}>
                <Typography component="div" variant="h5">
                    {dish.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {dish.price} KGS
                </Typography>
            </Container>
            {isAdmin &&
                <CardActions>
                    <Button color="info" variant="outlined" component={NavLink}
                            to={'/edit-dish/' + dish.id}
                    >
                        <Edit/>
                        Edit</Button>
                    <Button color="warning" variant="outlined"
                            onClick={onDelete}
                            disabled={deleteLoading ? deleteLoading === dish.id : false}
                    >
                        <Delete/>
                        Delete</Button>
                </CardActions>
            }
        </Card>
    );
}
export default DishItem;
import React from 'react';
import {useAppSelector} from "../../app/hook";
import {selectTotalPrice} from "../../features/Orders/OrdersSlice";
import OrderDish from './OrderDish';
import {Button} from "@mui/material";
import {OrdersDish} from "../../types";


interface Props {
   id: string,
   dishes: OrdersDish[]
}

const OneOrder: React.FC<Props> = ({id, dishes}) => {
    const totalPrice = useAppSelector(selectTotalPrice);
    const delivery = 150;
    const onDelete = () => {
        console.log(id)
    }
    const orderDishes = (
        dishes.map(orderDish => (
            <OrderDish key={orderDish.dishId}
                        dishId={orderDish.dishId}
                       amount={orderDish.amount}
            />
        ))
    )
    return (
        <div className="dish-for-client">
            {orderDishes}
            <p>KGS <strong>{totalPrice}</strong></p>
            <p>Delivery <strong>{delivery}</strong> KGS</p>
            <Button onClick={onDelete} color='warning'>Complete order</Button>
        </div>
    );
};

export default OneOrder;

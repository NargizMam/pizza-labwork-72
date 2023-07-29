import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectOneDish} from "../../features/Dishes/DishesSlice";
import {fetchOneDish} from "../../features/Dishes/DishesThunk";

interface Props {
    dishId: string,
    amount: number
}

const OrderDish: React.FC<Props> = ({dishId,amount}) => {
    const dispatch = useAppDispatch();
    const oneOrderDish = useAppSelector(selectOneDish);
    let totalPrice;

    useEffect(() => {
        dispatch(fetchOneDish(dishId));
    },[dispatch, dishId]);

    if(oneOrderDish){
        totalPrice = parseInt(oneOrderDish.price) * amount
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col">{oneOrderDish?.name}</div>
                <div className="col-2">x{amount}</div>
                <div className="col-3 text-right">{totalPrice} KGS</div>
            </div>
        </>
    );
};

export default OrderDish;
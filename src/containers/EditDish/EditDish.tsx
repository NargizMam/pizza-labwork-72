import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectFetchOneDishLoading, selectOneDish, selectUpdateLoading} from "../../features/Dishes/DishesSlice";
import {useEffect} from "react";
import {fetchOneDish, updateDish} from "../../features/Dishes/DishesThunk";
import {TApiDish} from "../../types";
import DishForm from "../../components/DishForm/DishForm";
import Spinners from "../../UI/Spinner/Spinners";

const EditDish = () => {
    const {id} = useParams() as {id: string};
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const dish = useAppSelector(selectOneDish);
    const fetchDishLoading = useAppSelector(selectFetchOneDishLoading);
    const updateDishLoading = useAppSelector(selectUpdateLoading);

    useEffect(() => {
        dispatch(fetchOneDish(id));
    }, [dispatch, id]);
    const onSubmit = async (dish: TApiDish) => {
        await dispatch(updateDish({id, dish}));
        await navigate('/');
    };

    return (
        <div>
            {fetchDishLoading && <Spinners/>}
            {dish &&
                <DishForm
                    onSubmit={onSubmit}
                    existingDish={dish}
                    isEdit
                    isLoading={updateDishLoading}
                />}
        </div>
    );
};

export default EditDish;
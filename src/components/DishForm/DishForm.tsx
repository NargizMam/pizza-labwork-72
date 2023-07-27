import React, {useState} from 'react';
import {IDishMutation, TApiDish} from "../../types";
import {Button} from "react-bootstrap";
import ButtonSpinner from "../../UI/ButtonSpinner/ButtonSpinner";


interface Props {
    onSubmit: (newDish: TApiDish) => void;
    existingDish?: IDishMutation;
    isEdit?: boolean;
    isLoading?: boolean;
}

const initialState = {
    name: '',
    image: '',
    price: ''
};

const DishForm: React.FC<Props> = ({onSubmit, existingDish= initialState, isEdit, isLoading}) => {
    const [newDish, setDish] = useState<IDishMutation>(existingDish);
    const dishChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setDish(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...newDish,
            price: parseFloat(newDish.price),
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>{isEdit ? 'Edit dish' : 'Add new dish'}</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={newDish.name}
                    onChange={dishChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    className="form-control"
                    value={newDish.image}
                    onChange={dishChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    value={newDish.price}
                    onChange={dishChange}
                />
            </div>
            <Button type='submit' variant='success'
                    disabled={newDish.price === '' || newDish.name === '' } >
                {isLoading && <ButtonSpinner/>}
                {isEdit ? 'Save' : 'Create'}
            </Button>
        </form>
    );
};

export default DishForm;
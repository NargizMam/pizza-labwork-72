import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {IDish} from "../../types";
import {Button, CardActions} from "@mui/material";
import {Delete, Edit} from '@mui/icons-material';

interface Props {
    dish: IDish;
}
const DishItem: React.FC<Props> = ({dish}) => {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
    const image = dish.image || imageUrl;

    return (
        <Card sx={{ display: 'flex' , m: 2, width: 700 , justifyContent: 'space-between'}}>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={image}
                alt={dish.name}
            />
            <CardContent sx={{ display: 'flex' }}>
                <Typography component="div" variant="h5" mr={5}>
                    {dish.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {dish.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="info" variant="outlined">
                    <Edit/>
                    Edit</Button>
                <Button color="warning" variant="outlined">
                    <Delete/>
                    Delete</Button>
            </CardActions>
        </Card>
    );
}
export default DishItem;
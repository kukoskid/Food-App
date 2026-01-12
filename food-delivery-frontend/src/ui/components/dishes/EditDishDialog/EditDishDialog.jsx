import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import useRestaurants from "../../../../hooks/useRestaurants.js";

const EditDishDialog = ({open, onClose, onEdit, dish}) => {
    const restaurants = useRestaurants();

    const [formdata, setFormData] = useState(dish)

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData({...formdata, [name]: value})
    }

    const handleSubmit = () => {
        onEdit(dish.id, formdata);
        onClose();
    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    fullWidth
                    onChange={handleChange}
                    value={formdata.name}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    fullWidth
                    multiline
                    rows={3}
                    onChange={handleChange}
                    value={formdata.description}
                />
                <TextField
                    margin="dense"
                    label="Price"
                    name="price"
                    type="number"
                    fullWidth
                    onChange={handleChange}
                    value={formdata.price}

                />
                <TextField
                    margin="dense"
                    label="Quantity"
                    name="quantity"
                    type="number"
                    fullWidth
                    onChange={handleChange}
                    value={formdata.quantity}
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Restaurant</InputLabel>
                    <Select
                        name="restaurantId"
                        label="Restaurant"
                        variant="outlined"
                        className="restaurant-select"
                        onChange={handleChange}
                        value={formdata.restaurantId}
                        MenuProps={{PaperProps: {style: {maxHeight: 100}}}}>
                        {restaurants.map((restaurant) => (
                            <MenuItem
                                key={restaurant.id}
                                value={restaurant.id}
                                className="restaurant-option"
                            >
                                {restaurant.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" color="warning" className="submit-btn" onClick={handleSubmit}>Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDishDialog;
import {useCallback, useEffect, useState} from "react";
import dishRepository from "../repository/dishRepository.js";

const initialState = {
    dishes: [],
    loading: true,
};

const useDishes = () => {
    const [state, setState] = useState(initialState);

    // TODO: Implement this.
    const fetchDishes = useCallback(() => {
        dishRepository.findAll()
            .then((response) => {
                setState({
                    dishes: response.data,
                    loading: false
                })
            })
    }, [])

    // TODO: Implement this.
    const onAdd = useCallback((payload) => {
        dishRepository.add(payload)
            .then(() => {
                fetchDishes()
            })
            .catch((err) => console.error(err))
    }, [fetchDishes])

    // TODO: Implement this.
    const onEdit = useCallback((id, payload) => {
        dishRepository.edit(id, payload)
            .then(() => {
                fetchDishes()
            })
            .catch((error) => console.error(error))
    }, [fetchDishes])

    // TODO: Implement this.
    const onDelete = useCallback((id) => {
        dishRepository.delete(id)
            .then(() => {
                fetchDishes()
            })
            .catch((error) => console.error(error))
    }, [fetchDishes])

    useEffect(() => {
        fetchDishes()
    }, [fetchDishes]);

    return {...state, onAdd, onEdit, onDelete};
};

export default useDishes;
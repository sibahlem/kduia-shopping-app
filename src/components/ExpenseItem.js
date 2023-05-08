/*In ExpenseItem you are importing dispatch from Context, which allows you to dispatch a delete action.
You are creating a function that gets called when the delete icon is clicked.*/

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDelete = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            patload: item,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{Location}{parseInt(props.unitprice)}</td>
            <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleDelete}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;

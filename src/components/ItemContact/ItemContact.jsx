import css from '../Styles.module.css';
import {  useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/opertions';

export const ItemContact = ({contact}) => {
    const dispatch = useDispatch();

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        };

    return(
        <li key={contact.id} className={css.itemContscts}>
                <p className={css.pItemContactsName}>{contact.name}:</p> 
                <p className={css.pItemContactsNumber}>{contact.phone}</p>
                <button id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                    Delete
                </button>
        </li>
    )
}
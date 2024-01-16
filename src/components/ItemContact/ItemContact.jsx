import css from '../Styles.module.css';
import {  useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ItemContact = ({contact}) => {
    const dispatch = useDispatch();

    const updateStateForDelete = (evt) => {
        const idContact = evt.currentTarget.id;

        dispatch(deleteContact(idContact));
        };

    return(
        <li key={contact.id} className={css.itemContscts}>
                <p className={css.pItemContacts}>{contact.name}: {contact.number}</p>
                <button id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                    Delete
                </button>
        </li>
    )
}
import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    let contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    if(filter.length > 0) {
                contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
            }

    return(
        <ul className={css.listContacts}>
            {contacts.length !== 0 &&
            contacts.map((contact) => (
                <ItemContact 
                key={contact.id}
                contact={contact}
                />
            ))
            }
        </ul>
    )
}
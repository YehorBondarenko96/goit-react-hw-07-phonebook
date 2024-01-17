import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from './Styles.module.css';
import { useEffect } from "react";
import { fetchContacts } from "../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../redux/selectors";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#010101',
        margin: 20
      }}
    >
      <div style={{width: '100%'}}>
  <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm />

  <h2 className={css.contacts}>Contacts</h2>
  <Filter />
  <div className={css.divForContactList}>
  {error && <h2>Oopsss...Something went wrong...</h2>}
  {isLoading && !error ? <Loader /> : <ContactList />}
  {error && <h2>Oopsss...Something went wrong...</h2>}
  </div>
</div>
    </div>
  )
};
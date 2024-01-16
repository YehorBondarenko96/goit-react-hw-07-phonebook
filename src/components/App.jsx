import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from './Styles.module.css';
import { useEffect } from "react";
import { fetchContacts } from "../redux/opertions";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

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
      <div>
  <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm />

  <h2 className={css.contacts}>Contacts</h2>
  <Filter />
  <ContactList />
</div>
    </div>
  )
};
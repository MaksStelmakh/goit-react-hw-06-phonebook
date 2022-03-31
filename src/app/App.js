import { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import Contacts from "../contacts/Contacts";
import { MainSection } from "./App.styled";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, filter, saved } from "../redux/store";

export default function App() {
  const contacts = useSelector((state) => state.myContacts);
  const filtered = useSelector((state) => state.myFilteredContacts);
  console.log(filtered);
  const dispatch = useDispatch();
  const addNewContact = (name, number) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      dispatch(add(contact));
    }
  };
  const deleteContact = (Id) => {
    dispatch(remove(Id));
  };

  const searchMethod = (evt) => {
    dispatch(filter(evt.currentTarget.value.toLowerCase()));
  };
  const getVisibleContacts = () => {
    return contacts.filter((filter) =>
      filter.name.toLowerCase().includes(filtered)
    );
  };

  useEffect(() => {
    const contact = localStorage.getItem(`contacts`);
    const parsedContact = JSON.parse(contact);
    if (parsedContact) {
      dispatch(saved(parsedContact));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <MainSection>
      <ContactForm onSubmit={addNewContact} />
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} change={searchMethod} />
        {contacts.length > 0 ? (
          <Contacts
            filteredContacts={getVisibleContacts()}
            deleteElem={deleteContact}
          />
        ) : (
          <h2>Your Phonebook is empty!</h2>
        )}
      </div>
    </MainSection>
  );
}

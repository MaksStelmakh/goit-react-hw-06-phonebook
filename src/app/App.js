import { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import Contacts from "../contacts/Contacts";
import { MainSection } from "./App.styled";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

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
      setContacts((state) => [...state, contact]);
    }
  };
  const deleteContact = (Id) => {
    setContacts((state) => state.filter((contact) => contact.id !== Id));
  };

  const searchMethod = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((filter) =>
      filter.name.toLowerCase().includes(normalizedFilter)
    );
  };
  useEffect(() => {
    const contact = localStorage.getItem(`contacts`);
    const parsedContact = JSON.parse(contact);
    if (parsedContact) {
      setContacts(parsedContact);
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

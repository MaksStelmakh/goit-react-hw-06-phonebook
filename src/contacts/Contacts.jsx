import { List } from "./Contacts.styled";
import PropTypes from "prop-types";

export default function Contacts({ filteredContacts, deleteElem }) {
  return (
    <List>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button
              type="button"
              onClick={() => deleteElem(contact.id)}
            ></button>
          </li>
        );
      })}
    </List>
  );
}

Contacts.protoTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteElem: PropTypes.func.isRequired,
};

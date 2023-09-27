import {
  StyledBtn,
  StyledLi,
  StyledList,
  StyledText,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.contactName.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterContacts();
  return (
    <StyledList>
      {filteredData.map(contact => (
        <StyledLi key={contact.id}>
          <StyledText>
            {contact.contactName}: {contact.number}
          </StyledText>
          <StyledBtn onClick={() => dispatch(removeContact(contact.id))}>
            Delete
          </StyledBtn>
        </StyledLi>
      ))}
    </StyledList>
  );
};

import { StyledInput, StyledText } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <>
      <StyledText>Find contacts by name</StyledText>
      <StyledInput
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </>
  );
};

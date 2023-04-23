import { Input } from './Filter.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
	const filter = useSelector(state => state.filter.filter);
	
	const handleFilterContact = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Input
      type="text"
      value={filter}
      onChange={handleFilterContact}
    />
  );
};

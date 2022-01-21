import propTypes from 'prop-types';
import { FormWrapper, Label, Input } from './Filter.styled';

const Filter = ({ filter, filterContacts }) => {
  return (
    <FormWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={filterContacts}
        />
      </Label>
    </FormWrapper>
  );
};
export default Filter;

Filter.propTypes = {
  filter: propTypes.string,
  filterContacts: propTypes.func,
};

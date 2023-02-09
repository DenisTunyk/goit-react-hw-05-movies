import { Form, Input, Button } from './SearchBox.styled';
import { useEffect, useState } from 'react';

export const SearchBox = ({ value, onChange }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleChange = event => {
    const { value } = event.currentTarget;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onChange(query);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
          value={query}
          onChange={handleChange}
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

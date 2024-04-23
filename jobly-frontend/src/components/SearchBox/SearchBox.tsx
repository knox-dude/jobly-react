import { useState, ChangeEvent } from 'react';
import { Input, Button } from 'reactstrap';

interface SearchBoxProps {
  handleSearch: (searchText: string) => void;
}

function SearchBox({handleSearch}: SearchBoxProps) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div style={{ display: 'inline-flex' }}>
      <Input
        type="text"
        placeholder="Enter Search Term"
        value={searchText}
        onChange={handleInputChange}
        style={{ cursor: 'pointer' }}
      />
      <Button color="primary" onClick={() => handleSearch(searchText)} style={{ cursor: 'pointer' }}>
        Search
      </Button>
    </div>
  );
}

export default SearchBox;

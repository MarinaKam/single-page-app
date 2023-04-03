import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  onChange: (val: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
  const [ value, setValue ] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value) {
      onChange(value.trim());
    }

    setValue(null);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Paper
      component="form"
      data-testid="search-bar"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        data-testid="search-input"
        placeholder="Search By Username"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleChange}
      />
      <IconButton data-testid="search-button" type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

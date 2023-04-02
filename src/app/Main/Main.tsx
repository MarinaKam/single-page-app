import { FC, useContext } from 'react';
import { Alert, Box } from '@mui/material';
import { SearchBar } from '../../components/SearchBar';
import { Loader } from '../../components/loader';
import { GlobalContext } from './GlobalProvider';
import { List } from './List';

export const Main: FC = () => {
  const { isFetched, error, fetchList } = useContext(GlobalContext);

  return (
    <>
      <SearchBar onChange={fetchList} />

      <Loader
        loading={isFetched}
        render={() => !!error ? (
          <Box width="100%" py={3}>
            <Alert severity="error">{error}</Alert>
          </Box>
        ) : <List />}
      />
    </>
  );
};

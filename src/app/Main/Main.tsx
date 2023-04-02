import { FC, useContext } from 'react';
import { Alert, Box, Container, AppBar, Toolbar } from '@mui/material';
import { SearchBar } from '../../components/SearchBar';
import { Loader } from '../../components/Loader';
import { GlobalContext } from './GlobalProvider';
import { List } from './List';

export const Main: FC = () => {
  const { isFetched, error, fetchList } = useContext(GlobalContext);

  return (
    <>
      <AppBar position="fixed" color="transparent" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ p: 1 }}>
            <SearchBar onChange={fetchList} />
          </Container>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Loader
          loading={isFetched}
          render={() => !!error ? (
            <Box width="100%" py={3}>
              <Alert severity="error">{error}</Alert>
            </Box>
          ) : <List />}
        />
      </Container>
    </>
  );
};

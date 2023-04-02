import { FC } from 'react';
import { Box, Container } from '@mui/material';
import { Main, GlobalProvider } from './Main';

const App: FC = () => {
  return (
    <GlobalProvider>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" overflow="hidden" height="100%" alignItems="center" py={3} px={1}>
          <Main />
        </Box>
      </Container>
    </GlobalProvider>
  );
};

export default App;

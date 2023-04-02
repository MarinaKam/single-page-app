import { FC, useContext } from 'react';
import { GlobalContext } from '../GlobalProvider';
import { Box } from '@mui/material';

export const List: FC = () => {
  const { list } = useContext(GlobalContext);

  console.log('list', list);
  return (
    <Box height="100%" py={3}>
      List
    </Box>
  );
};

import { FC, useContext, useState } from 'react';
import { Box } from '@mui/material';
import { GlobalContext } from '../GlobalProvider';
import { Item } from './Item';

export const List: FC = () => {
  const { list } = useContext(GlobalContext);
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <Box data-testid="list-wrapper" height="100%" width="100%" py={3} overflow="auto" px={0.25}>
      {list?.map((item) => (
        <Item
          key={item.url}
          expanded={expanded}
          item={item}
          onChange={setExpanded}
        />
      ))}
    </Box>
  );
};

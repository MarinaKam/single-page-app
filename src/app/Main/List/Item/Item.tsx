import { Dispatch, FC, SyntheticEvent, SetStateAction, useEffect, useState, useContext } from 'react';
import {
  Box,
  Link,
  Chip,
  Stack,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails, Alert,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Files, ListItemType } from '../../../../models';
import { GlobalContext } from '../../GlobalProvider';
import { Loader } from '../../../../components/Loader';
import { ItemDetail } from './ItemDetail';

type ItemProps = {
  item: ListItemType;
  expanded: boolean | string;
  onChange: Dispatch<SetStateAction<string | false>>
};

export const Item: FC<ItemProps> = ({ expanded, item, onChange }) => {
  const { isItemFetched, itemData, itemError, fetchItem } = useContext(GlobalContext);
  const numberFiles = Object.keys(item?.files || {}).length;
  const [ tags, setTags ] = useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      fetchItem(item.id);
      onChange(isExpanded ? panel : false);
    };

  useEffect(() => {
    for (let file in item?.files) {
      let language: string | null = item?.files?.[file].language;

      if (language && tags?.indexOf(language) === -1) {
        setTags([ ...tags, language ]);
      }
    }
  }, []);

  return (
    <Accordion data-testid="list-item" expanded={expanded === item.url} onChange={handleChange(item.url)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Box display="flex" flexDirection="column" height={82} width="100%">
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Typography>
              {item.description || 'No Description'}
            </Typography>

            <Typography color="textSecondary" sx={{ mx: 1 }}>
              {numberFiles} {numberFiles > 1 ? 'Files' : 'File'}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
            {tags?.map((item) => (
              <Chip key={item} label={item} color="success" size="small" variant="outlined" />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
            {Object.values(item?.files || {})?.map((item) => (
              <Typography
                key={item.raw_url}
                component={Link}
                color="primary"
                underline="hover"
                href={item.raw_url}
                target="_blank"
                rel="noreferrer"
                sx={{ mr: 1 }}
                onClick={(event) => event.stopPropagation()}
              >
                {item.filename}
              </Typography>
            ))}
          </Stack>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Loader
          loading={isItemFetched}
          render={() => !!itemError ? (
            <Box width="100%" py={3}>
              <Alert severity="error">{itemError}</Alert>
            </Box>
          ) : (
            <ItemDetail itemData={itemData} />
          )}
        />
      </AccordionDetails>
    </Accordion>
  );
};

import { Dispatch, FC, SyntheticEvent, SetStateAction, useEffect, useState } from 'react';
import {
  Box,
  Link,
  Chip,
  Stack,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Files, ListItemType } from '../../../../models';

type ItemProps = {
  item: ListItemType;
  expanded: boolean | string;
  onChange: Dispatch<SetStateAction<string | false>>
};

export const Item: FC<ItemProps> = ({ expanded, item, onChange }) => {
  const numberFiles = Object.keys(item?.files || {}).length;
  const [ tags, setTags ] = useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      onChange(isExpanded ? panel : false);
    };

  useEffect(() => {
    for (let file in item?.files) {
      let language: string = item?.files?.[file].language;

      if (language && tags?.indexOf(language) === -1) {
        setTags([ ...tags, language ]);
      }
    }
  }, []);

  return (
    <Accordion expanded={expanded === item.url} onChange={handleChange(item.url)}>
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

            <Typography color="primary" sx={{ mx: 1 }}>
              {numberFiles} {numberFiles > 1 ? 'Files' : 'File'}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
            {tags?.map((item) => (
              <Chip key={item} label={item} color="primary" size="small" variant="outlined" />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
            {Object.values(item?.files || {})?.map((item) => (
              <Typography
                key={item.raw_url}
                component={Link}
                color="textSecondary"
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
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

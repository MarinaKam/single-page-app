import { FC } from 'react';
import { Typography, Avatar, Chip, Stack, Link } from '@mui/material';
import { ListItemType } from '../../../../models';

type ItemDetailProps = {
  itemData: ListItemType | null;
};

export const ItemDetail: FC<ItemDetailProps> = ({ itemData = {} }) => {
  const forks = itemData?.forks?.slice(0, 3) || [];

  return !!itemData ? (
    <Stack direction="column">
      {itemData?.id && (
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Typography>Owner:</Typography>

          <Chip
            component={Link}
            underline="hover"
            href={itemData?.owner?.html_url}
            target="_blank"
            avatar={<Avatar alt={itemData?.owner?.login} src={itemData?.owner?.avatar_url} />}
            label={itemData?.owner?.login}
            variant="outlined"
          />
        </Stack>
      )}

      <Stack direction="row" spacing={2}>
        <Typography>Forks:</Typography>

        {!forks?.length ? (
          <Typography>No forks yet</Typography>
        ) : forks?.map((fork) => (
          <Chip
            component="a"
            href={`https://gist.github.com/${fork.id}`}
            target="_blank"
            avatar={<Avatar alt={fork.user.login} src={fork.user.avatar_url} />}
            label={fork.user.login}
            variant="outlined"
          />
        ))}
      </Stack>
    </Stack>
  ) : <></>;
};

import { FC } from 'react';
import { CircularProgress, Backdrop, Box } from '@mui/material';

type LoaderPropsType = {
  loading?: boolean;
  render?: () => void;
};

export const Loader: FC<LoaderPropsType & any> = ({ loading = false, render, sx = {}, ...props }) => {
  return loading ? (
    <Box position="relative" display="inline-block" width="100%" pt={3} {...props}>
      <Backdrop
        data-testid="loader-wrapper"
        sx={{
          position: 'relative',
          color: '#fff',
          backgroundColor: 'transparent',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={loading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Box>
  ) : (
    <>{render()}</>
  );
};

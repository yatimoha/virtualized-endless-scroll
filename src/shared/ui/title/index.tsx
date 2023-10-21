import { Typography } from '@mui/material';

type WrapperProps = {
  children: string,
}
export const Title = ({ children }: WrapperProps) => {
  return (
      <Typography variant="h4" sx={{ width: '100%'}} align="center">
        {children}
      </Typography>
  );
};
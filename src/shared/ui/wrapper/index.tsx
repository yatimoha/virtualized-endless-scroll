import { Box, Container } from '@mui/material';

type WrapperProps = {
  children?: JSX.Element,
}
export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container maxWidth="md" sx={{ height: '100%'}}>
      <Box sx={{ width: '100%', height: '90%'}}>
        {children}
      </Box>
    </Container>
  );
};
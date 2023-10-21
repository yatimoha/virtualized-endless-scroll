import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

type PostProps = {
  index: number;
}
export const Post = ({index}: PostProps) => {
  return (
    <ListItemButton>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItemButton>
  );
};
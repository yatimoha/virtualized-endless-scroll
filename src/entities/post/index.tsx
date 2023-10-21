import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { PostData } from '../../feature/get-posts';

type PostProps = {
  post: PostData;
}
export const Post = ({post}: PostProps) => {
  return (
    <ListItemButton>
      <ListItemText primary={`Item ${post.id + 1}`} />
    </ListItemButton>
  );
};
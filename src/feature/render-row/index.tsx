import ListItem from '@mui/material/ListItem';
import { ListChildComponentProps } from 'react-window';
import { Post } from '../../entities';
import { PostsData } from '../get-posts';

type RenderRowProps = {
  posts: PostsData;
  listChildComponent: ListChildComponentProps;
}
export const RenderRow = ({posts, listChildComponent}: RenderRowProps) => {
  const { index, style } = listChildComponent;

  return posts.map((post) => (
    <ListItem style={style} key={index} component="div" disablePadding>
      <Post post={post}/>
    </ListItem>
    )
  )
}
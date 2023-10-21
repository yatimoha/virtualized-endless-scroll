import ListItem from '@mui/material/ListItem';
import { ListChildComponentProps } from 'react-window';
import { Post } from '../../entities';
export const RenderRow = (props: ListChildComponentProps) => {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <Post index={index}/>
    </ListItem>
  );
}
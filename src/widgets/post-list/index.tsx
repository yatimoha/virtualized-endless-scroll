import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList, ListChildComponentProps  } from 'react-window';
import { Post } from '../../entities';
import { PostsData } from '../../feature/get-posts';
// import { RenderRow } from '../../feature';

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <Post post={data}/>
    </ListItem>
  );
}

type PostListProps = {
  posts: PostsData;
  // listChildComponent: ListChildComponentProps;
}
export const PostList = ({posts}: PostListProps) => {
  return (
    <Box sx={{ width: '100%', height: '100%', bgcolor: 'lightcyan' }}>
      <AutoSizer>
        {({ width, height}) => (
          <FixedSizeList
            height={height}
            itemCount={posts.length}
            itemSize={35}
            width={width}
            overscanCount={5}
            itemData={posts}
          >
            {renderRow}
            {/*<RenderRow posts={posts} listChildComponent={listChildComponent}></RenderRow>*/}
          </FixedSizeList>
        )}
      </AutoSizer>

    </Box>
  );
};
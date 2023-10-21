import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList, ListChildComponentProps  } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}
export const PostList = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', bgcolor: 'lightcyan' }}>
      <AutoSizer>
        {({ width, height}) => (
          <FixedSizeList
            height={height}
            itemCount={1000}
            itemSize={35}
            width={width}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        )}
      </AutoSizer>

    </Box>
  );
};
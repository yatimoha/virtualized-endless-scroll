import { useParams } from 'react-router';
import { Title, Wrapper } from '../../shared/ui';

export const PostPage = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <Title>
        {`Post id-${id}`}
      </Title>
    </Wrapper>
  );
};
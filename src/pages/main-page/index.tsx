import { Wrapper } from '../../shared/ui';
import { Title } from '../../shared/ui';
import { PostList } from '../../widgets';

export const MainPage = () => {
  return (
    <Wrapper>
      <>
        <Title>
          Endless scroll + virtualization
        </Title>
        <PostList/>
      </>
    </Wrapper>
  );
};
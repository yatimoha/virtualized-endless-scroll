import { useEffect, useState } from 'react';
import { getPosts } from '../../feature';
import { PostsData } from '../../feature/get-posts';
import { Wrapper } from '../../shared/ui';
import { Title } from '../../shared/ui';
import { PostList } from '../../widgets';


export const MainPage = () => {
  const [posts, setPosts] = useState<PostsData>([]);

  useEffect(() => {
    const postsData = getPosts();
    setPosts(postsData);
  }, [])

  return (
    <Wrapper>
      <>
        <Title>
          Endless scroll + virtualization
        </Title>
        <PostList posts={posts}/>
      </>
    </Wrapper>
  );
};
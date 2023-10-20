import { useParams } from 'react-router';

export const Post = () => {
  const { id } = useParams();
  return (
    <main>
      <h1>
        Post id-{id}
      </h1>
    </main>
  );
};
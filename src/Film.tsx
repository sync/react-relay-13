import { useFragment, graphql } from "react-relay";
import { Film_film$key } from "./__generated__/Film_film.graphql";

type Props = {
  film: Film_film$key | null;
};

const Film = ({ film }: Props) => {
  const data = useFragment(
    graphql`
      fragment Film_film on Film {
        id
        title
      }
    `,
    film
  );

  return <li key={data?.id}>{data?.title}</li>;
};

export default Film;

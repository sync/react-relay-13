import logo from "./logo.svg";
import "./App.css";
import { useLazyLoadQuery, graphql } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import Film from "./Film";

const App = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        allFilms {
          edges {
            node {
              id
              ...Film_film
            }
          }
        }
      }
    `,
    {}
  );

  const films = (data.allFilms?.edges ?? [])
    .map((edge) => edge?.node)
    .filter(Boolean);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Found films</p>
        <ul>
          {films.map((film) => (
            <Film key={film?.id} film={film ?? null} />
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;

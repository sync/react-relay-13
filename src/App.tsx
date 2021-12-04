import logo from "./logo.svg";
import "./App.css";
import { useLazyLoadQuery, graphql } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const App = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        allFilms {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
    {}
  );

  const films = data.allFilms?.edges ?? [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Found films</p>
        <ul>
          {films.map((film) => (
            <li key={film?.node?.id}>{film?.node?.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;

import "./App.css";
import WeatherCard from "./component/Weather/WeatherCard";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <WeatherCard />
      </ApolloProvider>
    </div>
  );
}

export default App;

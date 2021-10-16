import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
        timestamp
      }
    }
  }
`;

const query = () => {
  return <div></div>;
};

export default query;

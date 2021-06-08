import { useLocation } from 'react-router-dom';

function GetQuery(query) {
  return new URLSearchParams(useLocation().search).get(query);
}

export default GetQuery;

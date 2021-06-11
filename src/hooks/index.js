import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const getSearchParams = (search) => {
  const queryParams = Object.create(null);
  const query = new URLSearchParams(search);

  query.forEach((value, key) => {
    if (value) {
      queryParams[key] = value;
    }
  });

  return queryParams;
};

const useQuery = () => {
  const location = useLocation();
  const [query, setQuery] = useState(getSearchParams(location.search));

  useEffect(() => {
    setQuery(getSearchParams(location.search));
  }, [location.search]);

  return query;
};

export default useQuery;

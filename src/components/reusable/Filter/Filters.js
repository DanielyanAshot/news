import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSourcesThunk, selectSources } from '../../../store/slices/sources';

let categoriesFilters = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

let countriesFilters = [
  'ae',
  'ar',
  'at',
  'au',
  'be',
  'bg',
  'br',
  'ca',
  'ch',
  'cn',
  'co',
  'cu',
  'cz',
  'de',
  'eg',
  'fr',
  'gb',
  'gr',
  'hk',
  'hu',
  'id',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'kr',
  'lt',
  'lv',
  'ma',
  'mx',
  'my',
  'ng',
  'nl',
  'no',
  'nz',
  'ph',
  'pl',
  'pt',
  'ro',
  'rs',
  'ru',
  'sa',
  'se',
  'sg',
  'si',
  'sk',
  'th',
  'tr',
  'tw',
  'ua',
  'us',
  've',
  'za',
];

const Fetch = () => {
  const dispatch = useDispatch();
  const sources = useSelector(selectSources);
  useEffect(() => {
    dispatch(fetchSourcesThunk());
  }, [dispatch]);
  return sources;
};

countriesFilters = countriesFilters.map((val, index) => ({ id: index + 1, name: val }));
categoriesFilters = categoriesFilters.map((val, index) => ({ id: index + 1, name: val }));

export { categoriesFilters, countriesFilters, Fetch };

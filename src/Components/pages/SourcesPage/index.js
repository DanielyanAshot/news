import './styles.scss';
import SingleNewsSource from '../../reusable/SingleNewsSource';
import { useEffect, useState } from 'react';

const SourcesPage = () => {
  const [sources, setSources] = useState(null);

  useEffect(() => {
    const fetchSources = async () => {
      const response = await fetch('https://newsapi.org/v2/sources?apiKey=d2719bc29082418883ea1aa824d3d502');
      const data = await response.json();
      setSources(data.sources);
    };

    fetchSources();
  }, []);

  return (
    <section>
      {sources ? sources.map((source) => <SingleNewsSource source={source} key={source.id} />) : <h1>Loading...</h1>}
    </section>
  );
};

export default SourcesPage;

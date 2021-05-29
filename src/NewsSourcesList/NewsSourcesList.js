import SingleNewsSource from '../SingleNewsSource/SingleNewsSource';
import './NewsSourcesList.css';

const NewsSourcesList = ({sources}) => {

    return (
        <div className = 'NewsSourcesList'>
          {sources.map((source) => <SingleNewsSource source = {source} key = {source.id}/>)}
        </div>
    )
}

export default NewsSourcesList;
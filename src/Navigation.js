import {Switch, Route, Redirect} from 'react-router-dom';
import NewsSourcesList from './NewsSourcesList/NewsSourcesList.js';

const Navigation = ({sources}) => {

    return(
            <Switch>
                
                <Route exact path = '/'>
                    <Redirect to = '/HomePage'/>
                </Route>

                <Route path = '/HomePage'>
                    <NewsSourcesList sources = {sources} />
                </Route>

                <Route path = '*'>
                    <div>Not Found</div>
                </Route>
                
            </Switch>
    );
}

export default Navigation;
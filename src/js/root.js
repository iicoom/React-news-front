import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './pc_index';
import MobileIndex from './mobile_index';
import PCNewsDetails from '../components/pc_news_details';
import MobileNewsDetails from '../components/mobile_news_details';
import PCUserCenter from '../components/pc_usercenter';
import MobileUserCenter from '../components/mobile_usercenter';

var MediaQuery = require('react-responsive');
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter
} from 'react-router-dom';


export default class Root extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <Route exact path='/' component={PCIndex} />
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        <Route path="/usercenter" component={PCUserCenter}></Route>
                    </MediaQuery>
                    <MediaQuery query='(max-device-width: 1000px)'>
                        <Route exact path='/' component={MobileIndex} />
                        <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                        <Route path="/usercenter" component={MobileUserCenter}></Route>
                    </MediaQuery>
                </div>
            </HashRouter>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('root'));
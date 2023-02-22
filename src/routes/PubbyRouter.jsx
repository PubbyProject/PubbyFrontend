import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllEventsView from '../views/events/AllEventsView';
import HomeView from '../views/home/HomeView';

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                 <Route
                    path='/events'
                    element={<AllEventsView/>}>
                 </Route>
                 <Route
                    path='/home'
                    element={<HomeView/>}>
                 </Route>
            </Routes>
            </BrowserRouter>
        );
    }

}
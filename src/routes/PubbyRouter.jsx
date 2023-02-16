import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AllEventsView from '../views/events/AllEventsView';

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route
            path='/events'
            element={<AllEventsView/>}
            />
            <Route
            path='/'
            element={HomeView}/>
        </Routes>
        </BrowserRouter>
    );
}
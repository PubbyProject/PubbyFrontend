import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AllEvents from '../views/events/AllEventsView';
export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route
            path='/events'
            element={<AllEvents/>}
            />
            <Route
            path='/'/>
        </Routes>
        </BrowserRouter>
    );
}
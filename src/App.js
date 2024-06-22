import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="charts" element={<Charts />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="kanban" element={<Kanban />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

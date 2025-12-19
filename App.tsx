import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Verification from './screens/Verification';
import Onboarding from './screens/Onboarding';
import Matches from './screens/Matches';
import Profile from './screens/Profile';
import Privacy from './screens/Privacy';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
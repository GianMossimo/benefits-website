import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Accident, Cancer, Connect, Critical, Dental, Home, Hospital, Life, STD, Vision, LoginForm, Family, Agent } from './pages';

import './App.css';
import './index.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/connect' element={<Connect />} />
                    <Route path='/accident' element={<Accident />} />
                    <Route path='/cancer' element={<Cancer />} />
                    <Route path='/critical' element={<Critical />} />
                    <Route path='/dental' element={<Dental />} />
                    <Route path='/hospital' element={<Hospital />} />
                    <Route path='/life' element={<Life />} />
                    <Route path='/std' element={<STD />} />
                    <Route path='/vision' element={<Vision />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/family' element={<Family />} />
                    <Route path='/agent' element={<Agent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
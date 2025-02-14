import React from 'react'
import { BrowserRouter, Routes as WebRoutes, Route } from "react-router-dom";

import Navbar from './layout/NavBar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Technology from './pages/Technology'
import Crew from './pages/Crew'

const Routes = () => (
    <BrowserRouter>
        <WebRoutes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="destination" element={<Destination />} />
                <Route path="technology" element={<Technology />} />
                <Route path="crew" element={<Crew />} />
            </Route>
        </WebRoutes>
    </BrowserRouter>
)

export default Routes
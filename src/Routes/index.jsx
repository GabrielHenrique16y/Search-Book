import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Book from '../pages/Book';

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MyRoute IsClosed={false}>
                        <Home />
                    </MyRoute>
                }
            />
            <Route
                path="/book/:id"
                element={
                    <MyRoute IsClosed={false}>
                        <Book />
                    </MyRoute>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

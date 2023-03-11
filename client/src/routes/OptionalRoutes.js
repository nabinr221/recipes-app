import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../containers/auth/Login';
import { useSelector } from 'react-redux';
import Register from '../containers/auth/Register';
import Home from '../containers/Home';
import CreateRecipes from '../containers/recipes/CreateRecipes';
import RecipesList from '../containers/recipes/RecipesList';

const OptionalRoutes = () => {
    const { userRole } = useSelector(state => state.user)

    if (userRole === "trainee" || userRole ==="chef") {
        return <> <HomeScreens /> </>
    }

    return <AuthScreens />
}
const AuthScreens = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="*" element={<NotFoundPage />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

const HomeScreens = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-recipe" element={<CreateRecipes />} />
                <Route path="/recipes-list" element={<RecipesList />} />


            </Routes>
        </BrowserRouter>
    );
};





export default OptionalRoutes
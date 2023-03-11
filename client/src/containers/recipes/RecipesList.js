import React from 'react'
import Navbar from '../../components/Navbar'
import RecipesCard from '../../components/RecipesCard'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
const RecipesList = () => {
  return (
   <>
          <Navbar />
          <Container className="main-content">

              <div className="breadcumb">
                  <h3>Most Popular Recipes</h3>
                  <p><NavLink to='/recipes'> View All </NavLink></p>
              </div>
              <Grid container spacing={4}>
                  <Grid item xs={6} md={3}>
                      <RecipesCard />
                  </Grid>
                  <Grid item xs={6} md={3}>
                      <RecipesCard />
                  </Grid>
                  <Grid item xs={6} md={3}>
                      <RecipesCard />
                  </Grid>
                  <Grid item xs={6} md={3}>
                      <RecipesCard />
                  </Grid>
                  <Grid item xs={6} md={3}>
                      <RecipesCard />
                  </Grid>
                  <Grid item xs={6} md={3}>
                      <RecipesCard />
                  </Grid>

              </Grid>
          </Container>

   </>
  )
}

export default RecipesList
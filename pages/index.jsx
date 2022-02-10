import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import MediaCard from '../components/Card';

export async function getStaticProps() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=l');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

function Search({ data: initialMeal }) {
  const [searchData, setSearchData] = useState(initialMeal);

  const handleChange = async (e) => {
    const input = e.target.value;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const data = await res.json();

    setSearchData(data);
  };

  const debouncedInput = debounce(handleChange, 300);

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          margin: '24px 0 48px',
        }}
      >
        Search Meal
      </Typography>
      <TextField
        fullWidth
        placeholder="Search meal"
        variant="outlined"
        onChange={debouncedInput}
      />
      <Grid
        container
        spacing={4}
        columns={16}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: '48px',
        }}
      >
        {searchData && searchData.meals ? searchData.meals.map((meal) => {
          const { strMeal, strMealThumb, idMeal } = meal;
          return (
            <Grid item xs={16} sm={8} md={4} key={idMeal}>
              <MediaCard
                title={strMeal}
                image={strMealThumb}
                href={{
                  pathname: '/meal/[slug]',
                  query: {
                    slug: idMeal,
                  },
                }}
              />
            </Grid>
          );
        }) : <p>No result</p>}
      </Grid>
    </Container>
  );
}

Search.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

Search.defaultProps = {
  data: null,
};

export default Search;

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Button } from '../components/Button';
import RandomMealDetail from '../components/RandomMealDetail';

export async function getStaticProps() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

function RandomMeal({ data: initialMeal }) {
  const [randomMeal, setRandomMeal] = useState(initialMeal);

  const handleClick = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await res.json();

    setRandomMeal(data);
  };

  const { strMeal, strMealThumb, idMeal } = randomMeal.meals[0];

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
        Random meal of the day
      </Typography>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          display: 'block',
          margin: '0 auto',
        }}
      >
        Get random meal

      </Button>
      <RandomMealDetail
        title={strMeal}
        image={strMealThumb}
        idMeal={idMeal}
      />
    </Container>
  );
}

RandomMeal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

RandomMeal.defaultProps = {
  data: null,
};

export default RandomMeal;

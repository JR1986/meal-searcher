import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import MealDetail from '../../components/MealDetail';

function Meal() {
  const router = useRouter();
  const { query: { id } } = router;
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!router.isReady) return;
    const fetchMeal = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(url);
      const mealData = await response.json();

      setData(mealData);
      setLoading(false);
    };

    fetchMeal();
  }, [router.isReady]);

  if (isLoading) {
    return (
      <Box sx={{
        textAlign: 'center',
        margin: '48px 24px;',
      }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!data) return <p>No Meal data available :(</p>;

  const meals = data.meals[0];

  const {
    strMeal, strMealThumb, strInstructions,
  } = meals;

  const mealArr = Object.entries(meals);

  const ingredients = mealArr.filter((item) => {
    if (item[0].match(/strIngredient/)) {
      return item;
    }

    return null;
  });

  const measurements = mealArr.filter((item) => {
    if (item[0].match(/strMeasure/)) {
      return item;
    }

    return null;
  });

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          margin: '32px 16px',
        }}
      >
        {strMeal}
      </Typography>
      <MealDetail
        instructions={strInstructions}
        image={strMealThumb}
        title={strMeal}
        ingredients={ingredients}
        measurements={measurements}
      />
    </Container>
  );
}

export default Meal;

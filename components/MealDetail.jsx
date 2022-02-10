import {
  Typography, Grid, Box,
} from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const GridContainer = styled(Grid)`
  margin-top: 48px;
  overflow: hidden;
`;

const GridItem = styled(Grid)`
  background-color: #f1f1f1;
  margin-right: 32px;
  border-radius: 12px;
  margin-bottom: 32px;
`;

function MealDetail({
  image, instructions, title, ingredients, measurements,
}) {
  return (
    <GridContainer
      container
      columns={16}
      justifyContent="center"
    >
      <GridItem
        item
        xs={16}
        md={8}
      >
        <Box sx={{
          padding: '32px',
        }}
        >
          <Typography variant="h5" gutterBottom>
            Instructions
          </Typography>
          <Typography
            variant="body2"
            sx={{
              whiteSpace: 'pre-wrap',
            }}
          >
            {instructions}
          </Typography>
        </Box>
      </GridItem>
      <Grid
        item
        xs={16}
        md={7}
        sx={{
          paddingTop: '0',
        }}
      >
        <Image
          src={image}
          width={600}
          height={550}
          placeholder="blur"
          blurDataURL={image}
          alt={title}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            marginTop: '32px',
          }}
        >
          Ingredients
        </Typography>
        <Box sx={{
          display: 'flex',
        }}
        >
          <Box sx={{
            marginRight: '24px',
          }}
          >
            {ingredients.map((ingredient) => (
              <Typography variant="subtitle2">
                {ingredient[1]}
              </Typography>
            ))}
          </Box>
          <Box>
            {measurements.map((measure) => (
              <Typography variant="subtitle2">
                {measure[1]}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
    </GridContainer>
  );
}

MealDetail.propTypes = {
  title: PropTypes.string,
  instructions: PropTypes.arrayOf(PropTypes.string),
  ingredients: PropTypes.arrayOf(PropTypes.string),
  measurements: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

MealDetail.defaultProps = {
  title: null,
  instructions: null,
  ingredients: [],
  measurements: [],
  image: null,
};

export default MealDetail;

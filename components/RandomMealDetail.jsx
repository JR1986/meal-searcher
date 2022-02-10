import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

const GridContainer = styled(Grid)`
    margin-top: 48px;
    background-color: #FFF1BD;
    border-radius: 12px;
    overflow: hidden;
`;

const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 24px;
    max-width: ${(props) => props.maxWidth};
`;

const StyledGridItem = styled(Grid)`
    padding-top: 0;
    margin-bottom: -8px;
`;

function RandomMealDetail({ title, idMeal, image }) {
  return (
    <GridContainer
      container
      columns={16}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={16} md={8}>
        <StyledDiv
          maxWidth="300px"
        >
          <Typography
            variant="h4"
            component="h2"
          >
            {title}
          </Typography>
          <Link
            href={{
              pathname: '/meal/[slug]',
              query: {
                slug: idMeal,
              },
            }}
            passHref
          >
            View meal
          </Link>
        </StyledDiv>
      </Grid>
      <StyledGridItem
        item
        xs={16}
        md={8}
      >
        <StyledDiv
          maxWidth="600px"
        >
          <Image
            src={image}
            width={600}
            height={550}
            placeholder="blur"
            blurDataURL={image}
          />
        </StyledDiv>
      </StyledGridItem>
    </GridContainer>
  );
}

RandomMealDetail.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  idMeal: PropTypes.string,
};

RandomMealDetail.defaultProps = {
  title: null,
  image: null,
  idMeal: PropTypes.string,
};

export default RandomMealDetail;

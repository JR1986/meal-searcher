import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const StyledCard = styled(Card)`
  cursor: pointer;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function MediaCard({ title, image, href }) {
  return (
    <Link
      href={href}
    >
      <StyledCard>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Recipe</Button>
        </CardActions>
      </StyledCard>
    </Link>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  href: PropTypes.shape({}),
  image: PropTypes.string,
};

MediaCard.defaultProps = {
  title: null,
  href: null,
  image: null,
};

export default MediaCard;

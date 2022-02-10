import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from './Button';
import Drawer from './Drawer';

const StyledToolbar = styled(Toolbar)`
  && {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    min-height: 80px;
    flex-direction: row;
  }
`;

function Navigation({ links }) {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledAppBar position="static">
      <StyledIconButton
        onClick={handleDrawer}
        color="inherit"
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledToolbar>
        <Drawer open={open} onClose={handleClose}>
          {links}
        </Drawer>
        {links}
      </StyledToolbar>
    </StyledAppBar>
  );
}

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Navigation.defaultProps = {
  links: null,
};

export default Navigation;

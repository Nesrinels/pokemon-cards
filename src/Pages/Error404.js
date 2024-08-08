import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Img } from 'react-image';

import Snorlax from '../img/Snorlax.svg';
import Button from '../Components/Button';

const useStyles = createUseStyles({
  h1: {
    fontSize: '20rem',
    margin: '0px',
    color: '#025554',
    '@media (max-width: 768px)': {
      fontSize: '8rem',
    },
    '@media (max-width: 425px)': {
      fontSize: '4rem',
    },
  },
  img: {
    width: '300px',
    padding: '0 15px',
    '@media (max-width: 768px)': {
      width: '120px',
    },
    '@media (max-width: 425px)': {
      width: '60px',
    },
  },
  p: {
    fontSize: '1.2rem',
  },
  span: {
    color: '#4d8887',
    fontWeight: '600',
  },
});

const Error404 = () => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate
  const classes = useStyles();

  const handleBack = useCallback(() => {
    navigate('/'); // Replace history.push with navigate
  }, [navigate]);

  return (
    <div>
      <h1 className={classes.h1}>
        4<Img src={Snorlax} className={classes.img} alt="404" />4
      </h1>
      <p className={classes.p}>
        <span className={classes.span}>Opps!</span> A wild Snorlax has blocked
        your path!
      </p>
      <Button color={'#025554'} handleEvent={handleBack} text="GO HOME" />
    </div>
  );
};

export default Error404;
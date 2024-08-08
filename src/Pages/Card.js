import React from 'react';
import { createUseStyles } from 'react-jss';
import { Img } from 'react-image';
import { useParams, Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect
import Skeleton from 'react-loading-skeleton';

import CardDescription from '../Components/CardDescription';
import CardAttacks from '../Components/CardAttacks';
import CardBoxIcon from '../Components/CardBoxIcon';
import Loading from '../Components/Loading';
import Icon from '../Components/Icon';
import Title from '../Components/Title';

// import CARD from '../Mocks/Card';
import useCard from '../Hooks/useCard';

const useStyles = createUseStyles({
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '10px',
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch', // Corrected typo 'strech' to 'stretch'
    justifyContent: 'center',
    alignContent: 'center',
    '@media (max-width: 767px)': {
      flexFlow: 'column wrap',
    },
  },
  left: {
    padding: '1rem',
    flex: '1 0 0',
    '& img': {
      maxWidth: '400px',
      width: '100%',
    },
  },
  right: {
    flex: '2 0 0',
    textAlign: 'left',
  },
});

const Card = () => {
  const { id } = useParams();
  const classes = useStyles();
  // const { card } = CARD;
  const { card } = useCard(id);

  if (!card) return <Loading middle />;
  if (card === 'Error') return <Navigate to="/error404" />; // Use Navigate for redirection

  const {
    svgImage,
    title,
    subtitle,
    image,
    types,
    ability,
    attacks,
    rules,
    miscellaneous,
  } = card;

  return (
    <div className={classes.container}>
      <Title title={title} subtitle={subtitle}>
        <Icon size="medium" name={svgImage} img={svgImage} />
        {types.map(({ index, name, text, img, bg, size }) => (
          <Icon
            key={index}
            name={name}
            text={text}
            img={img}
            bg={bg}
            size={size}
          />
        ))}
      </Title>
      <div className={classes.row}>
        <div className={classes.left}>
          <Img src={image} loader={<Skeleton />} alt={image} />
        </div>
        <div className={classes.right}>
          {ability && <CardDescription data={ability} />}
          {rules && <CardDescription data={rules} />}
          {attacks && <CardAttacks data={attacks} />}
          <CardBoxIcon data={miscellaneous} />
        </div>
      </div>
    </div>
  );
};

export default Card;
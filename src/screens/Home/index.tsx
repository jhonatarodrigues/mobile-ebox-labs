import React from 'react';
import {Image} from 'react-native';
import {Container, Flag, Logo, Ornament} from './styles';

import LogoImage from '@/assets/image/logo.png';
import ChemicalSVG from '@/assets/svg/chemical.tsx';
import HollandImage from '@/assets/image/holland.png';


const Home = () => {
  console.log('Home screen');

  return (
    
      <Container>
        <Logo>
          <Image source={LogoImage} />
        </Logo>
        <Ornament>
          <ChemicalSVG />
        </Ornament>
        <Flag>
          <Image source={HollandImage} />
        </Flag>
      </Container>
    
  );
};

export default Home;

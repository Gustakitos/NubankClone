import React from 'react';

import Header from '~/components/Header/header';

import {Container} from './styles';
import Tabs from '~/components/Tabs/tabs';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}

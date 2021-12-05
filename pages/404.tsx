import React from 'react';
import { Container, Title, Text } from '@components';

const NotFound = (): JSX.Element => (
  <Container alignItems="center">
    <Title>Oh no! 😔</Title>
    <Text>The requested page does not exist.</Text>
  </Container>
);

export default NotFound;

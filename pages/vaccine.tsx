import React from 'react';
import { Container, Title, Text, Link, Button } from '@components';

const Vaccinated = (): JSX.Element => (
  <Container alignItems="center">
    <Title>I'm vaccinated. You should be too.</Title>
    <Text>Vaccination in the fight against COVID-19 is cruical to getting us back to our everyday lives.</Text>
    <Link href="https://www.vaccines.gov/search/">
        <Button>Find a place for vaccination &rarr;</Button>
    </Link>
  </Container>
);

export default Vaccinated;

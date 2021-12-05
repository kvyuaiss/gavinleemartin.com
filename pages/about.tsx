import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiNodeDotJs,
  SiDigitalocean,
  SiSpring,
  SiAngular,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiAtlassian,
  SiReact,
  SiNextDotJs,
  SiIntercom,
  SiSentry,
} from 'react-icons/si';
import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const About = ({ experiences }: AboutProps): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiNodeDotJs,
        url: 'https://nodejs.org/',
      },
      {
        Icon: SiDigitalocean,
        url: 'https://digitalocean.com/',
      },
      {
        Icon: SiTypescript,
        url: 'https://typescriptlang.org/',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiAngular,
        url: 'https://angular.io/',
      },
      {
        Icon: SiAmazonaws,
        url: 'https://aws.amazon.com/',
      },
      {
        Icon: SiNextDotJs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiSpring,
        url: 'https://spring.io/',
      },
      {
        Icon: SiGooglecloud,
        url: 'https://cloud.google.com/',
      },
      {
        Icon: SiAtlassian,
        url: 'https://atlassian.com/',
      },
      {
        Icon: SiIntercom,
        url: 'https://intercom.com/',
      },
      {
        Icon: SiSentry,
        url: 'https://sentry.io/',
      },
    ],
    [],
  );

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          Passionate about software
        </Title>
        <Container maxWidth={['100%', '700px']} marginY="2rem">
          <Text>I&apos;m a Full Stack Engineer and Student from West Virginia, creating online platforms to make the lives of thousands easier every day.</Text>
          <Text>
            During my free time I play high-school football, seek adventures, and love visiting historical landmarks. I also built{' '}
            <a href="https://eastsideapp.com">Eastside Platform</a> as a summer project, a code-free solution to creating Discord Bots; without learning to code yourself.
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          Technologies I frequently use in development
        </Title>
        <Grid
          gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Container width="100%">
          {experiences.map(({ data }, i) => (
            <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
              <Grid
                key={i}
                gridTemplateColumns="1fr 4fr"
                justifyItems="flex-start"
                gridGap="1rem"
                paddingY="2rem"
                borderBottom="1px solid rgba(0,0,0,0.1)"
              >
                <Container width="100%">
                  <Text>0{experiences.length - i}</Text>
                </Container>
                <Grid width="100%" gridTemplateColumns="4fr 1fr">
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      gridTemplateColumns="repeat(2, auto)"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.5rem" margin={0} as="h3">
                        {data.title}
                      </Title>
                      <Text
                        fontSize="smaller"
                        margin={0}
                        color="rgba(0, 0, 0, 0.1)"
                      >
                        {data.date}
                      </Text>
                    </Grid>
                    <Text fontSize="1rem">{data.caption}</Text>
                  </Container>
                  <Text fontSize="1.5rem">&rarr;</Text>
                </Grid>
              </Grid>
            </TransparentLink>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;

import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin, SiFacebook, SiDiscord } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import { RiSurgicalMaskFill } from 'react-icons/ri';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const Footer = (): JSX.Element => {
  const links = React.useMemo(
    () => [
      {
        url: 'https://github.com/realgavinmartin',
        icon: SiGithub,
      },
      {
        url: 'https://facebook.com/gavin.martin.10420/',
        icon: SiFacebook,
      },
      {
        url: 'mailto:gavin@gavinleemartin.com',
        icon: MdMail,
      },
      {
        url: '/vaccine',
        icon: RiSurgicalMaskFill,
      },
      {
        url: 'https://www.linkedin.com/in/gavin-martin-4593b7201/',
        icon: SiLinkedin,
      },
      {
        url: 'https://discord.com/channels/@me/460188583043530762',
        icon: SiDiscord,
      },
    ],
    [],
  );

  return (
    <StyledFooter>
      <Container paddingY="25px">
        <Grid gridGap="30px">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="mailto:gavin@gavinleemartin.com">Contact</Link>
        </Grid>
      </Container>
      <FooterGrid>
        {links.map(({ url, icon: Icon }) => (
          <Link key={url} target="_blank" opacity={0.7} href={url}>
            <Icon size={22} />
          </Link>
        ))}
      </FooterGrid>
      <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
        © {new Date().getFullYear()} Gavin Martin
      </Text>
    </StyledFooter>
  );
};

export default Footer;

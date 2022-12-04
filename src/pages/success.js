import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function SuccessPage() {
  return (
    <Layout>
      <StaticImage
        className='grid-area-1'
        style={{ maxHeight: 500 }}
        imgStyle={{ objectPosition: '55% 45%' }}
        layout='fullWidth'
        src='../images/contact.jpeg'
        alt='Make It Make Sense Contact Image'
        aspectRatio={1}
      />
      <section className='padding-top-2 padding-right-1 padding-bottom-2 padding-left-1 max-width-lg margin-auto text-center'>
        <h2>Success!</h2>
        <p>Your message has been sent.</p>
        <Link className='text-decoration-underline dark' to='/'>
          Return Home
        </Link>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Success | Make It Make Sense</title>
    <meta name='description' content='Your message has been sent.' />
    <meta name='keywords' content='Make It Make Sense, Music, Band, Rock, Grunge, Alernative' />
    <meta name='author' content='Asher Best' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='robots' content='noindex' />
  </>
);

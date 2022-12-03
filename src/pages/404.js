import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function NotFoundPage() {
  return (
    <Layout>
      <StaticImage
        className='grid-area-1'
        style={{ maxHeight: 500 }}
        imgStyle={{ objectPosition: '60% 40%' }}
        layout='fullWidth'
        src='../images/contact.jpeg'
        alt='Make It Make Sense Contact Image'
        aspectRatio={1}
      />
      <section className='padding-top-2 padding-right-1 padding-bottom-2 padding-left-1 max-width-lg margin-auto'>
        <h2>404 Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link className='text-decoration-underline dark' to='/'>
          Return Home
        </Link>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>404 Not Found | Make It Make Sense</title>
    <meta name='description' content='The page you are looking for does not exist.' />
    <meta name='keywords' content='Make It Make Sense, Music, Band, Rock, Grunge, Alernative' />
    <meta name='author' content='Asher Best' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  </>
);

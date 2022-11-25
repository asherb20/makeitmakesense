import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <>
      <nav className='pos-fix p-1 w-100 z-3'>
        <h1>Make It Make Sense</h1>
      </nav>
      <main>
        <div className='grid' style={{ maxHeight: 500 }}>
          <StaticImage className='grid-area-1' style={{ maxHeight: 500 }} layout='fullWidth' src='../images/hero.jpeg' formats={['auto', 'webp', 'avif']} />
        </div>
        <div className='p-1'>
          <h2>Music</h2>
          <div className='cols cols-md'>
            <div className='col-md mt-1 vmd-mr-1'>
              <iframe
                className='br-1'
                title='Memory Wall by Make It Make Sense on Spotify'
                src='https://open.spotify.com/embed/album/6q7s7kaYzbKl548e4c3Kel?utm_source=generator&theme=0'
                width='100%'
                height='380'
                frameBorder='0'
                allowFullScreen=''
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
            </div>
            <div className='col-md mt-1 vmd-ml-1'>
              <h3>Memory Wall</h3>
              <p className='mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className='grid'>
          <div className='overlay grid-area-1 z-1' style={{ maxHeight: 500 }} />
          <StaticImage className='grid-area-1' style={{ maxHeight: 500 }} layout='fullWidth' src='../images/about.jpeg' formats={['auto', 'webp', 'avif']} />
          <div className='grid grid-area-1 pos-rel center-items'>
            <div className='p-1 z-2'>
              <h2 className='c-light'>About</h2>
              <p className='c-light pt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className='p-1'>
          <div className='grid'>
            <StaticImage className='grid-area-1' style={{ maxHeight: 500 }} layout='fullWidth' src='../images/labrandon_bowen.jpeg' formats={['auto', 'webp', 'avif']} />
            <div className='grid grid-area-1 pos-rel' style={{ placeItems: 'flex-end' }}>
              <h3>Labrandon Bowen — Drums</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

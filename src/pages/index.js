import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <StaticImage
        layout='fullWidth'
        src='../images/hero.jpeg'
        alt='Make It Make Sense Hero Image'
        aspectRatio={1}
        style={{ maxHeight: '100vh' }}
        imgStyle={{ objectPosition: 'top' }}
        quality={100}
      />
      <section id='music' className='padding-top-2 padding-right-1 padding-bottom-2 padding-left-1 max-width-lg margin-auto'>
        <h2>Music</h2>
        <div className='row row-gap-md-2'>
          <div className='margin-top-1 col col-md-6'>
            <iframe
              className='border-radius-1'
              title='Memory Wall by Make It Make Sense on Spotify'
              src='https://open.spotify.com/embed/album/6q7s7kaYzbKl548e4c3Kel?utm_source=generator&theme=0'
              width='100%'
              height='380'
              frameBorder='0'
              allowFullScreen=''
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            />
          </div>
          <div className='margin-top-1 col col-md-6'>
            <h3>Memory Wall</h3>
            <p className='margin-top-1'>
              Fast-paced, high energy and melodic rock blended with jazzy and acoustic elements. Featuring songs such as "Sorrow", "Fair", and "Clear The Way". Available on
              all major streaming platforms.
            </p>
          </div>
        </div>
      </section>
      <section id='about' className='grid'>
        <div className='opacity-75 bg-dark grid-area-1 z-index-1' style={{ maxHeight: 500 }} />
        <StaticImage className='grid-area-1' style={{ maxHeight: 500 }} layout='fullWidth' src='../images/about.jpeg' alt='Make It Make Sense About Image' aspectRatio={1} />
        <div className='grid grid-area-1 position-relative place-items-center max-width-lg margin-auto padding-1'>
          <div className='z-index-2'>
            <h2 className='light'>About</h2>
            <p className='light padding-top-1'>
              We are an alternative, grunge rock band based out of Dallas, TX. Our sound is a high energy, heavily distorted type of rock with a melodic sound, jazzy
              undertones and acoustic elements. Our influences include Incubus, Nirvana, Paramore, Blink-182 and many others.
            </p>
          </div>
        </div>
      </section>
      <section className='padding-top-2 padding-right-1 padding-bottom-1 padding-left-1'>
        <div className='row row-gap-md-1 max-width-lg margin-auto'>
          <div className='grid col col-md-4 padding-bottom-1'>
            <div className='opacity-50 bg-dark grid-area-1 z-index-1 border-radius-1' />
            <StaticImage
              className='grid-area-1 border-radius-1 shadow'
              layout='fullWidth'
              src='../images/labrandon_bowen.jpeg'
              alt='Labrandon Bowen - Drums'
              aspectRatio={1}
            />
            <div className='grid grid-area-1 position-relative z-index-2 padding-1 place-items-end-center'>
              <p className='light'>Labrandon Bowen - Drums</p>
            </div>
          </div>
          <div className='grid col col-md-4 padding-bottom-1'>
            <div className='opacity-50 bg-dark grid-area-1 z-index-1 border-radius-1' />
            <StaticImage className='grid-area-1 border-radius-1 shadow' layout='fullWidth' src='../images/shane_stanley.jpeg' alt='Shane Stanley - Bass' aspectRatio={1} />
            <div className='grid grid-area-1 position-relative z-index-2 padding-1 place-items-end-center'>
              <p className='light'>Shane Stanley - Bass</p>
            </div>
          </div>
          <div className='grid col col-md-4 padding-bottom-1'>
            <div className='opacity-50 bg-dark grid-area-1 z-index-1 border-radius-1' />
            <StaticImage className='grid-area-1 border-radius-1 shadow' layout='fullWidth' src='../images/asher_best.jpg' alt='Asher Best - Guitar/Vocals' aspectRatio={1} />
            <div className='grid grid-area-1 position-relative z-index-2 padding-1 place-items-end-center'>
              <p className='light'>Asher Best - Guitar & Vocals</p>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='grid'>
        <div className='opacity-75 bg-dark grid-area-1 z-index-1' style={{ maxHeight: 475 }} />
        <StaticImage
          className='grid-area-1'
          style={{ maxHeight: 475 }}
          imgStyle={{ objectPosition: '60% 40%' }}
          layout='fullWidth'
          src='../images/contact.jpeg'
          alt='Make It Make Sense Contact Image'
          aspectRatio={1}
        />
        <div className='grid-area-1 position-relative place-items-center z-index-2 width-100 max-width-sm margin-auto '>
          <div className='padding-top-2 padding-right-1 padding-bottom-2 padding-left-1'>
            <h2 className='light padding-bottom-1'>Contact</h2>
            <form name='contact' action='/success' method='POST' className='bg-light padding-2 border-radius-1 shadow' netlify>
              <div className='margin-bottom-1 grid'>
                <input type='text' placeholder='Name' className='outline-none border-dark border-width-2 border-radius-1 padding-1' required />
              </div>
              <div className='margin-bottom-1 grid'>
                <input type='email' placeholder='Email' className='outline-none border-dark border-width-2 border-radius-1 padding-1' required />
              </div>
              <div className='margin-bottom-1 grid'>
                <textarea rows={10} placeholder='Message' className='outline-none border-dark border-width-2 border-radius-1 padding-1 resize-none' required />
              </div>
              <input
                type='submit'
                className='width-100 bg-dark border-dark light padding-1 border-radius-1 cursor-pointer font-size-1 font-bold font-weight-bold hover-bg-light hover-dark'
              />
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Make It Make Sense</title>
    <meta name='description' content='Make It Make Sense is an alternative, grunge rock band based out of Dallas, TX.' />
    <meta name='keywords' content='Make It Make Sense, Music, Band, Rock, Grunge, Alernative' />
    <meta name='author' content='Asher Best' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  </>
);

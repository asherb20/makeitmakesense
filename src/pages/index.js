import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { MenuIcon, CloseIcon } from '../components/icons';
import { Link } from 'gatsby';

const IndexPage = () => {
  const [navStyle, setNavStyle] = React.useState({});
  const [navLinksVisible, setNavLinksVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setNavStyle({
          backgroundColor: 'white',
          boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
          transition: '.3s'
        });
      } else {
        setNavStyle({});
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        setNavLinksVisible(true);
      }
    });
  }, []);

  return (
    <>
      <nav className='position-fixed width-100 z-index-3' style={navStyle}>
        <div className='margin-auto max-width-lg padding-1'>
          <div className='row'>
            <div className='col-8'>
              <h1>Make It Make Sense</h1>
            </div>
            <div className='col-4 flex justify-content-end align-items-center'>
              <button className='bg-none border-none padding-0 margin-0 display-none-lg' style={{ height: 24 }} onClick={() => setNavLinksVisible(true)}>
                <MenuIcon size={24} color='black' />
              </button>
              <div className='position-absolute bg-dark height-100 width-75 right-0 top-0' style={{ display: navLinksVisible ? 'block' : 'none' }}>
                <div className='padding-1 flex justify-content-end align-items-center display-none-lg'>
                  <button className='bg-none border-none padding-0 margin-0' style={{ height: 24 }} onClick={() => setNavLinksVisible(false)}>
                    <CloseIcon size={24} color='white' />
                  </button>
                </div>
                <ul className='list-style-none padding-0 margin-0'>
                  <li>
                    <Link
                      to='#music'
                      className='display-block padding-top-half padding-right-1 padding-bottom-half padding-left-1 light text-decoration-none'
                      onClick={() => setNavLinksVisible(false)}
                    >
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#about'
                      className='display-block padding-top-half padding-right-1 padding-bottom-half padding-left-1 light text-decoration-none'
                      onClick={() => setNavLinksVisible(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#contact'
                      className='display-block padding-top-half padding-right-1 padding-bottom-half padding-left-1 light text-decoration-none'
                      onClick={() => setNavLinksVisible(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <StaticImage
          layout='fullWidth'
          src='../images/hero.jpeg'
          alt='Make It Make Sense Hero Image'
          aspectRatio={1}
          style={{ maxHeight: '100vh' }}
          imgStyle={{ objectPosition: 'top' }}
        />
        <div id='music' className='padding-top-2 padding-right-1 padding-bottom-2 padding-left-1 max-width-lg margin-auto'>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div id='about' className='grid'>
          <div className='opacity-75 bg-dark grid-area-1 z-index-1' style={{ maxHeight: 500 }} />
          <StaticImage className='grid-area-1' style={{ maxHeight: 500 }} layout='fullWidth' src='../images/about.jpeg' alt='Make It Make Sense About Image' aspectRatio={1} />
          <div className='grid grid-area-1 position-relative place-items-center max-width-lg margin-auto padding-1'>
            <div className='z-index-2'>
              <h2 className='light'>About</h2>
              <p className='light padding-top-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className='padding-top-2 padding-right-1 padding-bottom-1 padding-left-1'>
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
                <p className='light'>Asher Best - Guitar/Vocals</p>
              </div>
            </div>
          </div>
        </div>
        <div id='contact' className='grid'>
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
              <form className='bg-light padding-2 border-radius-1 shadow'>
                <div className='margin-bottom-1 grid'>
                  <input type='text' placeholder='Name' className='outline-none border-dark border-width-2 border-radius-1 padding-1' required />
                </div>
                <div className='margin-bottom-1 grid'>
                  <input type='email' placeholder='Email' className='outline-none border-dark border-width-2 border-radius-1 padding-1' required />
                </div>
                <div className='margin-bottom-1 grid'>
                  <textarea rows={10} placeholder='Message' className='outline-none border-dark border-width-2 border-radius-1 padding-1' required />
                </div>
                <input
                  type='submit'
                  className='width-100 bg-dark border-dark light padding-1 border-radius-1 cursor-pointer font-size-1 font-bold font-weight-bold hover-bg-light hover-dark'
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

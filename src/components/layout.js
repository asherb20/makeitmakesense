import * as React from 'react';
import { MenuIcon, CloseIcon, ChevronUpIcon, FacebookIcon, InstagramIcon, SpotifyIcon, AppleIcon } from '../components/icons';
import { Link } from 'gatsby';

const NAV_LINKS = [
  { to: '#music', text: 'Music' },
  { to: '#about', text: 'About' },
  { to: '#contact', text: 'Contact' }
];

const SOCIAL_LINKS = [
  { key: 'facebook', href: 'https://www.facebook.com/makeitmakesensemusic', icon: <FacebookIcon size={28} color='white' /> },
  { key: 'instagram', href: 'https://www.instagram.com/makeitmakesensemusic/', icon: <InstagramIcon size={28} color='white' /> },
  { key: 'spotify', href: 'https://open.spotify.com/artist/2nkaMtzskTjyyTQJLK4ehl', icon: <SpotifyIcon size={48} color='white' /> },
  { key: 'apple', href: 'https://music.apple.com/gb/artist/make-it-make-sense/1548916417', icon: <AppleIcon size={28} color='white' /> }
];

export default function Layout({ children }) {
  const [navStyle, setNavStyle] = React.useState({});
  const [navLinksVisible, setNavLinksVisible] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(null);
  const [scrollTop, setScrollTop] = React.useState(false);

  React.useEffect(() => {
    const checkScrollY = () => {
      const navStyleProps = {};
      if (window.scrollY > 0) {
        navStyleProps.backgroundColor = 'white';
        navStyleProps.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
        navStyleProps.transition = '.3s';
      }
      setNavStyle(navStyleProps);
    };

    const checkInnerWidth = () => {
      if (window.innerWidth >= 992) setNavLinksVisible(true);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('scroll', checkScrollY);
    window.addEventListener('resize', checkInnerWidth);

    checkScrollY();
    checkInnerWidth();
  }, []);

  React.useEffect(() => {
    if (scrollTop) {
      window.scrollTo(0, 0);
      setScrollTop(false);
    }
  }, [scrollTop]);

  const onNavLinkClick = () => screenWidth < 992 && setNavLinksVisible(false);

  return (
    <>
      <nav className='position-fixed width-100 z-index-3' style={navStyle}>
        <div className='max-width-xl margin-auto padding-top-half padding-right-1 padding-bottom-half padding-left-1'>
          <div className='row'>
            <div className='col-8'>
              <Link to='/' className='text-decoration-none dark'>
                <h1>Make It Make Sense</h1>
              </Link>
            </div>
            <div className='col-4 flex justify-content-end align-items-center'>
              <button className='bg-none border-none padding-0 margin-0 display-none-lg' style={{ height: 24 }} onClick={() => setNavLinksVisible(true)}>
                <MenuIcon size={24} color='black' />
              </button>
              <div
                className='position-absolute bg-dark height-100 height-inherit-lg width-75 width-50-sm width-100-lg right-0 top-0 bg-none-lg position-relative-lg'
                style={{ display: navLinksVisible ? 'block' : 'none' }}
              >
                <div className='padding-1 flex justify-content-end align-items-center display-none-lg'>
                  <button className='bg-none border-none padding-0 margin-0' style={{ height: 24 }} onClick={() => setNavLinksVisible(false)}>
                    <CloseIcon size={24} color='white' />
                  </button>
                </div>
                <ul className='list-style-none padding-0 margin-0 flex-lg justify-content-end-lg'>
                  {NAV_LINKS.map(link => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className='display-block padding-top-half padding-right-1 padding-bottom-half padding-left-1 padding-half-lg light text-decoration-none dark-lg'
                        onClick={onNavLinkClick}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className='padding-1'>
        <div className='flex justify-content-center align-items-center'>
          <button className='bg-none border-none cursor-pointer' onClick={() => setScrollTop(true)}>
            <ChevronUpIcon size={48} color='black' />
          </button>
        </div>
        <div className='flex justify-content-center align-items-center'>
          {SOCIAL_LINKS.map(link => (
            <a
              style={{ width: 56, height: 56 }}
              className='bg-dark border-radius-100 flex justify-content-center align-items-center margin-half'
              key={link.key}
              href={link.href}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className='flex justify-content-center align-items-center'>
          <p>
            Website designed and developed by{' '}
            <a className='dark' href='https://www.asherbest.com'>
              Asher Best
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

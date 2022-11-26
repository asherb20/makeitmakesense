import * as React from 'react';

export const MenuIcon = ({ size, color }) => (
  <svg height={size} viewBox='0 0 18 12' width={size}>
    <title />
    <desc />
    <defs />
    <g fill='none' fill-rule='evenodd' id='Page-1' stroke='none' stroke-width='1'>
      <g fill={color} id='Core' transform='translate(-87.000000, -342.000000)'>
        <g id='menu' transform='translate(87.000000, 342.000000)'>
          <path d='M0,12 L18,12 L18,10 L0,10 L0,12 L0,12 Z M0,7 L18,7 L18,5 L0,5 L0,7 L0,7 Z M0,0 L0,2 L18,2 L18,0 L0,0 L0,0 Z' id='Shape' />
        </g>
      </g>
    </g>
  </svg>
);

export const CloseIcon = ({ size, color }) => (
  <svg height={size} style={{ enableBackground: 'new 0 0 512 512' }} viewBox='0 0 512 512' width={size}>
    <path
      fill={color}
      d='M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z'
    />
  </svg>
);

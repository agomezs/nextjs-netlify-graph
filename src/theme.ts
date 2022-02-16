import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

/* jscpd:ignore-start */

/** Padding and margin sizes*/
export enum PM {
  None = '0px',
  XS7 = '1px',
  XS6 = '2px',
  XS5 = '3px',
  XS4 = '4px',
  XS3 = '5px',
  XS2 = '6px',
  XS1 = '8px',
  S = '10px',
  M = '13px',
  L = '16px',
  XL1 = '21px',
  XL2 = '26px',
  XL3 = '34px',
  XL4 = '42px',
  XL5 = '55px',
  XL6 = '68px',
  XL7 = '89px',
  XL8 = '110px',
}
/* jscpd:ignore-end */

/** Width and height sizes*/
export enum WH {
  None = '0px',
  XS9 = '2px',
  XS8 = '4px',
  XS7 = '6px',
  XS6 = '10px',
  XS5 = '13px',
  XS4 = '16px',
  XS3 = '21px',
  XS2 = '26px',
  XS1 = '34px',
  S = '42px',
  M = '55px',
  L = '68px',
  XL1 = '89px',
  XL2 = '110px',
  XL3 = '144px',
  XL4 = '178px',
  XL5 = '233px',
  XL6 = '288px',
  XL7 = '377px',
  XL8 = '466px',
  XL9 = '610px',
  XL10 = '754px',
}

/** Text sizes*/
export enum TX {
  None = '0px',
  XS7 = '1px',
  XS6 = '2px',
  XS5 = '3px',
  XS4 = '4px',
  XS3 = '5px',
  XS2 = '6px',
  XS1 = '8px',
  S = '10px',
  M = '13px',
  L = '16px',
  XL1 = '21px',
  XL2 = '26px',
  XL3 = '34px',
  XL4 = '42px',
  XL5 = '55px',
  XL6 = '68px',
  XL7 = '89px',
}

/** Media View Breakpoints (fixed screen width) */
export enum Breakpoint {
  SM = 'sm',
  XS = 'xs',
  MD = 'md',
}


// // Create a theme instance.
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            height: WH.XS3,
            width: WH.XS3,
          },
        },
      },
    },

    MuiButton: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            height: WH.S,
          },
        },
        {
          props: { size: 'small' },
          style: {
            height: WH.XS1,
          },
        },
      ],
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          '&.card-small': {
            margin: '2rem',
            width: WH.XL6,
          },
          borderRadius: WH.XS3,
          // TODO: this box shadow color should be part of the palette
          boxShadow: `0 ${PM.XS3} ${PM.M} 0 #00000033`,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '&.login-background__background': {
            height: '100%',
            opacity: '0.7',
            position: 'relative',
            width: '100%',
            '& img': {
              height: '100%',
              width: '100%',
            },
          },
        },
      },
    },

  },
})

export default theme;

const maxWidths = {
  xs: '540px',
  sm: '720px',
  md: '960px',
  xl: '1200px'
};

// Space
const space = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Colors
const colors = {
  none: 'none',
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
  primary: '#f15a22',
  heading: '#474747',
  label: '#474747',
  bgPrimary: '#595858',
  bgOffer: '#6d7278',
  filterBg: '#eeeaea',
  bgFooter: 'rgba(159, 155, 146, 0.3)',
  textPrimary: '#474747',
  textSecondary: '#1c1c1c',
  textFilter: '#4a4a4a',
  textSale: '#cc1e05',
  menuItem: '#121212',
  categoryTitle: '#3b4171',
  bg: '#f5f5f5',
  border: '#979797',
  success: '#28a745',
  error: '#dc3545',
  info: '#17a2b8',
  textFooter: '#1d1d1d'
};

// boxShadows
const shadows = {
  none: 'none',
  primary: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

// borders
const borders = {
  none: 'none',
  divider: 'solid 0.5px #979797',
  dividerBold: 'solid 1px #222222',
  dividerLight: 'solid 1px rgba(0, 0, 0, 0.25)',
};

// Font Weight
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

// Button Constant
const buttonConst = {
  borderRadius: 5,
  fontSize: 14,
  padding: '10px 15px',
  minWidth: 150,
  fontWeight: 'medium',
  textTransform: 'uppercase',
  textAlign: 'center',
  '&:hover': {}
};

const linkConst = {
  borderRadius: 5,
  fontSize: 14,
  padding: '10px 15px',
  backgroundColor: 'transparent',
  border: borders.none,
  px: 0,
  py: 0
};

// Button Variant
const buttons = {
  primary: {
    backgroundColor: 'primary',
    color: 'white',
    ...buttonConst
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'primary',
    ...buttonConst,
    border: 'primary',
    lineHeight: 1
  },
  link: {
    ...linkConst,
    color: 'primaryText'
  },
};

// Text Variant
const text = {
  xSmall: {
    fontSize: 12
  },
  xSmallSecondary: {
    fontSize: 12,
    color: 'secondaryText'
  },
  small: {
    fontSize: 14
  },
  smallSecondary: {
    fontSize: 14,
    color: 'secondaryText'
  },
  regular: {
    fontSize: 16
  },
  error: {
    color: 'error',
    fontSize: 12,
    mt: 8
  },
  primary: {
    color: 'textPrimary',
    fontSize: 16
  },
  heading: {
    color: 'heading',
    fontSize: 24,
    fontFamily: 'medium'
  },
  uspTitle: {
    fontSize: 20,
    fontFamily: 'regular',
    textAlign: 'center',
    color: 'textPrimary'
  },
  catSliderTitle: {
    fontSize: 28,
    fontFamily: 'medium',
    textAlign: 'center',
    color: 'categoryTitle'
  },
  footerTitle: {
    color: 'textFooter',
    fontSize: 20,
    mb: 16
  },
  footerLink: {
    color: 'textFooter',
    fontSize: 16,
    mb: 16
  }
};

// Container Const
const containerConst = {
  mx: 'auto',
  px: 15
};

// Variants
const variants = {
  body: {
  },

  header: {
  },

  // Card Variant
  card: {
  },

  // Row / Box / Col Variant
  box: {
  },
  // Row Variant
  row: {
    mx: -16,
    flexWrap: 'wrap',
    center: {
      alignItems: 'center'
    }
  },
  col: {
    px: 16,
    width: '100%',
    position: 'relative',
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  },

  // Container Variant
  container: {
    maxWidth: ['100%', '100%', '1140px'],
    ...containerConst,
    fluid: {
      maxWidth: '100%',
      px: 16
    }
  },

  // Form Variant
  form: {
  },

  // link Variant
  link: {
    backgroundColor: 'transparent',
    color: 'primaryText',
  },

  // Dropdown Variants
  dropdown: {
  }
};

const theme = {
  colors,
  shadows,
  maxWidths,
  buttons,
  borders,
  fontWeights,
  space,
  text,
  variants
};

export default theme;

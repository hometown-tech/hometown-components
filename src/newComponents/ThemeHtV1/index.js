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
  primaryIcon: '#000',
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
  textFooter: '#1d1d1d',
  inputBorder: 'rgba(68, 68, 68, 0.5)',
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
  dropdown: '1px solid #dddddda1',
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
  fontSize: 14,
  padding: '10px 15px',
  fontWeight: 'medium',
  textTransform: 'uppercase',
  textAlign: 'center',
  borderRadius: 0,
  '&:hover': {}
};

const buttonLargeConst = {
  height: 48,
  fontSize: 18,
  fontFamily: 'medium',
  px: 30,
  py: 10,
  textAlign: 'center',
  borderRadius: 0
};

const linkConst = {
  borderRadius: 0,
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
    ...buttonConst,
    large: {
      backgroundColor: 'primary',
      color: 'white',
      ...buttonLargeConst
    }
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
    color: 'textPrimary'
  },
};

// Text Variant
const text = {
  xSmall: {
    fontSize: 12
  },
  xSmallSecondary: {
    fontSize: 12,
    color: 'textSecondary'
  },
  small: {
    fontSize: 14
  },
  smallSecondary: {
    fontSize: 14,
    color: 'textSecondary'
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
  headerLabel: {
    color: 'black',
    fontSize: 14,
  },
  heading: {
    color: 'heading',
    fontSize: 24,
    fontFamily: 'medium'
  },
  largeHeading: {
    color: 'heading',
    fontSize: 36,
    fontFamily: 'medium'
  },
  uspTitle: {
    fontFamily: 'regular',
    fontSize: 16,
    lineHeight: 1.4,
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  catSliderTitle: {
    fontSize: 22,
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
  },
  inputFieldLabel: {
    fontSize: 14,
    color: 'textPrimary',
    fontWeight: 'medium'
  },
  menu: {
    fontSize: 16,
    fontFamily: 'medium',
    color: 'menuItem',
    px: 10,
    py: 10,
    whiteSpace: 'nowrap',
    position: 'relative'
  },
  menuNew: {
    width: 32,
    position: 'absolute',
    top: 2,
    right: 0,
    bg: 'primary',
    borderRadius: 10,
    color: 'white',
    fontSize: 9,
    p: '4px 5px 2px',
    margin: 0,
    lineHeight: 1,
  }
};

// Container Const
const containerConst = {
  mx: 'auto',
  px: 15
};

// Col Const
const colConst = {
  width: '100%',
  position: 'relative',
  px: 16,
};

// Variants
const variants = {
  body: {
  },

  header: {
  },

  // Card Variant
  card: {
    inputFieldGroup: {
      my: 8
    },
  },

  // Row / Box / Col Variant
  box: {
  },
  row: {
    mx: -16,
    flexWrap: 'wrap',
    alignCenter: {
      alignItems: 'center'
    },
    alignRight: {
      alignItems: 'flex-end'
    },
    alignLeft: {
      alignItems: 'flex-start'
    },
    justifyCenter: {
      justifyContent: 'center'
    },
    contentCenter: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    nav: {
      width: '100%',
      height: 46,
      mx: -10,
      whiteSpace: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  col: {
    ...colConst,
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
  },
  'col-1': {
    ...colConst,
    flexBasis: '8.333333%',
    maxWidth: '8.333333%'
  },
  'col-2': {
    ...colConst,
    flexBasis: '16.666667%',
    maxWidth: '16.666667%'
  },
  'col-3': {
    ...colConst,
    flexBasis: '25%',
    maxWidth: '25%'
  },
  'col-4': {
    ...colConst,
    flexBasis: '33.333333%',
    maxWidth: '33.333333%'
  },
  'col-5': {
    ...colConst,
    flexBasis: '41.666667%',
    maxWidth: '41.666667%'
  },
  'col-6': {
    ...colConst,
    flexBasis: '50%',
    maxWidth: '50%'
  },
  'col-7': {
    ...colConst,
    flexBasis: '58.333333%',
    maxWidth: '58.333333%'
  },
  'col-8': {
    ...colConst,
    flexBasis: '66.666667%',
    maxWidth: '66.666667%'
  },
  'col-9': {
    ...colConst,
    flexBasis: '75%',
    maxWidth: '75%'
  },
  'col-10': {
    ...colConst,
    flexBasis: '83.333333%',
    maxWidth: '83.333333%'
  },
  'col-11': {
    ...colConst,
    flexBasis: '83.333333%',
    maxWidth: '83.333333%'
  },
  'col-12': {
    ...colConst,
    flexBasis: '100%',
    maxWidth: '100%'
  },

  // Container Variant
  container: {
    maxWidth: ['100%', '100%', '1180px'],
    ...containerConst,
    fluid: {
      maxWidth: '100%',
      px: 16
    }
  },

  // Grid Variant
  maronryGridItem: {
    display: 'inline-block',
    m: '10px 0',
    width: '100%',
  },

  // Form Variant
  form: {
  },

  // Input Variant
  input: {
    color: 'textSecondary',
    border: 0,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'inputBorder',
    py: 8
  },

  // link Variant
  link: {
    backgroundColor: 'transparent',
    color: 'textPrimary',
  },

  // Dropdown Variants
  dropdown: {
  },

  // Image variants
  image: {
    width: '100%',
    fluid: {
      width: '100%',
    },
    logoHomeTown: {
      position: 'absolute',
      bottom: '0',
      left: '0',
    },
    logoDuracucine: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      bg: 'white'
    },
    logoWrapper: {
      display: 'inline-block',
      height: '42px',
    }
  },

  // Section variants
  section: {
    primary: {
      my: 50,
      position: 'relative'
    },
    catSliderItem: {
      padding: '0 12px',
      overflow: 'hidden',
      '&:hover': {
        transform: 'scale(1.042)',
        filter: 'grayscale(100%)',
        transition: '1s',
      },
    },
    menuContainer: {
      position: 'sticky',
      top: '0',
      zIndex: '10',
      background: 'white',
      height: '116px',
    },
    wishListCount: {
      position: 'absolute',
      top: '-6px',
      right: '-9px',
      backgroundColor: 'primary',
      color: 'white',
      padding: '0px',
      fontSize: '12px',
      width: '18px',
      textAlign: 'center',
      height: '18px',
      lineHeight: '1.5',
      borderRadius: '100%'
    },
  },

  li: {
    listStyle: 'none'
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

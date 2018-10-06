import Typography from 'typography'

const typography = new Typography({
  title: 'Ddeus',
  baseFontSize: '16px',
  baseLineHeight: 1.618,
  headerFontFamily: [
    'Amatic SC',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    'Amatic SC',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  googleFonts: [
    {
      name: 'Amatic SC',
      styles: ['700'],
    },
    {
      name: 'Amatic SC',
      styles: ['400'],
    },
  ],
  scaleRatio: 3.998,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography

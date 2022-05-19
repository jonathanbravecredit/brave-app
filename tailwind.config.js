const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
// to remove warnings until colors fully removed from tailwind
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    colors: {
      ...colors,
      green: colors.emerald,
      yellow: colors.amber,
      purple: colors.violet,
      current: 'currentColor',
      'brave-magenta': '#D714DB',
      'brave-blurple': '#222C9D',
      'brave-safe': '#4BD269',
      'brave-critical': '#E93C25',
      'brave-semicritical': '#F56700',
      'brave-danger': '#F9A21F',
      'brave-normal': '#BBD904',
      'lt-gray': '#DADADA',
      'md-gray': '#4F4F4F',
      'dk-gray': '#333333',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'brave-magenta': '#D714DB',
      'brave-blurple': '#222C9D',
      'brave-safe': '#4BD269',
      'brave-critical': '#E93C25',
      'brave-semicritical': '#F56700',
      'brave-lusitan-blue': '#ecf8fa',
      'brave-danger': '#F9A21F',
      'brave-normal': '#BBD904',
      'lt-gray': '#DADADA',
      'md-gray': '#4F4F4F',
      'dk-gray': '#333333',
    }),
    textColor: (theme) => theme('colors'),
    textColor: {
      ...colors,
      'brave-magenta': '#D714DB',
      'brave-blurple': '#222C9D',
      'brave-safe': '#4BD269',
      'brave-critical': '#E93C25',
      'brave-semicritical': '#F56700',
      'brave-danger': '#F9A21F',
      'brave-normal': '#BBD904',
      'lt-gray': '#DADADA',
      'md-gray': '#4F4F4F',
      'dk-gray': '#333333',
      'link-blue': '#0645AD',
    },
    extend: {
      rotate: {
        45: '45deg',
      },
      margin: {
        '-5': '-1.25rem',
        6: '1.5rem',
        '0-percent': '0%',
        '5-percent': '5%',
        '10-percent': '10%',
        '20-percent': '20%',
        '30-percent': '30%',
        '40-percent': '40%',
        '50-percent': '50%',
        '60-percent': '60%',
        '70-percent': '70%',
        '80-percent': '80%',
        '90-percent': '90%',
        '100-percent': '100%',
      },
      boxShadow: {
        'upper-shadow': '0px -25px 53px -42px #1b1b1b',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        headings: ['Biryani', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        2.5: '0.625rem',
        3.5: '0.875rem',
        'little-card-icon': '6.67px',
        55: '55rem',
      },
      opacity: {
        80: '.8',
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px',
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
      },
      maxHeight: {
        '860-px': '860px',
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px',
      },
      minWidth: {
        '140-px': '140px',
        '320-px': '320px',
        48: '12rem',
      },
      backgroundSize: {
        full: '100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, theme }) {
      const screens = theme('screens', {});
      addComponents([
        {
          '.container': { width: '100%' },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            '.container': {
              'max-width': '640px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            '.container': {
              'max-width': '768px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            '.container': {
              'max-width': '1024px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            '.container': {
              'max-width': '1280px',
            },
          },
        },
        {
          [`@media (min-width: ${screens['2xl']})`]: {
            '.container': {
              'max-width': '1280px',
            },
          },
        },
      ]);
    }),
  ],
};

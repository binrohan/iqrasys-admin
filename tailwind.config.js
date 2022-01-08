module.exports = {
  theme: {
    screens: {
      'sm': '600px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px'
    },
    colors: {
      'transparent': 'transparent',
      tools: '#201F1E',
      body: '#201F1E',
      card: '#252423',
      text: '#C6C5C5',
      'text-dark': 'rgba(255, 255, 255, 0.57)',
      brand: '#f08321',
      'brand-light': '#f39a4aeb',
      'brand-dark': '#d76600eb'
    },
    fontFamily: {

    },
    extend: {
      spacing: {

      },
      borderRadius: {
        norm: '0.25rem'
      }
    }
  },

  mode: 'jit',
  purge: {
    mode: 'layers',
    enabled: true,   // This fixed it for me
    layers: [],
    content: ['./src/*.html'],
  },
  
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

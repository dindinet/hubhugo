module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: require('./purge.config.js'),
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
      },
      fontFamily: {
        'brand': ['Verdana','MuseoModerno', 'ui-sans']
      }
    }
  },
};

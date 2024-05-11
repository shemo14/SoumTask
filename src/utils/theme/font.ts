// variable contain all fonts will be used in the project to provide auto complete when selecting fonts
const fonts = {
  Roboto: {
    Roboto_Light: 'Roboto_Light',
    Roboto_Regular: 'Roboto_Regular',
    Roboto_Bold: 'Roboto_Bold',
    Roboto_Italic: 'Roboto_Italic',
  },
};

const fontSizes: any = {
  h1: {
    fontSize: 24,
    lineHeight: 28,
  },
  h2: {
    fontSize: 22,
    lineHeight: 26,
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
  },
  h4: {
    fontSize: 16,
    lineHeight: 22,
  },
  h5: {
    fontSize: 14,
    lineHeight: 20,
  },
  h6: {
    fontSize: 12,
    lineHeight: 18,
  },
  p1: {
    fontSize: 20,
    lineHeight: 26,
  },
  p2: {
    fontSize: 18,
    lineHeight: 24,
  },
  p3: {
    fontSize: 16,
    lineHeight: 22,
  },
  p4: {
    fontSize: 15,
    lineHeight: 20,
  },
  p5: {
    fontSize: 14,
    lineHeight: 20,
  },
  p6: {
    fontSize: 13,
    lineHeight: 18,
  },
  p7: {
    fontSize: 15,
    lineHeight: 20,
  },
  p8: {
    fontSize: 14,
    lineHeight: 20,
  },
  p9: {
    fontSize: 13,
    lineHeight: 18,
  },
  p10: {
    fontSize: 11,
    lineHeight: 16,
  },
  i1: {
    fontSize: 13,
    lineHeight: 17,
  },
  i2: {
    fontSize: 12,
    lineHeight: 16,
  },
};

const fontFamilyCreator = (char: string, number: number) => {
  let fontFamily = fonts.Roboto.Roboto_Regular;

  if (char === 'h' && number <= 4) {
    fontFamily = fonts.Roboto.Roboto_Bold;
  } else if (char === 'h') {
    fontFamily = fonts.Roboto.Roboto_Bold;
  } else if (char === 'p' && number <= 6) {
    fontFamily = fonts.Roboto.Roboto_Regular;
  } else if (char === 'i') {
    fontFamily = fonts.Roboto.Roboto_Italic;
  }

  return fontFamily;
};

const fontCreator = (type?: string) => {
  if (!type || !fontSizes[type]) {
    return {
      fontFamily: fonts.Roboto.Roboto_Regular,
      fontSize: 14,
      lineHeight: 16,
      paddingTop: 0,
    };
  }

  const firstChar = type?.charAt(0);
  const lastChars = type?.slice(1);
  const numberType = parseInt(lastChars, 10) || 0;
  const {fontSize, lineHeight} = fontSizes[type];
  const fontFamily = fontFamilyCreator(firstChar, numberType);

  return {fontSize, fontFamily, lineHeight, paddingTop: 0};
};

export {fonts, fontCreator, fontSizes};

import {Dimensions} from 'react-native';

export const fonts_Family = {
  UrbanistBold: 'Urbanist-Bold',
  UrbanistThin: 'Urbanist-Thin',
  UrbanistLight: 'Urbanist-Light',
  UrbanistRegular: 'Urbanist-Regular',
  UrbanistMedium: 'Urbanist-Medium',
  UrbanistSemiBold: 'Urbanist-SemiBold',
};

/*
ELEMENT	SIZING	NOTES
Page titles	20sp	
Paragraph text	14sp	
List titles	14sp	Show importance using medium weight
List item titles,
Important text snippets	16sp	
Secondary text,
Captions	14sp	Use lighter color to show lowered importance
Buttons,
Tabs	14sp	Medium weight
Text inputs	16sp	
*/
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const fonts_Size = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  body: 16,
  medium: 14,
  small: 12,
};

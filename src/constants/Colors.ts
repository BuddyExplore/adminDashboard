/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// White : #FFFFFF
// Dark Blue: #0078A1
// Light Blue: #70D6E3
// Yellow: #D7A93B
// Beige: #F7E4CA
// Green: #4B6D4F
// Black : #000000

const tintColorLight = '#0078A1';
const tintColorDark = '#fff';
const primary = '#0078A1';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  PRIMARY:'#0078A1',  //dark blue
  SECOND:'#4B6D4F', //green
  THIRD:'#D7A93B',  //yellow
  FOURTH:'#70D6E3', //light blue
  FIFTH:'#F7E4CA'  //beige
};

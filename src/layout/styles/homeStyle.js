import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  kbColor,
  mainBg,
  bgLiter,
  textLite,
  textDark,
  borderColor
} from './colorVariables.js';

export const home = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    backgroundColor: kbColor,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: mainBg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  contentTitle: {
    marginTop: 25,
    marginBottom: 15,
    width: '100%'
  },
  contentTitleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: textDark
  },
  categoriesHolder: {
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  category: {
    // flex: 1,
    width: 300,
    height: 100,
    borderRadius: 10,
    flexBasis: 130,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: bgLiter,
    borderColor: borderColor,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    color: textLite,
    fontSize: 20
  },
  footer: {
    height: 70,
    backgroundColor: kbColor
  }
});

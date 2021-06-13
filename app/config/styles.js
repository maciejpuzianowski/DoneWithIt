import { Platform } from 'react-native';
import colors from './colors'

export default {
    colors,
    text:{
        color: colors.dark,
    ...Platform.select({
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
    }),
    }
}
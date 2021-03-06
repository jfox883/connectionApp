import { StyleSheet, Platform, StatusBar } from "react-native";

import SIZES from "./sizes";
import FONTS from "./fonts";

const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    heading_1: {
        paddingTop: SIZES.padding * 2,
        paddingBottom: SIZES.padding,
        ...FONTS.h2
    },
    heading_2: {
        margin: SIZES.padding,
        ...FONTS.h3
    },
    bodyTitle: {
        ...FONTS.body3
    },
    bodyText: {
        ...FONTS.bo
    }
})

export default GLOBAL_STYLES;
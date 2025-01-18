import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { FAMILIES,SIZES,SPACING, WEIGHTS } from "./fonts";

export const GST =  StyleSheet.create({
    title: {
        fontSize : SIZES.title,
        fontFamily: FAMILIES.title_popins,
        color: COLORS.title_primary,
        fontWeight: WEIGHTS.title
    }
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DS_Color_Palette() {
    return (
        <View style={styles.dS_Color_PaletteContainer}>
            <Text style={styles.colorSystem}>
                {`Color System`}
            </Text>
            <Text style={styles.themonographpalettedrawsfromarchitecturalmaterialscarboncopperandstoneDarksurfacescreategravitasPaperwhitesbreatheCopperaccentsmarkmomentsofsignificance}>
                {`The monograph palette draws from architectural materials — carbon, copper, and stone. Dark surfaces create gravitas. Paper whites breathe. Copper accents mark moments of significance.`}
            </Text>
            <Text style={styles.pRIMARY}>
                {`PRIMARY`}
            </Text>
            <View style={styles.swatch_Row_PRIMARY}>
                <View style={styles.swatch_Near_Black}>
                    <View style={styles.color}/>
                    <Text style={styles.nearBlack}>
                        {`Near Black`}
                    </Text>
                    <Text style={styles._0F0F10}>
                        {`#0F0F10`}
                    </Text>
                </View>
                <View style={styles.swatch_Warm_White}>
                    <View style={styles._color}/>
                    <Text style={styles.warmWhite}>
                        {`Warm White`}
                    </Text>
                    <Text style={styles.f5F2ED}>
                        {`#F5F2ED`}
                    </Text>
                </View>
                <View style={styles.swatch_Paper}>
                    <View style={styles.__color}/>
                    <Text style={styles.paper}>
                        {`Paper`}
                    </Text>
                    <Text style={styles.fAF8F5}>
                        {`#FAF8F5`}
                    </Text>
                </View>
            </View>
            <Text style={styles.aCCENT}>
                {`ACCENT`}
            </Text>
            <View style={styles.swatch_Row_ACCENT}>
                <View style={styles.swatch_Copper}>
                    <View style={styles.___color}/>
                    <Text style={styles.copper}>
                        {`Copper`}
                    </Text>
                    <Text style={styles.a6825E}>
                        {`#A6825E`}
                    </Text>
                </View>
                <View style={styles.swatch_Copper_Light}>
                    <View style={styles.____color}/>
                    <Text style={styles.copperLight}>
                        {`Copper Light`}
                    </Text>
                    <Text style={styles.c8A882}>
                        {`#C8A882`}
                    </Text>
                </View>
            </View>
            <Text style={styles.nEUTRAL}>
                {`NEUTRAL`}
            </Text>
            <View style={styles.swatch_Row_NEUTRAL}>
                <View style={styles.swatch_Charcoal}>
                    <View style={styles._____color}/>
                    <Text style={styles.charcoal}>
                        {`Charcoal`}
                    </Text>
                    <Text style={styles._1A1A1A}>
                        {`#1A1A1A`}
                    </Text>
                </View>
                <View style={styles.swatch_Dark_Gray}>
                    <View style={styles.______color}/>
                    <Text style={styles.darkGray}>
                        {`Dark Gray`}
                    </Text>
                    <Text style={styles._2A2A2A}>
                        {`#2A2A2A`}
                    </Text>
                </View>
                <View style={styles.swatch_Mid_Gray}>
                    <View style={styles._______color}/>
                    <Text style={styles.midGray}>
                        {`Mid Gray`}
                    </Text>
                    <Text style={styles._6B6B6B}>
                        {`#6B6B6B`}
                    </Text>
                </View>
                <View style={styles.swatch_Light_Gray}>
                    <View style={styles.________color}/>
                    <Text style={styles.lightGray}>
                        {`Light Gray`}
                    </Text>
                    <Text style={styles.e5E2DA}>
                        {`#E5E2DA`}
                    </Text>
                </View>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    dS_Color_PaletteContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 48,
        padding: 80
    },
    colorSystem: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(15, 15, 16, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    themonographpalettedrawsfromarchitecturalmaterialscarboncopperandstoneDarksurfacescreategravitasPaperwhitesbreatheCopperaccentsmarkmomentsofsignificance: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: 300,
        lineHeight: "28.90000081062317px"
    },
    pRIMARY: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    swatch_Row_PRIMARY: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 24
    },
    swatch_Near_Black: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 4
    },
    nearBlack: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    _0F0F10: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    swatch_Warm_White: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        borderStyle: "solid",
        backgroundColor: "rgba(245, 242, 237, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 226, 218, 1)",
        borderRadius: 4
    },
    warmWhite: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    f5F2ED: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    swatch_Paper: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    __color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        borderStyle: "solid",
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 226, 218, 1)",
        borderRadius: 4
    },
    paper: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    fAF8F5: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    aCCENT: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    swatch_Row_ACCENT: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 24
    },
    swatch_Copper: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ___color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 4
    },
    copper: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    a6825E: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    swatch_Copper_Light: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ____color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        borderStyle: "solid",
        backgroundColor: "rgba(200, 168, 130, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 226, 218, 1)",
        borderRadius: 4
    },
    copperLight: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    c8A882: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    nEUTRAL: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    swatch_Row_NEUTRAL: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 24
    },
    swatch_Charcoal: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _____color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        backgroundColor: "rgba(26, 26, 26, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 4
    },
    charcoal: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    _1A1A1A: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    swatch_Dark_Gray: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ______color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        backgroundColor: "rgba(42, 42, 42, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 4
    },
    darkGray: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    _2A2A2A: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    swatch_Mid_Gray: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _______color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        backgroundColor: "rgba(107, 107, 107, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 4
    },
    midGray: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    _6B6B6B: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    },
    swatch_Light_Gray: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ________color: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 80,
        borderStyle: "solid",
        backgroundColor: "rgba(229, 226, 218, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderWidth: 1,
        borderColor: "rgba(229, 226, 218, 1)",
        borderRadius: 4
    },
    lightGray: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500
    },
    e5E2DA: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400
    }
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DS_Spacing() {
    return (
        <View style={styles.dS_SpacingContainer}>
            <Text style={styles.spacingScale}>
                {`Spacing Scale`}
            </Text>
            <Text style={styles.pxbaseunitThescaleprogressesthrougharchitecturalintervalsintimate416structural2464monumental96256Silencebetweenscenesusesthemonumentalrange}>
                {`8px base unit. The scale progresses through architectural intervals — intimate (4–16), structural (24–64), monumental (96–256). Silence between scenes uses the monumental range.`}
            </Text>
            <View style={styles.spacing_Samples}>
                <View style={styles.space_2xs}>
                    <View style={styles.bar}/>
                    <Text style={styles.px2xs}>
                        {`4px\n2xs`}
                    </Text>
                </View>
                <View style={styles.space_xs}>
                    <View style={styles._bar}/>
                    <Text style={styles.pxxs}>
                        {`8px\nxs`}
                    </Text>
                </View>
                <View style={styles.space_sm}>
                    <View style={styles.__bar}/>
                    <Text style={styles.pxsm}>
                        {`16px\nsm`}
                    </Text>
                </View>
                <View style={styles.space_md}>
                    <View style={styles.___bar}/>
                    <Text style={styles.pxmd}>
                        {`24px\nmd`}
                    </Text>
                </View>
                <View style={styles.space_lg}>
                    <View style={styles.____bar}/>
                    <Text style={styles.pxlg}>
                        {`32px\nlg`}
                    </Text>
                </View>
                <View style={styles.space_xl}>
                    <View style={styles._____bar}/>
                    <Text style={styles.pxxl}>
                        {`48px\nxl`}
                    </Text>
                </View>
                <View style={styles.space_2xl}>
                    <View style={styles.______bar}/>
                    <Text style={styles.px2xl}>
                        {`64px\n2xl`}
                    </Text>
                </View>
                <View style={styles.space_3xl}>
                    <View style={styles._______bar}/>
                    <Text style={styles.px3xl}>
                        {`96px\n3xl`}
                    </Text>
                </View>
                <View style={styles.space_4xl}>
                    <View style={styles.________bar}/>
                    <Text style={styles.px4xl}>
                        {`128px\n4xl`}
                    </Text>
                </View>
                <View style={styles.space_5xl}>
                    <View style={styles._________bar}/>
                    <Text style={styles.px5xl}>
                        {`192px\n5xl`}
                    </Text>
                </View>
                <View style={styles.space_6xl}>
                    <View style={styles.__________bar}/>
                    <Text style={styles.px6xl}>
                        {`256px\n6xl`}
                    </Text>
                </View>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    dS_SpacingContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32,
        padding: 80
    },
    spacingScale: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(15, 15, 16, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    pxbaseunitThescaleprogressesthrougharchitecturalintervalsintimate416structural2464monumental96256Silencebetweenscenesusesthemonumentalrange: {
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
    spacing_Samples: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 16
    },
    space_2xs: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    bar: {
        position: "relative",
        flexShrink: 0,
        height: 4,
        width: 4,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    px2xs: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_xs: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _bar: {
        position: "relative",
        flexShrink: 0,
        height: 8,
        width: 8,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    pxxs: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_sm: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    __bar: {
        position: "relative",
        flexShrink: 0,
        height: 16,
        width: 16,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    pxsm: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_md: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ___bar: {
        position: "relative",
        flexShrink: 0,
        height: 24,
        width: 24,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    pxmd: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_lg: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ____bar: {
        position: "relative",
        flexShrink: 0,
        height: 32,
        width: 32,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    pxlg: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_xl: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _____bar: {
        position: "relative",
        flexShrink: 0,
        height: 48,
        width: 48,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    pxxl: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_2xl: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ______bar: {
        position: "relative",
        flexShrink: 0,
        height: 64,
        width: 64,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    px2xl: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_3xl: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _______bar: {
        position: "relative",
        flexShrink: 0,
        height: 96,
        width: 80,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    px3xl: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_4xl: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ________bar: {
        position: "relative",
        flexShrink: 0,
        height: 120,
        width: 80,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    px4xl: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_5xl: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _________bar: {
        position: "relative",
        flexShrink: 0,
        height: 120,
        width: 80,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    px5xl: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    },
    space_6xl: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    __________bar: {
        position: "relative",
        flexShrink: 0,
        height: 120,
        width: 80,
        backgroundColor: "rgba(166, 130, 94, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    px6xl: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    }
});
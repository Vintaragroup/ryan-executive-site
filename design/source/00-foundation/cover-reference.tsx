import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cover() {
    return (
        <View style={styles.coverContainer}>
            <View style={styles.content}>
                <View style={styles.divider_Top}/>
                <Text style={styles.ryanMorrow}>
                    {`Ryan Morrow`}
                </Text>
                <Text style={styles.theMonograph}>
                    {`The Monograph`}
                </Text>
                <View style={styles.divider_Bottom}/>
                <Text style={styles.pRODUCTIONFILEV10JULY2026}>
                    {`PRODUCTION FILE  ·  V1.0  ·  JULY 2026`}
                </Text>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    coverContainer: {
        position: "relative",
        flexShrink: 0,
        height: 900,
        width: 1440,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    content: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 32
    },
    divider_Top: {
        position: "relative",
        flexShrink: 0,
        height: 1,
        width: 120,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    ryanMorrow: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 72,
        fontWeight: 400,
        letterSpacing: "-1.5px"
    },
    theMonograph: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: 300,
        letterSpacing: "8px"
    },
    divider_Bottom: {
        position: "relative",
        flexShrink: 0,
        height: 1,
        width: 120,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    pRODUCTIONFILEV10JULY2026: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    }
});
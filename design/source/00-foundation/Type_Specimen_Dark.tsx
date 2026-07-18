import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Type_Specimen_Dark() {
    return (
        <View style={styles.type_Specimen_DarkContainer}>
            <Text style={styles.typographyonDarkSurfaces}>
                {`Typography on Dark Surfaces`}
            </Text>
            <Text style={styles.ryanMorrow}>
                {`Ryan Morrow`}
            </Text>
            <Text style={styles.ibuildtheoperationalsystemsthattransformambitiousideasintoextraordinaryexperiences}>
                {`I build the operational systems that transform ambitious ideas into extraordinary experiences.`}
            </Text>
            <Text style={styles.thesystemworkswhennobodynoticesthesystem}>
                {`The system works when nobody notices the system.`}
            </Text>
            <Text style={styles.cHAPTER02THEWORK}>
                {`CHAPTER 02 — THE WORK`}
            </Text>
            <Text style={styles.everygreateventhasaninvisiblearchitectSomeonewhotransformsthechaoticdistancebetweenambitionandexecutionintoseamlessseeminglyeffortlessexperience}>
                {`Every great event has an invisible architect. Someone who transforms the chaotic distance between ambition and execution into seamless, seemingly effortless experience.`}
            </Text>
        </View>  )
}

const styles = StyleSheet.create({
    type_Specimen_DarkContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 48,
        padding: 80
    },
    typographyonDarkSurfaces: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    ryanMorrow: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 72,
        fontWeight: 400,
        lineHeight: "108px"
    },
    ibuildtheoperationalsystemsthattransformambitiousideasintoextraordinaryexperiences: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400,
        lineHeight: "60px"
    },
    thesystemworkswhennobodynoticesthesystem: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 28,
        fontWeight: 400,
        lineHeight: "42px"
    },
    cHAPTER02THEWORK: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        lineHeight: "16.5px"
    },
    everygreateventhasaninvisiblearchitectSomeonewhotransformsthechaoticdistancebetweenambitionandexecutionintoseamlessseeminglyeffortlessexperience: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: 400,
        lineHeight: "25.5px"
    }
});
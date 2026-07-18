import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DS_Typography() {
    return (
        <View style={styles.dS_TypographyContainer}>
            <Text style={styles.typography}>
                {`Typography`}
            </Text>
            <Text style={styles.threetypefacesformadeliberatehierarchyInstrumentSerifcarrieseditorialweightandemotionalgravityInterhandlesinformationarchitecturewithquietprecisionIBMPlexMonomarksmetadatatimestampsandsystemiclabels}>
                {`Three typefaces form a deliberate hierarchy. Instrument Serif carries editorial weight and emotional gravity. Inter handles information architecture with quiet precision. IBM Plex Mono marks metadata, timestamps, and systemic labels.`}
            </Text>
            <Text style={styles.dISPLAY}>
                {`DISPLAY`}
            </Text>
            <Text style={styles.displayHero120110}>
                {`Display Hero — 120/110%`}
            </Text>
            <Text style={styles.displayTitle72110}>
                {`Display Title — 72/110%`}
            </Text>
            <Text style={styles.displaySubtitle48120}>
                {`Display Subtitle — 48/120%`}
            </Text>
            <Text style={styles.bODY}>
                {`BODY`}
            </Text>
            <Text style={styles.bodyLarge20170Forleadparagraphsandfeaturedtextpassages}>
                {`Body Large — 20/170% — For lead paragraphs and featured text passages`}
            </Text>
            <Text style={styles.bodyRegular17170Primaryreadingtextoptimizedforlongformnarrativeatsustainedreadingdistances}>
                {`Body Regular — 17/170% — Primary reading text, optimized for long-form narrative at sustained reading distances`}
            </Text>
            <Text style={styles.bodySmall15160Supportingtextcaptionsandsecondaryinformation}>
                {`Body Small — 15/160% — Supporting text, captions, and secondary information`}
            </Text>
            <Text style={styles.mETADATA}>
                {`METADATA`}
            </Text>
            <Text style={styles.mETALABEL111402PXTRACKING}>
                {`META LABEL — 11/140% — 2PX TRACKING`}
            </Text>
            <Text style={styles.metaCaption12150Timestampsattributiontechnicalnotation}>
                {`Meta Caption — 12/150% — Timestamps, attribution, technical notation`}
            </Text>
            <Text style={styles.metaSmall10140Minimalnotation}>
                {`Meta Small — 10/140% — Minimal notation`}
            </Text>
        </View>  )
}

const styles = StyleSheet.create({
    dS_TypographyContainer: {
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
    typography: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(15, 15, 16, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    threetypefacesformadeliberatehierarchyInstrumentSerifcarrieseditorialweightandemotionalgravityInterhandlesinformationarchitecturewithquietprecisionIBMPlexMonomarksmetadatatimestampsandsystemiclabels: {
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
    dISPLAY: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    displayHero120110: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 56,
        fontWeight: 400,
        lineHeight: "84px"
    },
    displayTitle72110: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400,
        lineHeight: "60px"
    },
    displaySubtitle48120: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400,
        lineHeight: "48px"
    },
    bODY: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    bodyLarge20170Forleadparagraphsandfeaturedtextpassages: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "30px"
    },
    bodyRegular17170Primaryreadingtextoptimizedforlongformnarrativeatsustainedreadingdistances: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: 400,
        lineHeight: "25.5px"
    },
    bodySmall15160Supportingtextcaptionsandsecondaryinformation: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: 400,
        lineHeight: "22.5px"
    },
    mETADATA: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    mETALABEL111402PXTRACKING: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400,
        lineHeight: "16.5px"
    },
    metaCaption12150Timestampsattributiontechnicalnotation: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "18px"
    },
    metaSmall10140Minimalnotation: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        lineHeight: "15px"
    }
});
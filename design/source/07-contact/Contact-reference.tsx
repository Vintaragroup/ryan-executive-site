import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Ch7nextconversation() {
    return (
        <View style={styles.ch7nextconversationContainer}>
            <View style={styles.scene_1_Opening}>
                <View style={styles.scene_1_Opening_Image_01}/>
                <Text style={styles.cTAHeading}>
                    {`[CTA Heading]`}
                </Text>
                <Text style={styles._cTAHeading}>
                    {`[CTA Heading]`}
                </Text>
            </View>
            <View style={styles.scene_2_Contact}>
                <View style={styles.contact_Identity}>
                    <Text style={styles.__cTAHeading}>
                        {`[CTA Heading]`}
                    </Text>
                    <Text style={styles.contactDetail}>
                        {`[Contact Detail]`}
                    </Text>
                    <Text style={styles.___cTAHeading}>
                        {`[CTA Heading]`}
                    </Text>
                </View>
                <View style={styles.contact_Metadata}>
                    <View style={styles.contact_Metadata_Block_01}>
                        <Text style={styles._contactDetail}>
                            {`[Contact Detail]`}
                        </Text>
                        <Text style={styles.__contactDetail}>
                            {`[Contact Detail]`}
                        </Text>
                    </View>
                    <View style={styles.contact_Metadata_Block_02}>
                        <Text style={styles.___contactDetail}>
                            {`[Contact Detail]`}
                        </Text>
                        <Text style={styles.____cTAHeading}>
                            {`[CTA Heading]`}
                        </Text>
                    </View>
                    <View style={styles.contact_Metadata_Block_03}>
                        <Text style={styles.____contactDetail}>
                            {`[Contact Detail]`}
                        </Text>
                        <Text style={styles._____cTAHeading}>
                            {`[CTA Heading]`}
                        </Text>
                    </View>
                    <View style={styles.contact_Metadata_Block_04}>
                        <Text style={styles._____contactDetail}>
                            {`[Contact Detail]`}
                        </Text>
                        <Text style={styles.______cTAHeading}>
                            {`[CTA Heading]`}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.contact_Image_01}>
                <View style={styles.divider}/>
                <View style={styles.colophon_Content}>
                    <View style={styles.colophon_Content_Block_01}>
                        <Text style={styles.copyright}>
                            {`[Copyright]`}
                        </Text>
                        <Text style={styles._______cTAHeading}>
                            {`[CTA Heading]`}
                        </Text>
                        <Text style={styles.________cTAHeading}>
                            {`[CTA Heading]`}
                        </Text>
                    </View>
                    <View style={styles.brand_Signature}>
                        <Text style={styles.rM}>
                            {`RM`}
                        </Text>
                    </View>
                </View>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    ch7nextconversationContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(10, 10, 11, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    scene_1_Opening: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 48,
        paddingHorizontal: 80,
        paddingVertical: 240
    },
    scene_1_Opening_Image_01: {
        position: "relative",
        flexShrink: 0,
        width: 80,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    cTAHeading: {
        position: "relative",
        flexShrink: 0,
        width: 800,
        textAlign: "center",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 72,
        fontWeight: 400,
        letterSpacing: "-1.5px",
        lineHeight: "86.40000343322754px"
    },
    _cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "3px"
    },
    scene_2_Contact: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 120,
        paddingHorizontal: 120,
        paddingVertical: 160
    },
    contact_Identity: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24
    },
    __cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    contactDetail: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        letterSpacing: "-2px",
        lineHeight: "80px"
    },
    ___cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Geist",
        fontSize: 20,
        fontWeight: 400
    },
    contact_Metadata: {
        position: "relative",
        flexShrink: 0,
        width: 800,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32
    },
    contact_Metadata_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 16,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    _contactDetail: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    __contactDetail: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 18,
        fontWeight: 600
    },
    contact_Metadata_Block_02: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 16,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    ___contactDetail: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    ____cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 18,
        fontWeight: 600
    },
    contact_Metadata_Block_03: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 16,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    ____contactDetail: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    _____cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 500
    },
    contact_Metadata_Block_04: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 16,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    _____contactDetail: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    ______cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 500
    },
    contact_Image_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 120,
        paddingBottom: 80,
        backgroundColor: "rgba(10, 10, 11, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 80,
        paddingHorizontal: 80
    },
    divider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(38, 38, 40, 1)"
    },
    colophon_Content: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        columnGap: 0
    },
    colophon_Content_Block_01: {
        position: "relative",
        flexShrink: 0,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 12
    },
    copyright: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(179, 179, 179, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    _______cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(179, 179, 179, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.5px"
    },
    ________cTAHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(179, 179, 179, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.5px"
    },
    brand_Signature: {
        position: "relative",
        flexShrink: 0,
        height: 64,
        width: 64,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0,
        borderWidth: 1,
        borderColor: "rgba(166, 130, 94, 1)",
        borderRadius: 32
    },
    rM: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 24,
        fontWeight: 400
    }
});
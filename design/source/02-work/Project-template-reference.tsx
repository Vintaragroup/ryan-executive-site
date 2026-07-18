import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Case_Study_FIFA_World_Cup() {
    return (
        <View style={styles.case_Study_FIFA_World_CupContainer}>
            <View style={styles.section_Hero}>
                <Text style={styles.gLOBALSPORTINGEVENT}>
                    {`2022 · GLOBAL SPORTING EVENT`}
                </Text>
                <Text style={styles.fIFAWorldCup}>
                    {`FIFA World Cup`}
                </Text>
                <Text style={styles.orchestratingoperationalinfrastructurefortheworldslargestsinglesporteventacrossmultiplehostcities}>
                    {`Orchestrating operational infrastructure for the world's largest single-sport event across multiple host cities`}
                </Text>
            </View>
            <View style={styles.section_Hero_Image}/>
            <View style={styles.section_Context}>
                <Text style={styles.tHEBRIEF}>
                    {`THE BRIEF`}
                </Text>
                <Text style={styles.contextHeadingwhatwasthesituation}>
                    {`[Context Heading — what was the situation]`}
                </Text>
                <Text style={styles.projectcontexttwotothreeparagraphsdescribingtheoperationalchallengethescaleoftheengagementandthestakesinvolvedThisshouldreadlikedocumentarynarrationnotacasestudy}>
                    {`[Project context — two to three paragraphs describing the operational challenge, the scale of the engagement, and the stakes involved. This should read like documentary narration, not a case study.]`}
                </Text>
            </View>
            <View style={styles.section_Metrics}>
                <View style={styles.metric}>
                    <Text style={styles._00}>
                        {`[00+]`}
                    </Text>
                    <Text style={styles.mETRICLABEL}>
                        {`[METRIC LABEL]`}
                    </Text>
                </View>
                <View style={styles._metric}>
                    <Text style={styles.__00}>
                        {`[00]`}
                    </Text>
                    <Text style={styles._mETRICLABEL}>
                        {`[METRIC LABEL]`}
                    </Text>
                </View>
                <View style={styles.__metric}>
                    <Text style={styles.___00}>
                        {`[00%]`}
                    </Text>
                    <Text style={styles.__mETRICLABEL}>
                        {`[METRIC LABEL]`}
                    </Text>
                </View>
                <View style={styles.___metric}>
                    <Text style={styles.____00}>
                        {`[00+]`}
                    </Text>
                    <Text style={styles.___mETRICLABEL}>
                        {`[METRIC LABEL]`}
                    </Text>
                </View>
            </View>
            <View style={styles.section_Silence}/>
            <View style={styles.section_Challenge}>
                <Text style={styles.tHECHALLENGE}>
                    {`THE CHALLENGE`}
                </Text>
                <Text style={styles.whatmadethishard}>
                    {`[What made this hard]`}
                </Text>
                <Text style={styles.detaileddescriptionoftheoperationalcomplexitythelogisticalpuzzlethecoordinationchallengethescaleproblemWrittenasnarrativenotbulletpoints}>
                    {`[Detailed description of the operational complexity — the logistical puzzle, the coordination challenge, the scale problem. Written as narrative, not bullet points.]`}
                </Text>
            </View>
            <View style={styles.section_System}>
                <Text style={styles.tHEOPERATIONALSYSTEM}>
                    {`THE OPERATIONAL SYSTEM`}
                </Text>
                <Text style={styles.howthesystemwasbuilt}>
                    {`[How the system was built]`}
                </Text>
                <Text style={styles.descriptionoftheoperationalframeworkteamstructurevendorcoordinationtimelinemanagementandsystemarchitecturedeployedforthisproject}>
                    {`[Description of the operational framework, team structure, vendor coordination, timeline management, and system architecture deployed for this project]`}
                </Text>
            </View>
            <View style={styles.section_Evidence_Gallery}>
                <Text style={styles.eVIDENCE}>
                    {`EVIDENCE`}
                </Text>
                <View style={styles.gallery_Grid}>
                    <View style={styles.gallery_Image_01}/>
                    <View style={styles.gallery_Image_02}/>
                    <View style={styles.gallery_Image_03}/>
                </View>
            </View>
            <View style={styles.section_Reflection}>
                <Text style={styles.myVar}>
                    {`"`}
                </Text>
                <Text style={styles.reflectivequotewhatthisprojectrevealedaboutoperationalleadership}>
                    {`[Reflective quote — what this project revealed about operational leadership]`}
                </Text>
            </View>
            <View style={styles.section_Next_Project}>
                <Text style={styles.nEXTPROJECT}>
                    {`NEXT PROJECT`}
                </Text>
                <Text style={styles.goldenStateWarriors}>
                    {`Golden State Warriors →`}
                </Text>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    case_Study_FIFA_World_CupContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    section_Hero: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 800,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 24
    },
    gLOBALSPORTINGEVENT: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    fIFAWorldCup: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 72,
        fontWeight: 400,
        letterSpacing: "-1.5px"
    },
    orchestratingoperationalinfrastructurefortheworldslargestsinglesporteventacrossmultiplehostcities: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: 300,
        lineHeight: "32.00000047683716px"
    },
    section_Hero_Image: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 800,
        backgroundColor: "rgba(42, 42, 42, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    section_Context: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32,
        paddingHorizontal: 320,
        paddingVertical: 96
    },
    tHEBRIEF: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    contextHeadingwhatwasthesituation: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: "-0.5px",
        lineHeight: "48.00000190734863px"
    },
    projectcontexttwotothreeparagraphsdescribingtheoperationalchallengethescaleoftheengagementandthestakesinvolvedThisshouldreadlikedocumentarynarrationnotacasestudy: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: 400,
        lineHeight: "28.90000081062317px"
    },
    section_Metrics: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 250,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 120,
        paddingVertical: 64
    },
    metric: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 8
    },
    _00: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    mETRICLABEL: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    _metric: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 8
    },
    __00: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    _mETRICLABEL: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    __metric: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 8
    },
    ___00: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    __mETRICLABEL: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    ___metric: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 8
    },
    ____00: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    ___mETRICLABEL: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    section_Silence: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 400,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    section_Challenge: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32,
        paddingHorizontal: 320,
        paddingVertical: 96
    },
    tHECHALLENGE: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    whatmadethishard: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: "-0.5px"
    },
    detaileddescriptionoftheoperationalcomplexitythelogisticalpuzzlethecoordinationchallengethescaleproblemWrittenasnarrativenotbulletpoints: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: 400,
        lineHeight: "28.90000081062317px"
    },
    section_System: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 48,
        paddingHorizontal: 120,
        paddingVertical: 96
    },
    tHEOPERATIONALSYSTEM: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    howthesystemwasbuilt: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400,
        letterSpacing: "-0.5px"
    },
    descriptionoftheoperationalframeworkteamstructurevendorcoordinationtimelinemanagementandsystemarchitecturedeployedforthisproject: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: 300,
        lineHeight: "28.90000081062317px"
    },
    section_Evidence_Gallery: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24,
        paddingHorizontal: 80,
        paddingVertical: 96
    },
    eVIDENCE: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    gallery_Grid: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 24
    },
    gallery_Image_01: {
        position: "relative",
        flexShrink: 0,
        height: 500,
        width: 400,
        backgroundColor: "rgba(42, 42, 42, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    gallery_Image_02: {
        position: "relative",
        flexShrink: 0,
        height: 500,
        width: 400,
        backgroundColor: "rgba(42, 42, 42, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    gallery_Image_03: {
        position: "relative",
        flexShrink: 0,
        height: 500,
        width: 400,
        backgroundColor: "rgba(42, 42, 42, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    section_Reflection: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(15, 15, 16, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 24
    },
    myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 72,
        fontWeight: 400
    },
    reflectivequotewhatthisprojectrevealedaboutoperationalleadership: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(245, 242, 237, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 28,
        fontWeight: 400,
        lineHeight: "42px"
    },
    section_Next_Project: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 16
    },
    nEXTPROJECT: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(107, 107, 107, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    goldenStateWarriors: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400,
        letterSpacing: "-0.30000001192092896px"
    }
});
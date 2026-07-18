import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Rmthemonograph() {
    return (
        <View style={styles.rmthemonographContainer}>
            <View style={styles.sCENE_1_OPENING} source={{ uri: /* dummy image */ 'https://dummyimage.com/1440x1080/000/fff.png' }}>
                <Text style={styles.placeholder_Operational_Meta}>
                    {`[Operational Metadata — Flight Codes / Build Week / Venue ID]`}
                </Text>
                <View style={styles.title_Block}>
                    <Text style={styles.display_Name}>
                        {`[Name — Ryan Morrow]`}
                    </Text>
                    <Text style={styles.display_Role}>
                        {`Executive Marketing Operations · Brand Experience · Operational Transformation`}
                    </Text>
                </View>
            </View>
            <View style={styles.sCENE_2_STATEMENT}>
                <View style={styles.global_Nav}>
                    <Text style={styles.ryanMorrow}>
                        {`Ryan Morrow`}
                    </Text>
                    <View style={styles.block_01}>
                        <Text style={styles.chapter}>
                            {`Chapter`}
                        </Text>
                        <Text style={styles.systems}>
                            {`Systems`}
                        </Text>
                        <Text style={styles.journey}>
                            {`Journey`}
                        </Text>
                        <Text style={styles.contact}>
                            {`Contact`}
                        </Text>
                    </View>
                </View>
                <Text style={styles.statement_Text}>
                    {`[Hero Statement]`}
                </Text>
                <Text style={styles.placeholder_Operational_Stats}>
                    {`[Operational Stats — Cities · Nations · Vendors · Staff · Timeline]`}
                </Text>
            </View>
            <ImageBackground style={styles.sCENE_3_SILENCE} source={{ uri: /* dummy image */ 'https://dummyimage.com/1440x900/000/fff.png' }}/>
            <View style={styles.sCENE_4_NAMES}>
                <View style={styles.section_Label}>
                    <Text style={styles.placeholder_Section_Label}>
                        {`[Section Label]`}
                    </Text>
                </View>
                <View style={styles.client_Names_Grid}>
                    <View style={styles.client_Row_01}>
                        <Text style={styles.placeholder_Client_FIFA}>
                            {`[Client Name — FIFA]`}
                        </Text>
                        <Text style={styles.client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                    <View style={styles.client_Row_02}>
                        <Text style={styles.placeholder_Client_Universal_Studios}>
                            {`[Client Name — Universal Studios]`}
                        </Text>
                        <Text style={styles._client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                    <View style={styles.client_Row_03}>
                        <Text style={styles.placeholder_Client_Golden_State_Warriors}>
                            {`[Client Name — Golden State Warriors]`}
                        </Text>
                        <Text style={styles.__client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                    <View style={styles.client_Row_04}>
                        <Text style={styles.client_Name_01}>
                            {`CAA`}
                        </Text>
                        <Text style={styles.___client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                    <View style={styles.client_Row_05}>
                        <Text style={styles.placeholder_Client_Special_Olympics}>
                            {`[Client Name — Special Olympics]`}
                        </Text>
                        <Text style={styles.____client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                    <View style={styles.client_Row_06}>
                        <Text style={styles._client_Name_01}>
                            {`[Client Name]`}
                        </Text>
                        <Text style={styles._____client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                    <View style={styles.client_Row_07}>
                        <Text style={styles.placeholder_Client_Datavault}>
                            {`[Client Name — Datavault]`}
                        </Text>
                        <Text style={styles.______client_Name_02}>
                            {`[Client Name]`}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.sCENE_5_CHAPTER}>
                <View style={styles.chapter_Intro_Block}>
                    <View style={styles.chapter_Intro_Content}>
                        <Text style={styles.cHAPTER}>
                            {`01 // CHAPTER`}
                        </Text>
                        <Text style={styles.sectionHeading}>
                            {`[Section Heading]`}
                        </Text>
                        <Text style={styles._sectionHeading}>
                            {`[Section Heading]`}
                        </Text>
                    </View>
                </View>
                <ImageBackground style={styles.homepage_Chapter_Preview_Image_01} source={{ uri: /* dummy image */ 'https://dummyimage.com/1440x800/000/fff.png' }}/>
                <View style={styles.case_Study_Featured}>
                    <View style={styles.case_Study_Content_01}>
                        <Text style={styles.body_Text}>
                            {`[Project Context]`}
                        </Text>
                        <Text style={styles._body_Text}>
                            {`[Project Context]`}
                        </Text>
                        <Text style={styles.__body_Text}>
                            {`[Project Context]`}
                        </Text>
                    </View>
                    <View style={styles.case_Study_Content_02}>
                        <View style={styles.content_Block}>
                            <Text style={styles.pROGRAM}>
                                {`PROGRAM`}
                            </Text>
                            <Text style={styles.fIFAWorldCup2026}>
                                {`FIFA World Cup 2026`}
                            </Text>
                        </View>
                        <View style={styles._content_Block}>
                            <Text style={styles.rOLE}>
                                {`ROLE`}
                            </Text>
                            <Text style={styles.executiveProductionOps}>
                                {`Executive Production & Ops`}
                            </Text>
                        </View>
                        <View style={styles.__content_Block}>
                            <Text style={styles.sCALE}>
                                {`SCALE`}
                            </Text>
                            <Text style={styles.cities3Nations}>
                                {`16 Cities · 3 Nations`}
                            </Text>
                        </View>
                        <View style={styles.___content_Block}>
                            <Text style={styles.vENDORS}>
                                {`VENDORS`}
                            </Text>
                            <Text style={styles.corePartners}>
                                {`32+ Core Partners`}
                            </Text>
                        </View>
                        <View style={styles.____content_Block}>
                            <Text style={styles.dURATION}>
                                {`DURATION`}
                            </Text>
                            <Text style={styles.monthRoadmap}>
                                {`48-Month Roadmap`}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.metrics_Row}>
                    <View style={styles.metric_Card_01}>
                        <Text style={styles.metric_Value}>
                            {`16`}
                        </Text>
                        <Text style={styles.metric_Label}>
                            {`[Metric Label]`}
                        </Text>
                    </View>
                    <View style={styles.metric_Card_02}>
                        <Text style={styles._metric_Value}>
                            {`32+`}
                        </Text>
                        <Text style={styles._metric_Label}>
                            {`[Metric Label]`}
                        </Text>
                    </View>
                    <View style={styles.metric_Card_03}>
                        <Text style={styles.__metric_Value}>
                            {`[Metric Value]`}
                        </Text>
                        <Text style={styles.__metric_Label}>
                            {`[Metric Label]`}
                        </Text>
                    </View>
                    <View style={styles.metric_Card_04}>
                        <Text style={styles.___metric_Value}>
                            {`03`}
                        </Text>
                        <Text style={styles.___metric_Label}>
                            {`[Metric Label]`}
                        </Text>
                    </View>
                </View>
                <View style={styles.editorial_Block}>
                    <View style={styles.editorial_Content_01}>
                        <Text style={styles.projectHeading}>
                            {`[Project Heading]`}
                        </Text>
                    </View>
                    <View style={styles.editorial_Content_02}>
                        <View style={styles._block_01}>
                            <View style={styles.__block_01}>
                                <View style={styles.___block_01}>
                                    <Text style={styles.myVar}>
                                        {`01`}
                                    </Text>
                                </View>
                                <Text style={styles.executiveLeadership}>
                                    {`Executive Leadership`}
                                </Text>
                            </View>
                            <View style={styles.image_02}/>
                        </View>
                        <View style={styles.block_02}>
                            <View style={styles.____block_01}>
                                <View style={styles._____block_01}>
                                    <Text style={styles._myVar}>
                                        {`02`}
                                    </Text>
                                </View>
                                <Text style={styles.operationalGovernance}>
                                    {`Operational Governance`}
                                </Text>
                            </View>
                            <View style={styles._image_02}/>
                        </View>
                        <View style={styles.block_03}>
                            <View style={styles.______block_01}>
                                <View style={styles._______block_01}>
                                    <Text style={styles.__myVar}>
                                        {`03`}
                                    </Text>
                                </View>
                                <Text style={styles.productionExcellence}>
                                    {`Production Excellence`}
                                </Text>
                            </View>
                            <View style={styles.__image_02}/>
                        </View>
                        <View style={styles.block_04}>
                            <View style={styles.________block_01}>
                                <View style={styles._________block_01}>
                                    <Text style={styles.___myVar}>
                                        {`04`}
                                    </Text>
                                </View>
                                <Text style={styles.executiveVisibility}>
                                    {`Executive Visibility`}
                                </Text>
                            </View>
                            <View style={styles.___image_02}/>
                        </View>
                        <View style={styles.block_05}>
                            <View style={styles.__________block_01}>
                                <View style={styles.___________block_01}>
                                    <Text style={styles.____myVar}>
                                        {`05`}
                                    </Text>
                                </View>
                                <Text style={styles.decisionConfidence}>
                                    {`Decision Confidence`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.gallery_Section}>
                    <Text style={styles.gallery_Content}>
                        {`[Editorial Copy]`}
                    </Text>
                </View>
                <View style={styles.case_Study_Secondary}>
                    <View style={styles.case_Content_01}>
                        <ImageBackground style={styles.homepage_Chapter_Preview_Image_02} source={{ uri: /* dummy image */ 'https://dummyimage.com/733x560/000/fff.png' }}/>
                        <View style={styles.____________block_01}>
                            <Text style={styles.__sectionHeading}>
                                {`[Section Heading]`}
                            </Text>
                            <Text style={styles.___sectionHeading}>
                                {`[Section Heading]`}
                            </Text>
                            <Text style={styles.lEDINTEGRATION94COMPLETE}>
                                {`LED INTEGRATION: 94% COMPLETE`}
                            </Text>
                            <Text style={styles.vENDORCHECKIN0600LOCAL}>
                                {`VENDOR CHECK-IN: 0600 LOCAL`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.case_Content_02}>
                        <ImageBackground style={styles.homepage_Chapter_Preview_Image_03} source={{ uri: /* dummy image */ 'https://dummyimage.com/515x264/000/fff.png' }}/>
                        <ImageBackground style={styles.homepage_Chapter_Preview_Image_04} source={{ uri: /* dummy image */ 'https://dummyimage.com/515x264/000/fff.png' }}/>
                    </View>
                </View>
            </View>
            <View style={styles.homepage_Hero_Image_05}>
                <View style={styles._section_Label}>
                    <Text style={styles._placeholder_Section_Label}>
                        {`[Section Label]`}
                    </Text>
                </View>
                <View style={styles.oS_Architecture_Grid}>
                    <View style={styles.oS_Module_01}>
                        <View style={styles.module_Content}>
                            <Text style={styles.moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                            <Text style={styles._moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                        </View>
                        <View style={styles._module_Content}/>
                        <View style={styles.__module_Content}>
                            <Text style={styles.moduleDescription}>
                                {`[Module Description]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.oS_Module_02}>
                        <View style={styles.___module_Content}>
                            <Text style={styles.__moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                            <Text style={styles.___moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                        </View>
                        <View style={styles.____module_Content}/>
                        <View style={styles._____module_Content}>
                            <Text style={styles._moduleDescription}>
                                {`[Module Description]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.oS_Module_03}>
                        <View style={styles.______module_Content}>
                            <Text style={styles.____moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                            <Text style={styles._____moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                        </View>
                        <View style={styles._______module_Content}/>
                        <View style={styles.________module_Content}>
                            <Text style={styles.__moduleDescription}>
                                {`[Module Description]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.oS_Module_04}>
                        <View style={styles._________module_Content}>
                            <Text style={styles.______moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                            <Text style={styles._______moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                        </View>
                        <View style={styles.__________module_Content}/>
                        <View style={styles.___________module_Content}>
                            <Text style={styles.___moduleDescription}>
                                {`[Module Description]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.oS_Module_05}>
                        <View style={styles.____________module_Content}>
                            <Text style={styles.________moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                            <Text style={styles._________moduleTitle}>
                                {`[Module Title]`}
                            </Text>
                        </View>
                        <View style={styles._____________module_Content}/>
                        <View style={styles.______________module_Content}>
                            <Text style={styles.____moduleDescription}>
                                {`[Module Description]`}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.sCENE_7_JOURNEY}>
                <View style={styles.__section_Label}>
                    <Text style={styles.__placeholder_Section_Label}>
                        {`[Section Label]`}
                    </Text>
                </View>
                <View style={styles.timeline_Grid}>
                    <View style={styles.timeline_Node_01}>
                        <Text style={styles.node_Year}>
                            {`[Timeline Year]`}
                        </Text>
                        <View style={styles.node_Content}>
                            <View style={styles._____________block_01}/>
                            <View style={styles.____image_02}/>
                        </View>
                        <View style={styles._node_Content}>
                            <Text style={styles._placeholder_Client_Universal_Studios}>
                                {`[Client Name — Universal Studios]`}
                            </Text>
                            <Text style={styles.timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                            <Text style={styles._timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.timeline_Node_02}>
                        <Text style={styles._node_Year}>
                            {`[Timeline Year]`}
                        </Text>
                        <View style={styles.__node_Content}>
                            <View style={styles.______________block_01}/>
                            <View style={styles._____image_02}/>
                        </View>
                        <View style={styles.___node_Content}>
                            <Text style={styles.placeholder_Client_AMP_Energy}>
                                {`[Client Name — AMP Energy]`}
                            </Text>
                            <Text style={styles.__timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                            <Text style={styles.___timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.timeline_Node_03}>
                        <Text style={styles.__node_Year}>
                            {`[Timeline Year]`}
                        </Text>
                        <View style={styles.____node_Content}>
                            <View style={styles._______________block_01}/>
                            <View style={styles.______image_02}/>
                        </View>
                        <View style={styles._____node_Content}>
                            <Text style={styles.cAA}>
                                {`CAA`}
                            </Text>
                            <Text style={styles.____timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                            <Text style={styles._____timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.timeline_Node_04}>
                        <Text style={styles.___node_Year}>
                            {`[Timeline Year]`}
                        </Text>
                        <View style={styles.______node_Content}>
                            <View style={styles.________________block_01}/>
                            <View style={styles._______image_02}/>
                        </View>
                        <View style={styles._______node_Content}>
                            <Text style={styles._placeholder_Client_Golden_State_Warriors}>
                                {`[Client Name — Golden State Warriors]`}
                            </Text>
                            <Text style={styles.______timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                            <Text style={styles._______timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.timeline_Node_05}>
                        <Text style={styles.____node_Year}>
                            {`[Timeline Year]`}
                        </Text>
                        <View style={styles.________node_Content}>
                            <View style={styles._________________block_01}/>
                            <View style={styles.________image_02}/>
                        </View>
                        <View style={styles._________node_Content}>
                            <Text style={styles._placeholder_Client_Special_Olympics}>
                                {`[Client Name — Special Olympics]`}
                            </Text>
                            <Text style={styles.________timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                            <Text style={styles._________timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.timeline_Node_06}>
                        <Text style={styles._____node_Year}>
                            {`[Timeline Year]`}
                        </Text>
                        <View style={styles.__________node_Content}>
                            <View style={styles.__________________block_01}/>
                        </View>
                        <View style={styles.___________node_Content}>
                            <Text style={styles._placeholder_Client_FIFA}>
                                {`[Client Name — FIFA]`}
                            </Text>
                            <Text style={styles.__________timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                            <Text style={styles.___________timelineRole}>
                                {`[Timeline Role]`}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.homepage_Hero_Image_06}>
                <View style={styles.philosophy_Block}>
                    <View style={styles.philosophy_Divider}/>
                    <Text style={styles.philosophy_Quote}>
                        {`[System Description]`}
                    </Text>
                    <Text style={styles.philosophy_Attribution}>
                        {`[System Heading]`}
                    </Text>
                </View>
            </View>
            <View style={styles.sCENE_9_CLOSE}>
                <View style={styles.cTA_Block}>
                    <Text style={styles.cTA_Heading}>
                        {`[System Heading]`}
                    </Text>
                    <View style={styles.cTA_Button}>
                        <Text style={styles.button_Label}>
                            {`[System Heading]`}
                        </Text>
                        <Text style={styles._button_Label}>
                            {`[System Heading]`}
                        </Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer_Content}/>
                    <View style={styles._footer_Content}>
                        <View style={styles.___________________block_01}>
                            <Text style={styles.systemHeading}>
                                {`[System Heading]`}
                            </Text>
                            <Text style={styles._systemHeading}>
                                {`[System Heading]`}
                            </Text>
                            <Text style={styles.__systemHeading}>
                                {`[System Heading]`}
                            </Text>
                        </View>
                        <Text style={styles.___systemHeading}>
                            {`[System Heading]`}
                        </Text>
                    </View>
                </View>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    rmthemonographContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(10, 10, 11, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    sCENE_1_OPENING: {
        position: "relative",
        flexShrink: 0,
        height: 1080,
        width: 1440,
        backgroundColor: "rgba(10, 10, 11, 0.45)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        rowGap: 0,
        padding: 80
    },
    placeholder_Operational_Meta: {
        position: "absolute",
        flexShrink: 0,
        top: 80,
        left: 80,
        width: 330,
        height: 12,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    title_Block: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    display_Name: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    display_Role: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    sCENE_2_STATEMENT: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 80,
        paddingHorizontal: 80,
        paddingVertical: 240
    },
    global_Nav: {
        position: "absolute",
        flexShrink: 0,
        height: 80,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 80,
        paddingVertical: 0
    },
    ryanMorrow: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 24,
        fontWeight: 400
    },
    block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 40
    },
    chapter: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "1.5px"
    },
    systems: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "1.5px"
    },
    journey: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "1.5px"
    },
    contact: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "1.5px"
    },
    statement_Text: {
        position: "relative",
        flexShrink: 0,
        width: 1061,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 110,
        fontWeight: 400,
        letterSpacing: "-4px",
        lineHeight: "104.49999868869781px"
    },
    placeholder_Operational_Stats: {
        position: "relative",
        flexShrink: 0,
        width: 1061,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    sCENE_3_SILENCE: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        height: 900
    },
    sCENE_4_NAMES: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 64,
        paddingHorizontal: 80,
        paddingVertical: 160
    },
    section_Label: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 12
    },
    placeholder_Section_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    client_Names_Grid: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32
    },
    client_Row_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    placeholder_Client_FIFA: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    client_Row_02: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    placeholder_Client_Universal_Studios: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    _client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    client_Row_03: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    placeholder_Client_Golden_State_Warriors: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    __client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    client_Row_04: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    client_Name_01: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    ___client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    client_Row_05: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    placeholder_Client_Special_Olympics: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    ____client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    client_Row_06: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    _client_Name_01: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    _____client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    client_Row_07: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    placeholder_Client_Datavault: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    ______client_Name_02: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "1.5px"
    },
    sCENE_5_CHAPTER: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    chapter_Intro_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 120,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32,
        paddingHorizontal: 80
    },
    chapter_Intro_Content: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 16
    },
    cHAPTER: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    sectionHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400
    },
    _sectionHeading: {
        position: "relative",
        flexShrink: 0,
        width: 900,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "27px"
    },
    homepage_Chapter_Preview_Image_01: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        height: 800
    },
    case_Study_Featured: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 80,
        padding: 80
    },
    case_Study_Content_01: {
        position: "relative",
        flexShrink: 0,
        width: 733,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 40
    },
    body_Text: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "32.00000047683716px"
    },
    _body_Text: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "32.00000047683716px"
    },
    __body_Text: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: "32.00000047683716px"
    },
    case_Study_Content_02: {
        position: "relative",
        flexShrink: 0,
        width: 405,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32
    },
    content_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 4,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    pROGRAM: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    fIFAWorldCup2026: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 14,
        fontWeight: 500
    },
    _content_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 4,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    rOLE: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    executiveProductionOps: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 14,
        fontWeight: 500
    },
    __content_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 4,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    sCALE: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    cities3Nations: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 14,
        fontWeight: 500
    },
    ___content_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 4,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    vENDORS: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    corePartners: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 14,
        fontWeight: 500
    },
    ____content_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 4,
        paddingHorizontal: 0,
        borderColor: "rgba(229, 226, 218, 1)"
    },
    dURATION: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    monthRoadmap: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 14,
        fontWeight: 500
    },
    metrics_Row: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 120,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 32,
        paddingHorizontal: 80
    },
    metric_Card_01: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    metric_Value: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        lineHeight: "80px"
    },
    metric_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    metric_Card_02: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    _metric_Value: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        lineHeight: "80px"
    },
    _metric_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    metric_Card_03: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    __metric_Value: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        lineHeight: "80px"
    },
    __metric_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    metric_Card_04: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    ___metric_Value: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        lineHeight: "80px"
    },
    ___metric_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    editorial_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 80,
        padding: 120
    },
    editorial_Content_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 12
    },
    projectHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    editorial_Content_02: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 0
    },
    _block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 0
    },
    __block_01: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    ___block_01: {
        position: "relative",
        flexShrink: 0,
        height: 48,
        width: 48,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        borderWidth: 1,
        borderColor: "rgba(166, 130, 94, 1)",
        borderRadius: 24
    },
    myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    executiveLeadership: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    image_02: {
        position: "relative",
        flexShrink: 0,
        width: 60,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    block_02: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 0
    },
    ____block_01: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    _____block_01: {
        position: "relative",
        flexShrink: 0,
        height: 48,
        width: 48,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        borderWidth: 1,
        borderColor: "rgba(166, 130, 94, 1)",
        borderRadius: 24
    },
    _myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    operationalGovernance: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    _image_02: {
        position: "relative",
        flexShrink: 0,
        width: 60,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    block_03: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 0
    },
    ______block_01: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    _______block_01: {
        position: "relative",
        flexShrink: 0,
        height: 48,
        width: 48,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        borderWidth: 1,
        borderColor: "rgba(166, 130, 94, 1)",
        borderRadius: 24
    },
    __myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    productionExcellence: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    __image_02: {
        position: "relative",
        flexShrink: 0,
        width: 60,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    block_04: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 0
    },
    ________block_01: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    _________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 48,
        width: 48,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        borderWidth: 1,
        borderColor: "rgba(166, 130, 94, 1)",
        borderRadius: 24
    },
    ___myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    executiveVisibility: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    ___image_02: {
        position: "relative",
        flexShrink: 0,
        width: 60,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    block_05: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 0
    },
    __________block_01: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12
    },
    ___________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 48,
        width: 48,
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        borderWidth: 1,
        borderColor: "rgba(166, 130, 94, 1)",
        borderRadius: 24
    },
    ____myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    decisionConfidence: {
        position: "relative",
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    gallery_Section: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 160,
        paddingBottom: 200,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        columnGap: 0,
        paddingHorizontal: 80
    },
    gallery_Content: {
        position: "relative",
        flexShrink: 0,
        width: 1061,
        textAlign: "center",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400,
        lineHeight: "76.80000305175781px"
    },
    case_Study_Secondary: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 160,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 32,
        paddingHorizontal: 80
    },
    case_Content_01: {
        position: "relative",
        flexShrink: 0,
        height: 560,
        width: 733,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 2
    },
    homepage_Chapter_Preview_Image_02: {
        position: "relative",
        flexShrink: 0,
        width: 733,
        height: 560
    },
    ____________block_01: {
        position: "absolute",
        flexShrink: 0,
        top: 377,
        left: 33,
        width: 240,
        transform: "rotateZ(-1.50deg)",
        backgroundColor: "rgba(245, 237, 216, 1)",
        shadowColor: "rgba(0, 0, 0, 0.18)",
        shadowOffset: {
                width: 2,
                height: 4
            },
        shadowRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 4,
        padding: 12,
        borderRadius: 2
    },
    __sectionHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 7,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    ___sectionHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 7,
        fontWeight: 400
    },
    lEDINTEGRATION94COMPLETE: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 7,
        fontWeight: 400
    },
    vENDORCHECKIN0600LOCAL: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 7,
        fontWeight: 400
    },
    case_Content_02: {
        position: "relative",
        flexShrink: 0,
        width: 515,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32
    },
    homepage_Chapter_Preview_Image_03: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 264
    },
    homepage_Chapter_Preview_Image_04: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 264
    },
    homepage_Hero_Image_05: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(10, 10, 11, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 80,
        padding: 120
    },
    _section_Label: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 12
    },
    _placeholder_Section_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    oS_Architecture_Grid: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 48
    },
    oS_Module_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6
    },
    moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    _moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    _module_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    __module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    moduleDescription: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400
    },
    oS_Module_02: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    ___module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6
    },
    __moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    ___moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    ____module_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _____module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    _moduleDescription: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400
    },
    oS_Module_03: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    ______module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6
    },
    ____moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    _____moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    _______module_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    ________module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    __moduleDescription: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400
    },
    oS_Module_04: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    _________module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6
    },
    ______moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    _______moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    __________module_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    ___________module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ___moduleDescription: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400
    },
    oS_Module_05: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    ____________module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 240,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6
    },
    ________moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    _________moduleTitle: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    _____________module_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    ______________module_Content: {
        position: "relative",
        flexShrink: 0,
        width: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    ____moduleDescription: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 32,
        fontWeight: 400
    },
    sCENE_7_JOURNEY: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 80,
        padding: 120
    },
    __section_Label: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 12
    },
    __placeholder_Section_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    timeline_Grid: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    timeline_Node_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    node_Year: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    node_Content: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0
    },
    _____________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 12,
        width: 12,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        borderRadius: 6
    },
    ____image_02: {
        position: "relative",
        flexShrink: 0,
        width: 1,
        height: 120,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _node_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingTop: 0,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6,
        paddingHorizontal: 0
    },
    _placeholder_Client_Universal_Studios: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400
    },
    timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 16,
        fontWeight: 400
    },
    _timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    timeline_Node_02: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    _node_Year: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    __node_Content: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0
    },
    ______________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 12,
        width: 12,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        borderRadius: 6
    },
    _____image_02: {
        position: "relative",
        flexShrink: 0,
        width: 2,
        height: 120,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    ___node_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingTop: 0,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6,
        paddingHorizontal: 0
    },
    placeholder_Client_AMP_Energy: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400
    },
    __timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 16,
        fontWeight: 400
    },
    ___timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    timeline_Node_03: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    __node_Year: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    ____node_Content: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0
    },
    _______________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 12,
        width: 12,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        borderRadius: 6
    },
    ______image_02: {
        position: "relative",
        flexShrink: 0,
        width: 2,
        height: 120,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _____node_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingTop: 0,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6,
        paddingHorizontal: 0
    },
    cAA: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400
    },
    ____timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 16,
        fontWeight: 400
    },
    _____timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    timeline_Node_04: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    ___node_Year: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    ______node_Content: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0
    },
    ________________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 12,
        width: 12,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        borderRadius: 6
    },
    _______image_02: {
        position: "relative",
        flexShrink: 0,
        width: 3,
        height: 120,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _______node_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingTop: 0,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6,
        paddingHorizontal: 0
    },
    _placeholder_Client_Golden_State_Warriors: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400
    },
    ______timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 16,
        fontWeight: 400
    },
    _______timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    timeline_Node_05: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    ____node_Year: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    ________node_Content: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0
    },
    _________________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 12,
        width: 12,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        borderRadius: 6
    },
    ________image_02: {
        position: "relative",
        flexShrink: 0,
        width: 3,
        height: 120,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _________node_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingTop: 0,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6,
        paddingHorizontal: 0
    },
    _placeholder_Client_Special_Olympics: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400
    },
    ________timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 16,
        fontWeight: 400
    },
    _________timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    timeline_Node_06: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 40
    },
    _____node_Year: {
        position: "relative",
        flexShrink: 0,
        width: 160,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 14,
        fontWeight: 400
    },
    __________node_Content: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 0
    },
    __________________block_01: {
        position: "relative",
        flexShrink: 0,
        height: 12,
        width: 12,
        backgroundColor: "rgba(166, 130, 94, 1)",
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        borderRadius: 6
    },
    ___________node_Content: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        paddingTop: 0,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 6,
        paddingHorizontal: 0
    },
    _placeholder_Client_FIFA: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 40,
        fontWeight: 400
    },
    __________timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 16,
        fontWeight: 400
    },
    ___________timelineRole: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "1.2000000476837158px"
    },
    homepage_Hero_Image_06: {
        position: "relative",
        flexShrink: 0,
        height: 900,
        width: 1440,
        backgroundColor: "rgba(10, 10, 11, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0,
        padding: 80
    },
    philosophy_Block: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 48
    },
    philosophy_Divider: {
        position: "relative",
        flexShrink: 0,
        width: 60,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    philosophy_Quote: {
        position: "relative",
        flexShrink: 0,
        width: 952,
        textAlign: "center",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        lineHeight: "88.00000190734863px"
    },
    philosophy_Attribution: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Geist",
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: "2px"
    },
    sCENE_9_CLOSE: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(249, 247, 242, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 160,
        padding: 80
    },
    cTA_Block: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 40
    },
    cTA_Heading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    },
    cTA_Button: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 12
    },
    button_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 16,
        fontWeight: 600,
        textDecorationLine: "underline"
    },
    _button_Label: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 16,
        fontWeight: 600,
        textDecorationLine: "underline"
    },
    footer: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32
    },
    footer_Content: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _footer_Content: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        columnGap: 0
    },
    ___________________block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 8
    },
    systemHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    _systemHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    __systemHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.800000011920929px"
    },
    ___systemHeading: {
        position: "relative",
        flexShrink: 0,
        textAlign: "right",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    }
});
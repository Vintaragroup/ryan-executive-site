import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function Ch6thinking() {
    return (
        <View style={styles.ch6thinkingContainer}>
            <View style={styles.scene_1_Opening}>
                <Text style={styles.quote}>
                    {`[Quote]`}
                </Text>
                <Text style={styles.philosophyStatement}>
                    {`[Philosophy Statement]`}
                </Text>
                <View style={styles.introlinecontainer}>
                    <Text style={styles.philosophyEssay}>
                        {`[Philosophy Essay]`}
                    </Text>
                </View>
            </View>
            <View style={styles.divider}/>
            <View style={styles.scene_2_Essay_Index}>
                <View style={styles.scene_2_Essay_Index_Block_01}>
                    <Text style={styles._quote}>
                        {`[Quote]`}
                    </Text>
                </View>
                <View style={styles.scene_2_Essay_Index_Block_02}>
                    <View style={styles.essayentry1}>
                        <View style={styles.essayentry1_Block_01}>
                            <Text style={styles.__quote}>
                                {`[Quote]`}
                            </Text>
                            <View style={styles.essayentry1_Block_01_Block_01}>
                                <Text style={styles.___quote}>
                                    {`[Quote]`}
                                </Text>
                                <Text style={styles.myVar}>
                                    {`//`}
                                </Text>
                                <Text style={styles.____quote}>
                                    {`[Quote]`}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles._philosophyStatement}>
                            {`[Philosophy Statement]`}
                        </Text>
                        <View style={styles.copperdivider}/>
                    </View>
                    <View style={styles.essayentry2}>
                        <View style={styles.essayentry2_Block_01}>
                            <Text style={styles._____quote}>
                                {`[Quote]`}
                            </Text>
                            <View style={styles.essayentry2_Block_01_Block_01}>
                                <Text style={styles.______quote}>
                                    {`[Quote]`}
                                </Text>
                                <Text style={styles._myVar}>
                                    {`//`}
                                </Text>
                                <Text style={styles._______quote}>
                                    {`[Quote]`}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.__philosophyStatement}>
                            {`[Philosophy Statement]`}
                        </Text>
                        <View style={styles._copperdivider}/>
                    </View>
                    <View style={styles.essayentry3}>
                        <View style={styles.essayentry3_Block_01}>
                            <Text style={styles.___philosophyStatement}>
                                {`[Philosophy Statement]`}
                            </Text>
                            <View style={styles.essayentry3_Block_01_Block_01}>
                                <Text style={styles.________quote}>
                                    {`[Quote]`}
                                </Text>
                                <Text style={styles.__myVar}>
                                    {`//`}
                                </Text>
                                <Text style={styles._________quote}>
                                    {`[Quote]`}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles._philosophyEssay}>
                            {`[Philosophy Essay]`}
                        </Text>
                        <View style={styles.__copperdivider}/>
                    </View>
                </View>
            </View>
            <View style={styles._divider}/>
            <View style={styles.scene_3_Featured_Essay_Reader}>
                <View style={styles.article_Header}>
                    <View style={styles.article_Header_Block_01}>
                        <Text style={styles.__________quote}>
                            {`[Quote]`}
                        </Text>
                        <Text style={styles.___myVar}>
                            {`•`}
                        </Text>
                        <Text style={styles.___________quote}>
                            {`[Quote]`}
                        </Text>
                    </View>
                    <Text style={styles.____________quote}>
                        {`[Quote]`}
                    </Text>
                    <Text style={styles.__philosophyEssay}>
                        {`[Philosophy Essay]`}
                    </Text>
                    <View style={styles.byline_Block}>
                        <Text style={styles.____philosophyStatement}>
                            {`[Philosophy Statement]`}
                        </Text>
                    </View>
                    <View style={styles.___copperdivider}/>
                </View>
                <View style={styles.reading_Split}>
                    <View style={styles.narrative_Column}>
                        <Text style={styles.___philosophyEssay}>
                            {`[Philosophy Essay]`}
                        </Text>
                        <Text style={styles.____philosophyEssay}>
                            {`[Philosophy Essay]`}
                        </Text>
                        <Text style={styles._____philosophyEssay}>
                            {`[Philosophy Essay]`}
                        </Text>
                        <Text style={styles.______philosophyEssay}>
                            {`[Philosophy Essay]`}
                        </Text>
                    </View>
                    <View style={styles.marginalia_Column}>
                        <View style={styles.marginalia_Column_Block_01}>
                            <Text style={styles._____________quote}>
                                {`[Quote]`}
                            </Text>
                            <Text style={styles._______philosophyEssay}>
                                {`[Philosophy Essay]`}
                            </Text>
                        </View>
                        <View style={styles.marginalia_Column_Block_02}>
                            <Text style={styles.________philosophyEssay}>
                                {`[Philosophy Essay]`}
                            </Text>
                            <Text style={styles.______________quote}>
                                {`[Quote]`}
                            </Text>
                        </View>
                        <View style={styles.marginalia_Column_Block_03}>
                            <ImageBackground style={styles.thinking_Image_01} source={{ uri: /* dummy image */ 'https://dummyimage.com/440x240/000/fff.png' }}/>
                            <Text style={styles._____philosophyStatement}>
                                {`[Philosophy Statement]`}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.pull_Quote_Block}>
                    <View style={styles.pull_Quote_Block_Image_01}/>
                    <Text style={styles._________philosophyEssay}>
                        {`[Philosophy Essay]`}
                    </Text>
                    <Text style={styles._______________quote}>
                        {`[Quote]`}
                    </Text>
                </View>
            </View>
            <View style={styles.scene_4_Transition}>
                <View style={styles.scene_4_Transition_Block_01}>
                    <Text style={styles.________________quote}>
                        {`[Quote]`}
                    </Text>
                    <View style={styles.connectorline}/>
                </View>
                <Text style={styles._________________quote}>
                    {`[Quote]`}
                </Text>
            </View>
        </View>  )
}

const styles = StyleSheet.create({
    ch6thinkingContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(249, 247, 242, 1)",
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
        alignItems: "flex-start",
        rowGap: 32,
        paddingHorizontal: 80,
        paddingVertical: 160
    },
    quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    philosophyStatement: {
        position: "relative",
        flexShrink: 0,
        width: 900,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 96,
        fontWeight: 400,
        letterSpacing: "-3px",
        lineHeight: "91.19999885559082px"
    },
    introlinecontainer: {
        position: "relative",
        flexShrink: 0,
        width: 720,
        paddingTop: 16,
        paddingBottom: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    philosophyEssay: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "28.800000429153442px"
    },
    divider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(229, 226, 218, 1)"
    },
    scene_2_Essay_Index: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 120,
        paddingBottom: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 80
    },
    scene_2_Essay_Index_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 80,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    _quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    scene_2_Essay_Index_Block_02: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 120
    },
    essayentry1: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24
    },
    essayentry1_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    __quote: {
        position: "relative",
        flexShrink: 0,
        width: 720,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        lineHeight: "52.80000114440918px"
    },
    essayentry1_Block_01_Block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 16
    },
    ___quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(140, 140, 140, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    ____quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "1px"
    },
    _philosophyStatement: {
        position: "relative",
        flexShrink: 0,
        width: 800,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 22,
        fontWeight: 400,
        lineHeight: "30.799999475479126px"
    },
    copperdivider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    essayentry2: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24
    },
    essayentry2_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    _____quote: {
        position: "relative",
        flexShrink: 0,
        width: 720,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        lineHeight: "52.80000114440918px"
    },
    essayentry2_Block_01_Block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 16
    },
    ______quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(140, 140, 140, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    _myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    _______quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "1px"
    },
    __philosophyStatement: {
        position: "relative",
        flexShrink: 0,
        width: 800,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 22,
        fontWeight: 400,
        lineHeight: "30.799999475479126px"
    },
    _copperdivider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    essayentry3: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24
    },
    essayentry3_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        columnGap: 0
    },
    ___philosophyStatement: {
        position: "relative",
        flexShrink: 0,
        width: 720,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        lineHeight: "52.80000114440918px"
    },
    essayentry3_Block_01_Block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 16
    },
    ________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(140, 140, 140, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    __myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    _________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "1px"
    },
    _philosophyEssay: {
        position: "relative",
        flexShrink: 0,
        width: 800,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 22,
        fontWeight: 400,
        lineHeight: "30.799999475479126px"
    },
    __copperdivider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _divider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(229, 226, 218, 1)"
    },
    scene_3_Featured_Essay_Reader: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 80,
        paddingHorizontal: 80,
        paddingVertical: 160
    },
    article_Header: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24
    },
    article_Header_Block_01: {
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        columnGap: 16
    },
    __________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    ___myVar: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(140, 140, 140, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    ___________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400
    },
    ____________quote: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 80,
        fontWeight: 400,
        letterSpacing: "-2px",
        lineHeight: "80px"
    },
    __philosophyEssay: {
        position: "relative",
        flexShrink: 0,
        width: 960,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 28,
        fontWeight: 400,
        lineHeight: "36.39999866485596px"
    },
    byline_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 16,
        paddingBottom: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    ____philosophyStatement: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "1px"
    },
    ___copperdivider: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    reading_Split: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 80
    },
    narrative_Column: {
        position: "relative",
        flexShrink: 0,
        width: 760,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32
    },
    ___philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "32.399999141693115px"
    },
    ____philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "32.399999141693115px"
    },
    _____philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "32.399999141693115px"
    },
    ______philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Geist",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "32.399999141693115px"
    },
    marginalia_Column: {
        position: "relative",
        flexShrink: 0,
        width: 440,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 48
    },
    marginalia_Column_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 12
    },
    _____________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "2px"
    },
    _______philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(74, 74, 74, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "19.200000286102295px"
    },
    marginalia_Column_Block_02: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 16,
        paddingVertical: 0,
        borderColor: "rgba(166, 130, 94, 1)"
    },
    ________philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 24,
        fontWeight: 400,
        lineHeight: "33.59999942779541px"
    },
    ______________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(140, 140, 140, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    marginalia_Column_Block_03: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 12
    },
    thinking_Image_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        height: 240
    },
    _____philosophyStatement: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(140, 140, 140, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 10,
        fontWeight: 400
    },
    pull_Quote_Block: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(242, 239, 231, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 24,
        paddingHorizontal: 40,
        paddingVertical: 64
    },
    pull_Quote_Block_Image_01: {
        position: "relative",
        flexShrink: 0,
        width: 40,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _________philosophyEssay: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        lineHeight: "57.60000228881836px"
    },
    _______________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    scene_4_Transition: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(10, 10, 11, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 32,
        padding: 80
    },
    scene_4_Transition_Block_01: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0
    },
    ________________quote: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: "2px"
    },
    connectorline: {
        position: "relative",
        flexShrink: 0,
        width: 800,
        height: 1,
        backgroundColor: "rgba(166, 130, 94, 1)"
    },
    _________________quote: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(245, 245, 245, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 64,
        fontWeight: 400
    }
});
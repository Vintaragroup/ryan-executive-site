import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Variables_Tokens_Reference() {
    return (
        <View style={styles.variables_Tokens_ReferenceContainer}>
            <Text style={styles.variablesDesignTokens}>
                {`Variables & Design Tokens`}
            </Text>
            <Text style={styles.alldesigndecisionsareencodedasFigmavariablesandmappedtoCSScustompropertiesThisensurespixelperfecttranslationfromdesigntocodeVariablesareorganizedintothreecollectionsColorSystemSpacingSystemandBreakpoints}>
                {`All design decisions are encoded as Figma variables and mapped to CSS custom properties. This ensures pixel-perfect translation from design to code. Variables are organized into three collections: Color System, Spacing System, and Breakpoints.`}
            </Text>
            <Text style={styles.cOLORTOKENS}>
                {`COLOR TOKENS`}
            </Text>
            <Text style={styles.primaryNearBlack0F0F10colornearblack}>
                {`Primary/Near Black          #0F0F10    --color-near-black`}
            </Text>
            <Text style={styles.primaryWarmWhiteF5F2EDcolorwarmwhite}>
                {`Primary/Warm White           #F5F2ED    --color-warm-white`}
            </Text>
            <Text style={styles.primaryPaperFAF8F5colorpaper}>
                {`Primary/Paper                #FAF8F5    --color-paper`}
            </Text>
            <Text style={styles.accentCopperA6825Ecolorcopper}>
                {`Accent/Copper                #A6825E    --color-copper`}
            </Text>
            <Text style={styles.accentCopperLightC8A882colorcopperlight}>
                {`Accent/Copper Light          #C8A882    --color-copper-light`}
            </Text>
            <Text style={styles.neutralCharcoal1A1A1Acolorcharcoal}>
                {`Neutral/Charcoal             #1A1A1A    --color-charcoal`}
            </Text>
            <Text style={styles.neutralDarkGray2A2A2Acolordarkgray}>
                {`Neutral/Dark Gray            #2A2A2A    --color-dark-gray`}
            </Text>
            <Text style={styles.neutralMidGray6B6B6Bcolormidgray}>
                {`Neutral/Mid Gray             #6B6B6B    --color-mid-gray`}
            </Text>
            <Text style={styles.neutralLightGrayE5E2DAcolorlightgray}>
                {`Neutral/Light Gray           #E5E2DA    --color-light-gray`}
            </Text>
            <Text style={styles.textPrimary1A1A1Atextprimary}>
                {`Text/Primary                 #1A1A1A    --text-primary`}
            </Text>
            <Text style={styles.textSecondary4A4A4Atextsecondary}>
                {`Text/Secondary               #4A4A4A    --text-secondary`}
            </Text>
            <Text style={styles.textTertiary8A8A8Atexttertiary}>
                {`Text/Tertiary                #8A8A8A    --text-tertiary`}
            </Text>
            <Text style={styles.textInverseF5F2EDtextinverse}>
                {`Text/Inverse                 #F5F2ED    --text-inverse`}
            </Text>
            <Text style={styles.textCopperA6825Etextcopper}>
                {`Text/Copper                  #A6825E    --text-copper`}
            </Text>
            <Text style={styles.surfaceDark0F0F10surfacedark}>
                {`Surface/Dark                 #0F0F10    --surface-dark`}
            </Text>
            <Text style={styles.surfaceCharcoal1A1A1Asurfacecharcoal}>
                {`Surface/Charcoal             #1A1A1A    --surface-charcoal`}
            </Text>
            <Text style={styles.surfaceLightFAF8F5surfacelight}>
                {`Surface/Light                #FAF8F5    --surface-light`}
            </Text>
            <Text style={styles.surfacePaperF5F2EDsurfacepaper}>
                {`Surface/Paper                #F5F2ED    --surface-paper`}
            </Text>
            <Text style={styles.borderCopperA6825Ebordercopper}>
                {`Border/Copper                #A6825E    --border-copper`}
            </Text>
            <Text style={styles.borderLightE5E2DAborderlight}>
                {`Border/Light                 #E5E2DA    --border-light`}
            </Text>
            <Text style={styles.borderDark2A2A2Aborderdark}>
                {`Border/Dark                  #2A2A2A    --border-dark`}
            </Text>
            <Text style={styles.sPACINGTOKENS}>
                {`SPACING TOKENS`}
            </Text>
            <Text style={styles.space2xs4pxspace2xsMicrospacingtightgrouping}>
                {`space/2xs     4px      --space-2xs      Micro spacing, tight grouping`}
            </Text>
            <Text style={styles.spaceXs8pxspacexsBaseunitinlinegaps}>
                {`space/xs      8px      --space-xs       Base unit, inline gaps`}
            </Text>
            <Text style={styles.spaceSm16pxspacesmComponentinternalpadding}>
                {`space/sm      16px     --space-sm       Component internal padding`}
            </Text>
            <Text style={styles.spaceMd24pxspacemdCardpaddinglistgaps}>
                {`space/md      24px     --space-md       Card padding, list gaps`}
            </Text>
            <Text style={styles.spaceLg32pxspacelgSectioninternalspacing}>
                {`space/lg      32px     --space-lg       Section internal spacing`}
            </Text>
            <Text style={styles.spaceXl48pxspacexlMajorcontentgaps}>
                {`space/xl      48px     --space-xl       Major content gaps`}
            </Text>
            <Text style={styles.space2xl64pxspace2xlSectionpadding}>
                {`space/2xl     64px     --space-2xl      Section padding`}
            </Text>
            <Text style={styles.space3xl96pxspace3xlScenemarginspagepadding}>
                {`space/3xl     96px     --space-3xl      Scene margins, page padding`}
            </Text>
            <Text style={styles.space4xl128pxspace4xlMajorsceneseparation}>
                {`space/4xl     128px    --space-4xl      Major scene separation`}
            </Text>
            <Text style={styles.space5xl192pxspace5xlMonumentalbreathingroom}>
                {`space/5xl     192px    --space-5xl      Monumental breathing room`}
            </Text>
            <Text style={styles.space6xl256pxspace6xlMaximumsilencebetweenscenes}>
                {`space/6xl     256px    --space-6xl      Maximum silence between scenes`}
            </Text>
            <Text style={styles.bREAKPOINTTOKENS}>
                {`BREAKPOINT TOKENS`}
            </Text>
            <Text style={styles.breakpointMobile390pxbpmobile}>
                {`breakpoint/mobile      390px     --bp-mobile`}
            </Text>
            <Text style={styles.breakpointTablet768pxbptablet}>
                {`breakpoint/tablet       768px     --bp-tablet`}
            </Text>
            <Text style={styles.breakpointDesktop1440pxbpdesktop}>
                {`breakpoint/desktop      1440px    --bp-desktop`}
            </Text>
            <Text style={styles.containerMax1200pxcontainermax}>
                {`container/max           1200px    --container-max`}
            </Text>
            <Text style={styles.containerContent800pxcontainercontent}>
                {`container/content       800px     --container-content`}
            </Text>
            <Text style={styles.containerNarrow680pxcontainernarrow}>
                {`container/narrow        680px     --container-narrow`}
            </Text>
        </View>  )
}

const styles = StyleSheet.create({
    variables_Tokens_ReferenceContainer: {
        position: "relative",
        flexShrink: 0,
        width: 1440,
        backgroundColor: "rgba(250, 248, 245, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 40,
        padding: 80
    },
    variablesDesignTokens: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(15, 15, 16, 1)",
        fontFamily: "Instrument Serif",
        fontSize: 48,
        fontWeight: 400,
        letterSpacing: "-1px"
    },
    alldesigndecisionsareencodedasFigmavariablesandmappedtoCSScustompropertiesThisensurespixelperfecttranslationfromdesigntocodeVariablesareorganizedintothreecollectionsColorSystemSpacingSystemandBreakpoints: {
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
    cOLORTOKENS: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    primaryNearBlack0F0F10colornearblack: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    primaryWarmWhiteF5F2EDcolorwarmwhite: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    primaryPaperFAF8F5colorpaper: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    accentCopperA6825Ecolorcopper: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    accentCopperLightC8A882colorcopperlight: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    neutralCharcoal1A1A1Acolorcharcoal: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    neutralDarkGray2A2A2Acolordarkgray: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    neutralMidGray6B6B6Bcolormidgray: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    neutralLightGrayE5E2DAcolorlightgray: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    textPrimary1A1A1Atextprimary: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    textSecondary4A4A4Atextsecondary: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    textTertiary8A8A8Atexttertiary: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    textInverseF5F2EDtextinverse: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    textCopperA6825Etextcopper: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    surfaceDark0F0F10surfacedark: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    surfaceCharcoal1A1A1Asurfacecharcoal: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    surfaceLightFAF8F5surfacelight: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    surfacePaperF5F2EDsurfacepaper: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    borderCopperA6825Ebordercopper: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    borderLightE5E2DAborderlight: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    borderDark2A2A2Aborderdark: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    sPACINGTOKENS: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    space2xs4pxspace2xsMicrospacingtightgrouping: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    spaceXs8pxspacexsBaseunitinlinegaps: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    spaceSm16pxspacesmComponentinternalpadding: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    spaceMd24pxspacemdCardpaddinglistgaps: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    spaceLg32pxspacelgSectioninternalspacing: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    spaceXl48pxspacexlMajorcontentgaps: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    space2xl64pxspace2xlSectionpadding: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    space3xl96pxspace3xlScenemarginspagepadding: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    space4xl128pxspace4xlMajorsceneseparation: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    space5xl192pxspace5xlMonumentalbreathingroom: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    space6xl256pxspace6xlMaximumsilencebetweenscenes: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    bREAKPOINTTOKENS: {
        position: "relative",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(166, 130, 94, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "3px"
    },
    breakpointMobile390pxbpmobile: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    breakpointTablet768pxbptablet: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    breakpointDesktop1440pxbpdesktop: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    containerMax1200pxcontainermax: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    containerContent800pxcontainercontent: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    },
    containerNarrow680pxcontainernarrow: {
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(26, 26, 26, 1)",
        fontFamily: "IBM Plex Mono",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "21.59999942779541px"
    }
});
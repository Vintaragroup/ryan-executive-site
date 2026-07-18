# Home — Figma Inspection

**Last Updated:** [Date to be filled]

## Route

- `/` (homepage)

---

## Desktop (1440px)

### SCENE 1: OPENING

**Node:** SCENE_1_OPENING  
**Height:** 1080px  
**Background:** rgba(10,10,11,0.45) overlay over image

#### Image Fill
- **Asset:** [placeholder-hero-opening.jpg]
- **Fill Type:** Image
- **Scale Mode:** [Check Figma]

#### Typography
- **Title Font:** Instrument Serif
- **Title Size:** 32px
- **Title Color:** rgba(249,247,242,1)
- **Title Alignment:** [Bottom/Left/etc]

#### Spacing
- **Padding Top:** 80px
- **Padding Bottom:** 80px
- **Padding Left:** 80px
- **Padding Right:** 80px

#### Verification Checklist
- [ ] Height correct (1080px)
- [ ] Background overlay correct (45% opacity)
- [ ] Typography matches spec
- [ ] Padding and spacing correct
- [ ] Image crop visible
- [ ] Metadata positioned correctly

---

### SCENE 2: STATEMENT

**Node:** SCENE_2_STATEMENT  
**Desktop Node:** 150:9  
**Tablet Node:** 166:11  
**Mobile Node:** 166:252  
**Assets Required:** None  

#### Desktop (1440px)

**Dimensions:** 1440 × 676px  
**Fill:** rgba(249,247,242,1) / #f9f7f2  
**Layout:** Vertical auto layout  
**Padding:** top 240px, right 80px, bottom 240px, left 80px  
**Gap:** 80px  
**Alignment:** items start / left aligned

#### Navigation
- **Node:** Global_Nav / 150:10
- **Dimensions:** 1440 × 80px
- **Position:** absolute top 0, left 0, right 0
- **Opacity:** 0.95
- **Padding Left/Right:** 80px
- **Brand Text:** "Ryan Morrow"
- **Brand Font:** Instrument Serif Regular, 24px, line-height auto, letter-spacing 0
- **Links:** Chapter, Systems, Journey, Contact
- **Links Font:** IBM Plex Mono Medium, 11px, uppercase, letter-spacing 1.5px, opacity 0.6
- **Links Gap:** 40px

#### Hero Text
- **Node:** Statement_Text / 150:17
- **Copy:** `[Hero Statement]`
- **Font:** Instrument Serif
- **Size:** 110px
- **Letter Spacing:** -4px
- **Line Height:** 95% / 104.5px
- **Width:** 1061px
- **Height:** 104px
- **Color:** rgba(26,26,26,1)
- **Alignment:** Left

#### Evidence / Metadata
- **Node:** Placeholder_Operational_Stats / 153:5
- **Copy:** `[Operational Stats — Cities · Nations · Vendors · Staff · Timeline]`
- **Font:** IBM Plex Mono Regular
- **Size:** 9px
- **Line Height:** Auto
- **Letter Spacing:** 1.2px
- **Width:** 1061px
- **Height:** 12px
- **Color:** rgba(26,26,26,1)
- **Opacity:** 0.28
- **Position:** x 80px, y 424px

#### Tablet (768px)
- **Dimensions:** 768 × 632px
- **Fill:** rgba(249,247,242,1) / #f9f7f2
- **Padding:** top 160px, right 48px, bottom 160px, left 48px
- **Gap:** 56px
- **Navigation:** 768 × 80px, padding left/right 48px, opacity 0.95
- **Brand:** Instrument Serif Regular, 22px
- **Links:** IBM Plex Mono Medium, 10px, uppercase, letter-spacing 1px, opacity 0.6, gap 24px
- **Statement Width:** 672px
- **Statement Height:** 244px
- **Statement Font:** Instrument Serif Regular, 64px, line-height 95%, letter-spacing -2px
- **Statement Copy / Wrap:**
  - `I build the operational`
  - `systems that transform`
  - `ambitious ideas into`
  - `extraordinary experiences.`
- **Highlight:** `extraordinary` in rgba(166,130,94,1) / #a6825e
- **Body Text Color:** rgba(26,26,26,1)
- **Metadata Width:** 672px
- **Metadata Height:** 12px
- **Metadata Font:** IBM Plex Mono Regular, 9px, line-height auto, letter-spacing 1px
- **Metadata Opacity:** 0.4
- **Metadata Copy:** `16 cities · 3 nations · 32+ vendors · 1,200+ production staff · 48-month timeline`

#### Mobile (390px)
- **Dimensions:** 390 × 452px
- **Fill:** rgba(249,247,242,1) / #f9f7f2
- **Padding:** top 120px, right 24px, bottom 120px, left 24px
- **Gap:** 48px
- **Navigation:** Mobile_Nav, 390 × 80px, padding left/right 24px
- **Brand:** Instrument Serif Regular, 20px
- **Menu Icon:** 24 × 24px container, 18 × 1.5px line, rgba(26,26,26,1)
- **Statement Width:** 342px
- **Statement Height:** 136px
- **Statement Font:** Instrument Serif Regular, 32px, line-height 105%, letter-spacing -1px
- **Statement Copy / Wrap:**
  - `I build the operational`
  - `systems that transform`
  - `ambitious ideas into`
  - `extraordinary experiences.`
- **Highlight:** `extraordinary` in rgba(166,130,94,1) / #a6825e
- **Body Text Color:** rgba(26,26,26,1)
- **Metadata Width:** 342px
- **Metadata Height:** 28px
- **Metadata Font:** IBM Plex Mono Regular, 9px, line-height 150%, letter-spacing 0.5px
- **Metadata Opacity:** 0.4
- **Metadata Copy:** `16 cities · 3 nations · 32+ vendors · 1,200+ production staff · 48-month timeline`

#### Verification Checklist
- [ ] Navigation bar styled correctly
- [ ] Hero text sizing and spacing correct
- [ ] Letter spacing applied
- [ ] Overall section height correct
- [ ] Operational stats positioned
- [ ] Color accurate

---

### SCENE 3: SILENCE

**Node:** SCENE_3_SILENCE  
**Desktop Node:** 150:18  
**Tablet Node:** 166:21  
**Mobile Node:** 166:259  
**Content:** Full-width image rectangle  
**Overlays:** None  
**Borders:** None  
**Metadata:** None  

#### Image Fill
- **Asset:** `public/images/home/scene-03/silence.png`
- **Native Dimensions:** 1248 × 832px
- **Image Hash:** 0909f9015ec0ce6729e7d1cf069ab46aa0c63e8f
- **Fill Type:** Image
- **Scale Mode:** FILL
- **Image Transform:** identity
- **Scaling Factor:** 0.5

#### Desktop (1440px)
- **Dimensions:** 1440 × 900px
- **Aspect Ratio:** 1.6
- **Position:** x 0, y 1756

#### Tablet (768px)
- **Dimensions:** 768 × 600px
- **Aspect Ratio:** 1.28
- **Position:** x 0, y 1432

#### Mobile (390px)
- **Dimensions:** 390 × 400px
- **Aspect Ratio:** 0.975
- **Position:** x 0, y 1172

#### Verification Checklist
- [ ] Height correct (900px)
- [ ] Image fills width properly
- [ ] Aspect ratio preserved
- [ ] Image crop visible

---

### SCENE 4: CLIENT NAMES

**Node:** SCENE_4_NAMES  
**Desktop Node:** 150:19  
**Tablet Node:** 166:22  
**Mobile Node:** 166:260  
**Client Count:** 7 rows
**Fill:** rgba(249,247,242,1) / #f9f7f2  
**Image Requirements:** None  
**Overlays:** None  
**Borders:** None  

#### Desktop (1440px)
- **Dimensions:** 1440 × 1171px
- **Layout:** Vertical auto layout
- **Padding:** top 160px, right 80px, bottom 160px, left 80px
- **Gap:** 64px
- **Section Label:** `[Section Label]`
- **Section Label Font:** IBM Plex Mono Medium, 11px, uppercase, line-height auto, letter-spacing 2px
- **Section Label Color:** rgba(166,130,94,1)
- **Client Grid:** 1280 × 773px, vertical auto layout, gap 32px
- **Client Rows:** 1280 × 83px, horizontal auto layout, space-between, baseline aligned
- **Client Name Font:** Instrument Serif Regular, 64px, line-height auto, letter-spacing 0
- **Client Name Color:** rgba(26,26,26,1)
- **Client Label Font:** IBM Plex Mono Regular, 13px, line-height auto, letter-spacing 1.5px
- **Client Label Color:** rgba(166,130,94,1), opacity 0.7
- **Desktop Copy:** placeholder names and labels from live Figma:
  - `[Client Name — FIFA]` / `[Client Name]`
  - `[Client Name — Universal Studios]` / `[Client Name]`
  - `[Client Name — Golden State Warriors]` / `[Client Name]`
  - `CAA` / `[Client Name]`
  - `[Client Name — Special Olympics]` / `[Client Name]`
  - `[Client Name]` / `[Client Name]`
  - `[Client Name — Datavault]` / `[Client Name]`

#### Tablet (768px)
- **Dimensions:** 768 × 805px
- **Layout:** Vertical auto layout
- **Padding:** top 100px, right 48px, bottom 100px, left 48px
- **Gap:** 48px
- **Section Label:** `// ORGANIZATIONS`
- **Section Label Font:** IBM Plex Mono Medium, 11px, uppercase, line-height auto, letter-spacing 2px
- **Client Grid:** 672 × 543px, vertical auto layout, gap 24px
- **Client Rows:** 672 × 57px, horizontal auto layout, space-between, baseline aligned
- **Client Name Font:** Instrument Serif Regular, 44px, line-height auto, letter-spacing 0
- **Client Name Color:** rgba(26,26,26,1)
- **Client Period Font:** IBM Plex Mono Regular, 12px, line-height auto, letter-spacing 1px
- **Client Period Color:** rgba(166,130,94,1), opacity 0.8
- **Tablet Copy / Periods:**
  - `FIFA` / `2022–2026`
  - `Universal Studios` / `2008–2010`
  - `Golden State Warriors` / `2015–2018`
  - `CAA` / `2012–2015`
  - `Special Olympics` / `2018–2022`
  - `iON Creative Studios` / `2015–2018`
  - `Datavault` / `2021–2022`

#### Mobile (390px)
- **Dimensions:** 390 × 854px
- **Layout:** Vertical auto layout
- **Padding:** top 80px, right 24px, bottom 80px, left 24px
- **Gap:** 48px
- **Section Label:** `// ORGANIZATIONS`
- **Section Label Font:** IBM Plex Mono Medium, 10px, uppercase, line-height auto, letter-spacing 2px
- **Client List:** 342 × 633px, vertical auto layout, gap 32px
- **Client Blocks:** 342 × 63px, vertical auto layout, gap 4px
- **Client Name Font:** Instrument Serif Regular, 36px, line-height auto, letter-spacing 0
- **Client Name Color:** rgba(26,26,26,1)
- **Client Period Font:** IBM Plex Mono Regular, 9px, uppercase, line-height auto, letter-spacing 1px
- **Client Period Color:** rgba(166,130,94,1)
- **Mobile Copy / Periods:** same as tablet, stacked name over period

#### Verification Checklist
- [ ] 7 client names visible
- [ ] 32px gap between rows
- [ ] Typography sizes correct
- [ ] Letter spacing applied
- [ ] Right-aligned labels correct
- [ ] Color accurate

---

### SCENE 5: FEATURED CASE STUDY

**Desktop Node:** 150:30  
**Tablet Node:** 166:47  
**Mobile Node:** 166:285  
**Fill:** rgba(249,247,242,1) / #f9f7f2  
**Overlays:** None on the hero or gallery image planes.  
**Borders / Rules:** Only the metadata dividers, governance connectors, and circular step outlines.  
**Critical Responsive Difference:** Mobile Figma intentionally ends this scene after the metrics column. The editorial governance block, quote block, and secondary gallery do not appear in node `166:285`.

#### Desktop (1440px)

- **Frame:** 1440 x 3411px
- **Frame Position:** x 0, y 3827
- **Scene Order:** Chapter intro -> hero image -> case study featured -> metrics row -> editorial governance block -> gallery quote -> secondary gallery

##### Chapter Intro Block
- **Node:** `150:31`
- **Dimensions:** 1440 x 299px
- **Intro Content Frame:** `150:32`, 900 x 179px at x 80, y 120
- **Section Label:** `150:33`, 94 x 16px, `01 // CHAPTER`
- **Section Label Typography:** IBM Plex Mono Regular, 12px, line-height normal, letter-spacing 2px, rgba(166,130,94,1)
- **Heading:** `150:34`, 490 x 104px, `[Section Heading]`
- **Heading Typography:** Instrument Serif Regular, 80px, line-height normal, rgba(26,26,26,1)
- **Description:** `153:20`, 900 x 27px, `[Section Heading]`
- **Description Typography:** Geist Regular, 18px, line-height 27px, rgba(26,26,26,1) at 50% opacity

##### Hero Image
- **Node:** `150:35`
- **Dimensions:** 1440 x 800px
- **Image Fill:** image, object-fit cover
- **Image Crop:** full-width stadium construction crop, horizon centered, cranes visible left/center/right
- **Border Radius:** none
- **Overlay:** none

##### Case Study Featured
- **Node:** `150:36`
- **Dimensions:** 1440 x 523px
- **Padding:** 80px top, 80px right, 80px bottom, 80px left
- **Gap Between Columns:** 80px
- **Left Column Node:** `150:37`, 733 x 176px
- **Left Column Typography:** Geist Regular, 20px, line-height 32px, rgba(26,26,26,1)
- **Left Column Paragraphs:** 3 placeholder paragraphs, each 733 x 32px, positioned at y 0, 72, 144
- **Paragraph Gap:** 40px
- **Right Column Node:** `150:41`, 405 x 363px
- **Right Column Row Gap:** 32px
- **Metadata Blocks:** 5 blocks, each 405 x 47px
- **Metadata Divider Rule:** 1px bottom border, rgba(229,226,218,1)
- **Metadata Block Padding Bottom:** 12px
- **Metadata Label Typography:** IBM Plex Mono Regular, 10px, uppercase, letter-spacing 1px, rgba(166,130,94,1)
- **Metadata Value Typography:** Geist Medium, 14px, rgba(26,26,26,1)
- **Metadata Values:**
  - PROGRAM -> FIFA World Cup 2026
  - ROLE -> Executive Production & Ops
  - SCALE -> 16 Cities · 3 Nations
  - VENDORS -> 32+ Core Partners
  - DURATION -> 48-Month Roadmap

##### Metrics Row
- **Node:** `150:57`
- **Dimensions:** 1440 x 225px
- **Padding Left/Right:** 80px
- **Padding Bottom:** 120px
- **Gap:** 32px
- **Card Count:** 4
- **Card Size:** 296 x 105px each
- **Metric Value Typography:** Instrument Serif Regular, 80px, line-height none, rgba(26,26,26,1)
- **Metric Label Typography:** IBM Plex Mono Regular, 10px, uppercase, rgba(166,130,94,1)
- **Desktop Copy:**
  - 16 / `[Metric Label]`
  - 32+ / `[Metric Label]`
  - `[Metric Value]` / `[Metric Label]`
  - 03 / `[Metric Label]`

##### Editorial Governance Block
- **Node:** `150:70`
- **Dimensions:** 1440 x 407px
- **Padding:** 120px on all sides
- **Gap:** 80px
- **Heading Node:** `150:71`, 113 x 14px at x 663.5, y 120
- **Heading Typography:** IBM Plex Mono Medium, 11px, uppercase, rgba(166,130,94,1)
- **Steps Container:** `150:73`, 1040 x 73px at x 200, y 214
- **Step Count:** 5
- **Step Blocks 01-04:** 220 x 73px with 160 x 73px content block plus 60 x 1px connector rule
- **Step Block 05:** 160 x 73px, no trailing connector
- **Circle Size:** 48 x 48px, 1px outline, rgba(166,130,94,1), radius 24px
- **Step Number Typography:** IBM Plex Mono Regular, 14px, rgba(166,130,94,1)
- **Step Label Typography:** IBM Plex Mono Regular, 10px, uppercase, centered, rgba(26,26,26,1)
- **Connector Rule:** 60 x 1px, rgba(166,130,94,1) at 30% opacity
- **Labels:** Executive Leadership / Operational Governance / Production Excellence / Executive Visibility / Decision Confidence

##### Gallery Quote
- **Node:** `150:103`
- **Dimensions:** 1440 x 437px
- **Padding:** top 160px, right 80px, bottom 200px, left 80px
- **Quote Text Node:** `150:104`, 1061 x 77px at x 189.5, y 160
- **Typography:** Instrument Serif Regular, 64px, line-height 1.2, centered, rgba(26,26,26,1)
- **Desktop Copy:** `[Editorial Copy]`

##### Secondary Gallery
- **Node:** `150:105`
- **Dimensions:** 1440 x 720px
- **Padding Left/Right:** 80px
- **Padding Bottom:** 160px
- **Gap:** 32px
- **Left Gallery Frame:** `153:21`, 733 x 560px
- **Left Image:** `150:106`, 733 x 560px, image fill, object-fit cover
- **Overlay Note Frame:** `153:22`, 241.8025 x 78.2578px at x 32, y 380
- **Overlay Note Rotation:** -1.5deg
- **Overlay Note Background:** rgba(245,237,216,1) / #f5edd8
- **Overlay Note Shadow:** 2px 4px 6px rgba(0,0,0,0.18)
- **Overlay Note Padding:** 12px
- **Overlay Note Corner Radius:** 2px
- **Overlay Note Typography:** IBM Plex Mono Regular, 7px
- **Overlay Note Copy:**
  - `[Section Heading]`
  - `[Section Heading]`
  - `LED INTEGRATION: 94% COMPLETE`
  - `VENDOR CHECK-IN: 0600 LOCAL`
- **Right Gallery Frame:** `150:107`, 515 x 560px
- **Right Image 01:** `150:108`, 515 x 264px, image fill, object-fit cover
- **Right Image 02:** `150:109`, 515 x 264px, image fill, object-fit cover

#### Tablet (768px)

- **Frame:** 768 x 3823px
- **Frame Position:** x 0, y 2837
- **Scene Order:** Chapter intro -> hero image -> case study featured -> metrics row -> editorial governance block -> gallery quote -> secondary gallery

##### Chapter Intro Block
- **Node:** `166:48`
- **Dimensions:** 768 x 342px
- **Padding:** top 80px, right 48px, bottom 40px, left 48px
- **Gap:** 20px
- **Section Label:** `166:49`, 94 x 16px, `01 // CHAPTER`
- **Section Label Typography:** IBM Plex Mono Regular, 12px, line-height normal, rgba(166,130,94,1)
- **Heading:** `166:50`, 672 x 118px, `The Architecture of a Global Phenomenon`
- **Heading Typography:** Instrument Serif Regular, 56px, line-height 1.05, rgba(26,26,26,1)
- **Description:** `166:51`, 672 x 48px, `How operational architecture became the invisible foundation of the world's largest sporting event`
- **Description Typography:** Geist Regular, 16px, line-height 24px, rgba(26,26,26,1) at 60% opacity

##### Hero Image
- **Node:** `166:52`
- **Dimensions:** 768 x 500px
- **Image Fill:** image, object-fit cover
- **Image Crop:** stadium crop tightened vertically versus desktop while preserving centered horizon/cranes
- **Overlay:** none

##### Case Study Featured
- **Node:** `166:53`
- **Dimensions:** 768 x 856px
- **Padding:** top 60px, right 48px, bottom 60px, left 48px
- **Layout:** single-column stack
- **Gap:** 48px
- **Narration Node:** `166:54`, 672 x 399px
- **Narration Typography:** Geist Regular, 17px, line-height 1.6, rgba(26,26,26,1)
- **Narration Paragraph Count:** 3
- **Narration Paragraph Heights:** 135px, 135px, 81px
- **Narration Paragraph Gap:** 24px
- **Metadata Node:** `166:58`, 672 x 289px
- **Metadata Row Gap:** 16px
- **Metadata Block Size:** 672 x 45px each
- **Metadata Divider Rule:** 1px bottom border, rgba(229,226,218,1)
- **Metadata Block Padding Bottom:** 12px
- **Metadata Label Typography:** IBM Plex Mono Regular, 9px, uppercase, rgba(166,130,94,1)
- **Metadata Value Typography:** Geist Medium, 13px, rgba(26,26,26,1)
- **Tablet Copy:**
  - Heading -> `The Architecture of a Global Phenomenon`
  - Description -> `How operational architecture became the invisible foundation of the world's largest sporting event`
  - Paragraph 1 -> `The scale of a World Cup is not measured in minutes on a clock, but in the synchronization of thousands of variables across continents. My role was the design of the operational substrate — credential systems managing access for 200,000+ accredited personnel, vendor routing protocols spanning 16 host cities, production schedules measured in thousands of line items across three sovereign nations.`
  - Paragraph 2 -> `We moved beyond traditional project management into systems architecture. Every decision — from the physical routing of 32 core vendor partners to the fan journey mapping across six stadium clusters — was treated as a data-driven node in a larger governance ecosystem. The complexity wasn't a challenge to be minimized, but a geometry to be mastered.`
  - Paragraph 3 -> `Success at this level requires a unique synthesis of editorial vision and mathematical precision. You aren't just shipping a product; you are orchestrating a moment of global culture with 48 months of runway and no margin for operational failure.`

##### Metrics Row
- **Node:** `166:74`
- **Dimensions:** 1432 x 84px inside the 768px tablet frame
- **Technical Note:** Figma exposes a metrics row width wider than the tablet frame; preserve four metrics in one row and treat the oversized width as an explicit Figma characteristic rather than normalizing it.
- **Card Count:** 4
- **Card Size:** 340 x 84px each
- **Gap Between Cards:** 24px
- **Metric Value Typography:** Instrument Serif Regular, 64px, line-height none, rgba(26,26,26,1)
- **Metric Label Typography:** IBM Plex Mono Regular, 9px, uppercase, rgba(166,130,94,1)
- **Tablet Copy:**
  - 16 / `CITIES INTEGRATED`
  - 32+ / `VENDORS MANAGED`
  - 1.2K / `STAFF ORCHESTRATED`
  - 03 / `NATIONS SYNCED`

##### Editorial Governance Block
- **Node:** `166:87`
- **Dimensions:** 768 x 646px
- **Padding:** top 80px, right 48px, bottom 80px, left 48px
- **Gap:** 48px
- **Heading:** `166:88`, 146 x 14px, `// THE GOVERNANCE FLOW`
- **Heading Typography:** IBM Plex Mono Medium, 11px, uppercase, rgba(166,130,94,1)
- **Steps Container:** `166:90`, 672 x 424px
- **Step Count:** 5 stacked blocks
- **Step Block Height:** 80px for blocks 01-04, 40px for block 05
- **Circle Size:** 40 x 40px, 1px outline, rgba(166,130,94,1), radius 20px
- **Connector Rule:** 1 x 24px vertical rule, rgba(166,130,94,1) at 30% opacity
- **Step Number Typography:** IBM Plex Mono Regular, 12px, rgba(166,130,94,1)
- **Step Label Typography:** IBM Plex Mono Regular, 11px, uppercase, centered, rgba(26,26,26,1)

##### Gallery Quote
- **Node:** `166:120`
- **Dimensions:** 768 x 379px
- **Padding:** top 100px, right 48px, bottom 120px, left 48px
- **Quote Text Node:** `166:121`, 672 x 159px
- **Typography:** Instrument Serif Regular, 44px, line-height 1.2, centered, rgba(26,26,26,1)
- **Quote Copy:** `"Complexity is not solved with more effort, but with more rigorous systems. We build the substrate for confidence."`

##### Secondary Gallery
- **Node:** `166:122`
- **Dimensions:** 768 x 1016px
- **Padding Left/Right:** 48px
- **Padding Bottom:** 100px
- **Gap:** 32px
- **Primary Image Frame:** `166:123`, 672 x 420px
- **Primary Image:** `166:124`, 672 x 420px, image fill, object-fit cover
- **Overlay Note:** `166:125`, 221.8094 x 77.7343px at x 24, y 260
- **Overlay Note Rotation:** -1.5deg
- **Overlay Note Background:** rgba(245,237,216,1)
- **Overlay Note Shadow:** 2px 4px 6px rgba(0,0,0,0.18)
- **Overlay Note Padding:** 12px
- **Overlay Note Typography:** IBM Plex Mono Regular, 7px
- **Overlay Note Copy:**
  - `PROD SCHEDULE // VENUE 09 · MIA`
  - `W47 D3 — CREDENTIAL LANES: ACTIVE`
  - `LED INTEGRATION: 94% COMPLETE`
  - `VENDOR CHECK-IN: 0600 LOCAL`
- **Secondary Images Frame:** `166:130`, 672 x 464px
- **Secondary Image 01:** `166:131`, 672 x 220px
- **Secondary Image 02:** `166:132`, 672 x 220px
- **Gap Between Secondary Images:** 24px

#### Mobile (390px)

- **Frame:** 390 x 2124px
- **Frame Position:** x 0, y 2426
- **Scene Order:** Chapter intro -> hero image -> case study body -> metrics column
- **Omitted From Mobile Node:** editorial governance block, gallery quote, secondary gallery

##### Chapter Intro
- **Node:** `166:286`
- **Dimensions:** 390 x 313px
- **Padding:** top 80px, right 24px, bottom 40px, left 24px
- **Gap:** 20px
- **Section Label:** `166:287`, 78 x 13px, `01 // CHAPTER`
- **Section Label Typography:** IBM Plex Mono Regular, 10px, uppercase, rgba(166,130,94,1)
- **Heading:** `166:288`, 342 x 62px, `The Architecture of a Global Phenomenon`
- **Heading Typography:** Instrument Serif Regular, 28px, line-height 1.1, rgba(26,26,26,1)
- **Description:** `166:289`, 342 x 78px, `How operational architecture became the invisible foundation of the world's largest sporting event`
- **Description Typography:** Geist Regular, 16px, line-height 1.6, rgba(26,26,26,1) at 60% opacity

##### Hero Image
- **Node:** `166:290`
- **Dimensions:** 390 x 340px
- **Image Fill:** image, object-fit cover
- **Image Crop:** narrower stadium crop with center construction bowl retained
- **Overlay:** none

##### Case Study Body
- **Node:** `166:291`
- **Dimensions:** 390 x 719px
- **Padding:** top 48px, right 24px, bottom 60px, left 24px
- **Gap:** 48px
- **Narration Node:** `166:292`, 342 x 284px
- **Narration Typography:** Geist Regular, 16px, line-height 1.6, rgba(26,26,26,1)
- **Narration Paragraph Count:** 2
- **Narration Paragraph Heights:** 130px and 130px
- **Narration Paragraph Gap:** 24px
- **Mobile Paragraph Copy:**
  - `The scale of a World Cup is not measured in minutes on a clock, but in the synchronization of thousands of variables across continents. My role was the design of the operational substrate.`
  - `Every decision — from the physical routing of 32 core vendor partners to the fan journey mapping across six stadium clusters — was treated as a data-driven node in a larger ecosystem.`
- **Metadata Node:** `166:295`, 342 x 279px
- **Metadata Row Gap:** 16px
- **Metadata Block Size:** 342 x 43px each
- **Metadata Divider Rule:** 1px bottom border, rgba(229,226,218,1)
- **Metadata Block Padding Bottom:** 12px
- **Metadata Label Typography:** IBM Plex Mono Regular, 8px, uppercase, rgba(166,130,94,1)
- **Metadata Value Typography:** Geist Medium, 14px, rgba(26,26,26,1)

##### Metrics Column
- **Node:** `166:311`
- **Dimensions:** 390 x 752px
- **Card Count:** 4 stacked cards
- **Card Size:** 390 x 168px each
- **Card Vertical Padding:** 40px top and bottom
- **Gap Between Value and Label:** 12px
- **Bottom Padding After Final Card:** 80px
- **Metric Value Typography:** Instrument Serif Regular, 64px, line-height none, rgba(26,26,26,1)
- **Metric Label Typography:** IBM Plex Mono Regular, 9px, uppercase, centered, rgba(166,130,94,1)
- **Mobile Copy:**
  - 16 / `CITIES INTEGRATED`
  - 32+ / `VENDORS MANAGED`
  - 1.2K / `STAFF ORCHESTRATED`
  - 03 / `NATIONS SYNCED`

#### Responsive Differences

- **Desktop** preserves placeholder editorial copy in the intro, body, metrics labels, quote, and overlay note.
- **Tablet** swaps to finalized editorial copy, adds the `// THE GOVERNANCE FLOW` label, a fully populated quote, and a populated overlay note.
- **Mobile** uses the finalized intro plus a reduced two-paragraph body and stops after the metrics column.
- **Desktop featured layout** is a two-column 733px / 405px split with an 80px gap.
- **Tablet and mobile featured layouts** collapse to a single column.
- **Desktop governance block** is horizontal with 60px connector rules.
- **Tablet governance block** is vertical with 24px connector rules.
- **Mobile node** contains no governance block or gallery content.

#### Verification Checklist
- [ ] Desktop scene height matches 3411px
- [ ] Desktop hero image is 1440 x 800
- [ ] Desktop case study split is 733px / 405px with 80px gap
- [ ] Desktop metrics row renders four cards with placeholder copy
- [ ] Desktop editorial governance row renders five steps and four connector rules
- [ ] Desktop gallery quote preserves placeholder copy
- [ ] Desktop secondary gallery renders 733px / 515px columns with sticky note overlay
- [ ] Tablet scene height matches 3823px
- [ ] Tablet metrics preserve four metrics in a single-row presentation despite the oversized Figma width
- [ ] Tablet governance flow is vertical and fully populated
- [ ] Tablet quote text matches the Figma sentence exactly
- [ ] Mobile scene height matches 2124px
- [ ] Mobile scene ends after the metrics column
- [ ] Mobile uses exactly two narration paragraphs
- [ ] No overlays or borders are added beyond the documented rules and sticky note treatment

---

### SCENE 6: SYSTEMS

**Node:** SCENE_6_SYSTEMS

#### Grid Layout
- **Column Count:** 5
- **Gap:** [Check Figma]

#### Module Styling
- **Typography:** [Check Figma]
- **Colors:** [Check Figma]

#### Verification Checklist
- [ ] 5-column grid visible
- [ ] Modules properly spaced
- [ ] Typography correct
- [ ] Colors accurate

---

### SCENE 7: JOURNEY

**Node:** SCENE_7_JOURNEY

#### Timeline
- **Node Count:** 6 nodes
- **Divider Height:** 2px
- **Divider Color:** rgba(229,226,218,1)

#### Typography
- **Year Font:** [Check Figma]
- **Project Name Font:** 20px
- **Role Font:** 14px

#### Spacing
- **Gap Between Nodes:** [Check Figma]

#### Verification Checklist
- [ ] 6 timeline nodes visible
- [ ] 2px dividers correct
- [ ] Year labels correct
- [ ] Project names correct
- [ ] Role labels correct
- [ ] Spacing accurate

---

## Tablet (768px)

### Responsive Changes

**Navigation:**
- [ ] Hamburger menu appears
- [ ] Desktop links hidden
- [ ] Reduced padding (if any)

**Layout:**
- [ ] Client grid adapts
- [ ] Case study columns stack or resize
- [ ] Typography scales appropriately

**Verification Checklist**
- [ ] All sections visible at 768px
- [ ] Hierarchy preserved
- [ ] Typography readable
- [ ] Spacing proportionate

---

## Mobile (390px)

### Responsive Changes

**Navigation:**
- [ ] Hamburger menu functional
- [ ] Mobile drawer menu available
- [ ] Brand text visible

**Layout:**
- [ ] Single column layout
- [ ] Case study sections stack
- [ ] Images scaled properly
- [ ] Text wraps correctly

**Typography:**
- [ ] Font sizes appropriate for mobile
- [ ] Line heights readable

**Verification Checklist**
- [ ] All sections stacked vertically
- [ ] Hamburger menu opens/closes
- [ ] Text readable without horizontal scroll
- [ ] Images fit viewport
- [ ] Spacing proportionate

---

## Notes

Add any additional observations or clarifications about the Figma design.

If this document conflicts with the local reference files,
use the values in this document as authoritative.

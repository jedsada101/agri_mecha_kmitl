# Image credits

Every file in this directory comes from an outside source and is used under the
licence named below. **No file here has been modified.** Labels in the course's
own notation, in Thai and in English, are overlaid in HTML on the page rather
than edited into the image, so nothing in this directory is a derivative work.

This matters for the share-alike licences below. CC BY-SA attaches its
share-alike obligation to *Adapted Material* — material that has been
"translated, altered, arranged, transformed, or otherwise modified". An
unmodified image placed alongside other content is a collection, not an
adaptation, so the courseware keeps its own terms, "© Jedsada Saijai. All
rights reserved.", while each image keeps its own. **If any of these files is
ever edited — including adding Thai text into the image itself — that edited
version becomes Adapted Material and must then be released under the same
share-alike licence.** Add labels in HTML instead.

---

## In use

### fig-03-03-ip-code.jpg

| | |
|---|---|
| **Used as** | Figure 3.3, Chapter 3 — the IP code of IEC 60529 |
| **Title** | IP rating.JPG |
| **Author** | Dmitry G |
| **Source** | https://commons.wikimedia.org/wiki/File:IP_rating.JPG |
| **Licence** | CC BY-SA 3.0 (also offered under GFDL) — https://creativecommons.org/licenses/by-sa/3.0/ |
| **Modified** | No |
| **Retrieved** | 2026-10-25 |
| **Note** | Carries photographs of the actual test conditions and the 50 mm–1 mm solid sizes, which the drawing it replaced did not. It has almost no words, so the bilingual descriptions of each level that the drawing carried now sit beneath it in `.fig-key`. |

### fig-09-02-dh-parameters.svg

| | |
|---|---|
| **Used as** | Figure 9.2, Chapter 9 — the four Denavit–Hartenberg parameters |
| **Title** | Denavit-Hartenberg-Transformation.svg |
| **Author** | Jahobr |
| **Source** | https://commons.wikimedia.org/wiki/File:Denavit-Hartenberg-Transformation.svg |
| **Licence** | Public domain — "I grant anyone the right to use this work for any purpose, without any conditions, unless such conditions are required by law." |
| **Modified** | No |
| **Retrieved** | 2026-10-25 |
| **Note** | A true three-dimensional construction rather than the flat projection it replaced. It uses the concrete index 1 where the chapter writes *i*; the caption says so and `.fig-key` maps each printed label to the chapter's LaTeX symbol. |

### fig-10-03-differential-drive.svg

| | |
|---|---|
| **Used as** | Figure 10.3, Chapter 10 — differential drive and the instantaneous centre |
| **Title** | Differential Drive Kinematics of a Wheeled Mobile Robot.svg |
| **Author** | Mr.Doctor.No |
| **Source** | https://commons.wikimedia.org/wiki/File:Differential_Drive_Kinematics_of_a_Wheeled_Mobile_Robot.svg |
| **Licence** | CC BY-SA 4.0 — https://creativecommons.org/licenses/by-sa/4.0/ |
| **Modified** | No |
| **Retrieved** | 2026-10-25 |
| **Note** | Uses *b*, *R*, *ω*, *v<sub>L</sub>*, *v<sub>R</sub>* exactly as equations (10.2) and (10.3) do, and adds the world frame and the pose (*x*, *y*, *φ*) that equations (10.8) and (10.9) work in but the drawing it replaced did not show. It writes ICR where the chapter writes ICC, and *φ* where the chapter writes *θ*; `.fig-key` bridges both. |

---

## Investigated and rejected

Kept so the same ground is not searched twice.

| Candidate | Intended for | Licence | Why rejected |
|---|---|---|---|
| [Mecha.svg](https://commons.wikimedia.org/wiki/File:Mecha.svg) | Fig 1.1, mechatronics Venn | CC BY-SA 3.0 | Wrong content: its fourth set is Control Systems, where Figure 1.1 exists to add crop and soil science as the fourth concern of this programme. |
| [Simple feedback control loop.svg](https://commons.wikimedia.org/wiki/File:Simple_feedback_control_loop.svg) | Fig 2.1, feedback loop | CC BY-SA 3.0 + GFDL | Wrong content: unity feedback with no sensor block and no disturbance, where §2 teaches that a sensor produces *y<sub>m</sub>* and a disturbance *d* enters the process — both of which equation (2.4), reused as (7.5), depends on. |
| [Systems Engineering and Verification.jpg](https://commons.wikimedia.org/wiki/File:Systems_Engineering_and_Verification.jpg) | Fig 11.3, V-model | Public domain (US Government work) | Wrong content: the defence-acquisition V of design-review gates (SFR, PDR, CDR, TRR, SVR), not the pairing of each requirement level with the test that verifies it, which §11.5 teaches. |
| [Wheatstone Bridge.svg](https://commons.wikimedia.org/wiki/File:Wheatstone_Bridge.svg) | Fig 3.2, bridge panel | Public domain (jjbeard) | Wrong content: a null-balance measuring bridge with a variable arm and a galvanometer, not the four-active-gauge load cell with excitation and a differential output that §3 needs for weighing. |
| [Resistive divider2.svg](https://commons.wikimedia.org/wiki/File:Resistive_divider2.svg) | Fig 3.2, divider panel | CC0 (Krishnavedala) | Covers only half of a two-panel figure whose other half has no match, and carries none of the sensor, ADC or amplifier context the figure exists to show. |
| Mecanum / omni wheel files in [Category:Omni wheels](https://commons.wikimedia.org/wiki/Category:Omni_wheels) | Fig 10.2, wheel types | mixed | Cover only the omnidirectional panel of a four-panel comparison whose point is *which motion each wheel forbids*. |
| French kinematic-symbol galleries (liaison pivot, liaison glissière) | Fig 8.2, revolute vs prismatic | mixed | Schematic symbols only, without the *θ* and *d* joint variables that Figure 8.2 exists to introduce. |

### Sources searched

- Wikimedia Commons by topic, by category and by licence
- [User:Jahobr](https://commons.wikimedia.org/wiki/User:Jahobr) — a prolific public-domain contributor of mechanism and kinematics diagrams; Figure 9.2 came from here. The [Mechanics gallery](https://commons.wikimedia.org/wiki/User:Jahobr/Mechanics) also holds `Robot_omnidirectional_drive_topview.PNG`, `Omniwheel_robotics.PNG` and `Denavit-Hartenberg-Transformations_Robot.svg`, worth revisiting.

### What the search established

Engineering diagrams on Wikimedia Commons are predominantly CC BY-SA, that
being the default for user-created work there; public domain and CC0 diagrams
exist but are scattered. Once share-alike was accepted for unmodified use the
binding constraint stopped being the licence and became the content: a stock
diagram usually illustrates a *different variant* of a concept from the one a
given section teaches, and the course's purpose-built composites — a K-map
carrying specific truth values, a schematic whose parts map onto a table, a
field layout whose labels match an equation — have no stock equivalent at all.
Of fourteen figures investigated, three were replaced.

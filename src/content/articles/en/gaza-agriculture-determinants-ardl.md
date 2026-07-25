---
title: "The Effect of Economic, Political and Climatic Factors on the Agricultural Economy in the Gaza Strip"
slug: "gaza-agriculture-determinants-ardl"
locale: "en"
translationKey: "gaza-agriculture-determinants"
excerpt: "An ARDL model on quarterly series for 1994–2024, measuring the effect of GDP, exports, bombardment, blockade and the SPEI-6 drought index on agricultural value added in Gaza."
category: "economics-policy"
tags: ["Agricultural economy", "Gaza Strip", "ARDL model", "SPEI drought index", "Blockade", "STATA"]
contentType: "research-paper"
status: "published"
featured: true
publishDate: 2025-05-01
displayDate: "Spring 2025"
pdfUrl: "/files/gaza-agriculture-determinants-ardl.pdf"
seoDescription: "Econometric working paper using an ARDL model: the effect of economic, political and climatic factors on agricultural value added in the Gaza Strip, 1994–2024."
---

> **Unpublished working paper**, prepared during postgraduate study at the Doha Institute for Graduate Studies. The full text is in Arabic and available as a PDF from the top of this page.

## Problem

Agriculture is a pillar of food security and employment in Gaza, yet faces compounded pressures: the **blockade** in force since 2009 and its restrictions on the movement of agricultural inputs such as fertiliser and seed; **repeated bombardment** of farmland since 2008 and the destruction of agricultural infrastructure that follows; **climatic change** in humidity, drought and seasonal patterns; alongside the absence of a supporting vision for the agricultural economy and Palestinian political division.

## Data and processing

An integrated quarterly series was constructed covering **1994–2024**:

- Quarterly data (2011–2024) from the quarterly national accounts of the Palestinian Central Bureau of Statistics
- Annual data (1994–2010) from the Palestine Monetary Authority annual report and the national accounts
- Annual-to-quarterly conversion using the **proportional Denton method**, preserving proportional relationships between variables
- Series converted to **logarithms** to improve stationarity and allow interpretation in percentage terms
- Processing and estimation in **STATA 18**

## Model

Dependent variable: **agricultural value added**. Determinants fall into three groups:

| Group | Variables |
|---|---|
| Economic | GDP · merchandise exports |
| Political | Israeli bombardment · blockade |
| Climatic | **SPEI-6** drought index |

Stationarity tests showed all variables **non-stationary in levels** except SPEI-6 and ACDL — a mix of I(0) and I(1) orders of integration — so an **ARDL model** was used, being best suited here because it permits testing for a long-run equilibrium relationship without requiring a uniform order of integration.

## Findings

- A **positive long-run relationship** between GDP and agricultural value added, consistent with theory holding that economic growth improves agricultural output.
- A **negative long-run relationship** between agricultural exports and the sector's value added — a result that invites scrutiny of the structure and constraints of exporting rather than its volume alone.

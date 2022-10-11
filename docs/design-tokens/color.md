---
id: color
title: Colours
custom_edit_url: null
---

import * as Token from '@danielwang/aemo-design-tokens/dist'
import ShowVar from './_showVar'

export const ColorBlock = ({color}) => ( <div style={{
    backgroundColor: color,
    borderRadius: '50%',
    padding: '0.5rem',
    width: '2rem',
    height: '2rem',
  }}></div> );


## Primary
| Example | Name | Value | SCSS Variables 
|---|---|---|---|
| <ColorBlock color={Token.ColorPrimaryPurple700} /> | Purple 700 | <ShowVar code={Token.ColorPrimaryPurple700} /> | `$gel-color-primary-purple-700` 
| <ColorBlock color={Token.ColorPrimaryPurple600} /> | Purple 600 | <ShowVar code={Token.ColorPrimaryPurple600} /> | `$gel-color-primary-purple-600` 
| <ColorBlock color={Token.ColorPrimaryPurple500} /> | Purple 500 | <ShowVar code={Token.ColorPrimaryPurple500} /> | `$gel-color-primary-purple-500` 
| <ColorBlock color={Token.ColorPrimaryPurple400} /> | Purple 400 | <ShowVar code={Token.ColorPrimaryPurple400} /> | `$gel-color-primary-purple-400`
| <ColorBlock color={Token.ColorPrimaryPurple300} /> | Purple 300 | <ShowVar code={Token.ColorPrimaryPurple300} /> | `$gel-color-primary-purple-300`
| <ColorBlock color={Token.ColorPrimaryPurple200} /> | Purple 200 | <ShowVar code={Token.ColorPrimaryPurple200} /> | `$gel-color-primary-purple-200`
| <ColorBlock color={Token.ColorPrimaryPurple100} /> | Purple 100 | <ShowVar code={Token.ColorPrimaryPurple100} /> | `$gel-color-primary-purple-100`


## Secondary

| Example | Name | Value | SCSS Variables 
|---|---|---|---|
| <ColorBlock color={Token.ColorSecondaryBlue500} /> | Blue 500 | <ShowVar code={Token.ColorSecondaryBlue500} /> | `$gel-color-secondary-blue-500` 
| <ColorBlock color={Token.ColorSecondaryBlue100} /> | Blue 100 | <ShowVar code={Token.ColorSecondaryBlue100} /> | `$gel-color-secondary-blue-100` 
| <ColorBlock color={Token.ColorSecondaryGreen500} /> | Green 500 | <ShowVar code={Token.ColorSecondaryGreen500} /> | `$gel-color-secondary-green-500` 
| <ColorBlock color={Token.ColorSecondaryGreen100} /> | Green 100 | <ShowVar code={Token.ColorSecondaryGreen100} /> | `$gel-color-secondary-green-100` 
| <ColorBlock color={Token.ColorSecondaryOrange500} /> | Orange 500 | <ShowVar code={Token.ColorSecondaryOrange500} /> | `$gel-color-secondary-orange-500` 
| <ColorBlock color={Token.ColorSecondaryOrange100} /> | Orange 100 | <ShowVar code={Token.ColorSecondaryOrange100} /> | `$gel-color-secondary-orange-100` 
| <ColorBlock color={Token.ColorSecondaryRed500} /> | Red 500 | <ShowVar code={Token.ColorSecondaryRed500} /> | `$gel-color-secondary-red-500` 
| <ColorBlock color={Token.ColorSecondaryRed100} /> | Red 100 | <ShowVar code={Token.ColorSecondaryRed100} /> | `$gel-color-secondary-red-100` 
| <ColorBlock color={Token.ColorSecondaryTeal} /> | Teal | <ShowVar code={Token.ColorSecondaryTeal} /> | `$gel-color-secondary-teal` 
| <ColorBlock color={Token.ColorSecondaryYellow} /> | Yellow | <ShowVar code={Token.ColorSecondaryYellow} /> | `$gel-color-secondary-yellow` 
| <ColorBlock color={Token.ColorSecondaryAqua} /> | Aqua | <ShowVar code={Token.ColorSecondaryAqua} /> | `$gel-color-secondary-aqua` 
| <ColorBlock color={Token.ColorSecondaryBlueViolet} /> | Blue Violet | <ShowVar code={Token.ColorSecondaryBlueViolet} /> | `$gel-color-secondary-blue-violet` 

## Tertiary
| Example | Name | Value | SCSS Variables 
|---|---|---|---|
| <ColorBlock color={Token.ColorTertiaryLink} /> | Link | <ShowVar code={Token.ColorTertiaryLink} /> | `$gel-color-tertiary-link`
| <ColorBlock color={Token.ColorTertiaryBlack} /> | Black | <ShowVar code={Token.ColorTertiaryBlack} /> | `$gel-color-tertiary-black`
| <ColorBlock color={Token.ColorTertiaryWhite} /> | White | <ShowVar code={Token.ColorTertiaryWhite} /> | `$gel-color-tertiary-white`  
| <ColorBlock color={Token.ColorTertiarySlate700} /> | Slate 700 | <ShowVar code={Token.ColorTertiarySlate700} /> | `$gel-color-tertiary-slate-700`  
| <ColorBlock color={Token.ColorTertiarySlate500} /> | Slate 500 | <ShowVar code={Token.ColorTertiarySlate500} /> | `$gel-color-tertiary-slate-500`  
| <ColorBlock color={Token.ColorTertiarySlate300} /> | Slate 300 | <ShowVar code={Token.ColorTertiarySlate300} /> | `$gel-color-tertiary-slate-300`  
| <ColorBlock color={Token.ColorTertiarySlate100} /> | Slate 100 | <ShowVar code={Token.ColorTertiarySlate100} /> | `$gel-color-tertiary-slate-100`  
| <ColorBlock color={Token.ColorTertiarySlate50} /> | Slate 50 | <ShowVar code={Token.ColorTertiarySlate50} /> | `$gel-color-tertiary-slate-50`  

## Fuel
| Example | Name | Value | SCSS Variables 
|---|---|---|---|
| <ColorBlock color={Token.ColorFuelCoal} /> | Coal | <ShowVar code={Token.ColorFuelCoal} /> | `$gel-color-fuel-coal` 
| <ColorBlock color={Token.ColorFuelBrownCoal} /> | Brown Coal | <ShowVar code={Token.ColorFuelBrownCoal} /> | `$gel-color-fuel-brown-coal` 
| <ColorBlock color={Token.ColorFuelDistilate} /> | Distilate | <ShowVar code={Token.ColorFuelDistilate} /> | `$gel-color-fuel-distilate` 
| <ColorBlock color={Token.ColorFuelBiomass} /> | Biomass | <ShowVar code={Token.ColorFuelBiomass} /> | `$gel-color-fuel-biomass` 
| <ColorBlock color={Token.ColorFuelSolar} /> | Solar | <ShowVar code={Token.ColorFuelSolar} /> | `$gel-color-fuel-solar` 
| <ColorBlock color={Token.ColorFuelWind} /> | Wind | <ShowVar code={Token.ColorFuelWind} /> | `$gel-color-fuel-wind` 
| <ColorBlock color={Token.ColorFuelHydro} /> | Hydro | <ShowVar code={Token.ColorFuelHydro} /> | `$gel-color-fuel-hydro` 
| <ColorBlock color={Token.ColorFuelRenewables} /> | Renewables | <ShowVar code={Token.ColorFuelRenewables} /> | `$gel-color-fuel-renewables` 
| <ColorBlock color={Token.ColorFuelDemandSide} /> | DemandSide | <ShowVar code={Token.ColorFuelDemandSide} /> | `$gel-color-fuel-demandSide` 
| <ColorBlock color={Token.ColorFuelLandfillGas} /> | Landfill Gas | <ShowVar code={Token.ColorFuelLandfillGas} /> | `$gel-color-fuel-landfill-gas` 
| <ColorBlock color={Token.ColorFuelSatPvOrSolarThermal} /> | SatPvOrSolarThermal | <ShowVar code={Token.ColorFuelSatPvOrSolarThermal} /> | `$gel-color-fuel-sat-pv-or-solar-thermal` 
| <ColorBlock color={Token.ColorFuelBattery} /> | Battery | <ShowVar code={Token.ColorFuelBattery} /> | `$gel-color-fuel-battery` 
| <ColorBlock color={Token.ColorFuelBatteryLoad } /> | Battery Load  | <ShowVar code={Token.ColorFuelBatteryLoad } /> | `$gel-color-fuel-battery-load ` 
| <ColorBlock color={Token.ColorFuelVppBatteryLoad} /> | Vpp Battery Load | <ShowVar code={Token.ColorFuelVppBatteryLoad} /> | `$gel-color-fuel-vpp-battery-load` 
| <ColorBlock color={Token.ColorFuelMain} /> | Main | <ShowVar code={Token.ColorFuelCoal} /> | `$gel-color-fuel-main` 
| <ColorBlock color={Token.ColorFuelLoad} /> | Load | <ShowVar code={Token.ColorFuelLoad} /> | `$gel-color-fuel-load` 

## Code

### CSS Variables

```css
.class_name {
  color: var(--gel-color-primary-purple-500);
}
```

### Sass

```css
.class_name {
  color: $gel-color-primary-purple-500;
}
```

### Less

```css
.class_name {
  color: @gel-color-primary-purple-500;
}
```

### JavaScript

```js
document.getElementById(id).style.color = token.ColorPrimaryPurple500;
```

### XML

```xml
<item android:color="@color/gel_color_primary_purple_500" />
```

### Swift

```swift
tokens.gelColorPrimaryPurple500
```
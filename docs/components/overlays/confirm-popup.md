---
id: confirm-popup
title: Confirm Popup
custom_edit_url: null
---

> Confirm popup displays a confirmation overlay displayed relatively to its target.

## Variants

There are 2 different confirm popups: Default and Danger with 2 different variants for each in terms of size.

![Confirm popups types](img/confirmpopup-types.svg)

:::info Figma

See all the available variants of confirm popups by clicking [here](https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=636%3A63264)

:::
:::info Code

Find the source code [here](https://primefaces.org/primevue/confirmpopup)

:::

## Demo

![Confirm popups demo](img/confirmpopup-demo.svg)

## Guidance

* Spot Confirm popup
    * should be displayed relative to the action item.
    * Use “Spacer 1” gap between the action element and the confirmation popups.
    * Dialog box and modals are of the highest elevation states in the system. Use “Elevation LG” for Confirmation popups.
    * Start position of the popup should be left aligned to the action item.
* Confirm Dialog
    * To be used when user needs uninterrupted focus on the action.
    * The background is disabled until user selects an option.
    * Use a backdrop as provided by the GEL library.

## When to use

* For confirming an action the user is about to take.
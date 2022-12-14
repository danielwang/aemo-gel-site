---
id: textarea
title: Textarea
custom_edit_url: null
---

import AdmonitionExt from '../admonitionExt'

> A text area includes a label and a longer area you can type multiple lines of text into.


## Variants

There are a total of 20 textarea to choose from. They are primarily divided into 4 different states (Default, Active, Filled, Disabled, and Error) of inputs.

| States | Sub States|
| ---    | ---       |
| ![Textarea State](img/textarea-state.svg) | ![Textarea Substate](img/textarea-sub-state.svg) |


## Demo

![Textarea demo](img/textarea-demo.svg)


## Guidance

* A textarea is ideally resizable by default. The textarea can also be non resizable as per the requirement.
* Textarea and Editor are similar. However, they differ in the fact that Editro allows user to format the text. 
* Labels, Required, Placeholders, Inline messages and Help text guidance same as in Inputs.

### When to use

* Use textarea to capture user inputs in the form of messages or long texts  .
* Inputs that allow user to write small paragraphs without formatting should be ideal situation to use textarea.

### When not to use

* If you want to provide user with format options, consider using a [editor](editor.md) instead.


## Designer assets

<AdmonitionExt type="figma" url="https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=696%3A97740" />


## Developer API

<AdmonitionExt type="vue" url="https://primefaces.org/primevue/inputnumber" />
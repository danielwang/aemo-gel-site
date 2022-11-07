---
id: progress-spinner
title: Progress Spinner
custom_edit_url: null
---

> A spinner is an animated element that appears a user's action to indicate that saving or loading is in progress.

## Variants

There are 3 different types of progress spinners available to choose from in GEL.

![Progress Spinner types](img/spinner-types.svg)

:::info Figma

See all the available variants of progress spinner by clicking [here](https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=618%3A57096)

:::
:::info Code

Find the source code [here](https://primefaces.org/primevue/progressspinner)

:::

## Demo

![Progress Spinner demo](img/spinner-demo.svg)

## Guidance

* User spinner to indicate background activity is in progress.
* Ideally, only one spinner should be used at a time. If a larger section of content is loading, consider using a larger size spinner instead of multiple smaller ones or a skeleton loader instead.
* Similar to progress bar, if the spinner is either MD or LG, they should be accompanied with a text informing what action/process is taking place.

## When to use

* When an action has been taken and the server/process takes time to load new data/content.
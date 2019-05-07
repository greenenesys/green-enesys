import { injectGlobal } from 'styled-components'
import GTAmericaMedium from './assets/fonts/GTAmerica-Medium.woff'
import GTAmericaMediumWOFF2 from './assets/fonts/GTAmerica-Medium.woff2'
import MaisonNeueMedium from './assets/fonts/MaisonNeue-Medium.woff'
import MaisonNeueMediumWOF2 from './assets/fonts/MaisonNeue-Medium.woff2'

import GTAmericaRegular from './assets/fonts/GTAmerica-Regular.woff'
import GTAmericaRegularWOFF2 from './assets/fonts/GTAmerica-Regular.woff2'

export default injectGlobal`
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

@font-face {
  font-family: 'test';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans');
}

@font-face {
    font-family: 'GT America';
    src: url(${GTAmericaMediumWOFF2}) format('woff2'),
        url(${GTAmericaMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
  font-family: 'GT America';
  src: url(${GTAmericaMediumWOFF2}) format('woff2'),
      url(${GTAmericaMedium}) format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
    font-family: 'MaisonNeue';
    src: url(${MaisonNeueMedium}) format('woff2'),
        url(${MaisonNeueMediumWOF2}) format('woff');
    font-weight: normal;
    font-style: normal;
}


html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
  :focus {
    outline: none;
  }
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
  min-height: 100vh;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}

.page-transition-enter {
  opacity: 0;
  will-change: opacity;
}

.page-transition-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-out;
}
                  
.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity 200ms ease-in;
}

/**
 * Slick Slider classes
 */
.slick-dots {
  list-style: none;
  padding: 0;
  margin-top: 4px;
  > li {
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;
  }
}

.slick-active {
  > * > img {
    transition: all 0.2 ease-in-out;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.2);
    transform: scale(1.2);
  }
}

.slick-thumb {

}


@media (max-width: 64em){
  #icon-1{
    height: auto;
    width: 28px;
    margin-top: 5px;
  }
  #icon-2{
    height: auto;
    width: 20px;
  }
  #icon-3{
    height: auto;
    width: 26px;
  }
  [data-id=tooltip]{
    display: none;
  }

  [data-id=tooltip]>h4{
    font-size: 14px;
    margin: 5px;
  }
}
@media (max-width: 48em){
  #icon-1{
    height: auto;
    width: 24px;
  }
  #icon-2{
    height: auto;
    width: 16px;
  }
  #icon-3{
    height: auto;
    width: 23px;
  }

  [data-id=tooltip]{
    display: none;
  }
}


`

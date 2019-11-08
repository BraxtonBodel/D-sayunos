import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Montserrat);
    html {
  line-height: 1.15;
  font-family: Montserrat;
   }

body {
  margin: 0;
   }

h1 {
  font-size: 2em;
  margin: 0.67em 0; }

hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible; }

pre {
  font-family: monospace, monospace;
  font-size: 1em; }

a {
  background-color: transparent; }

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; }

b,
strong {
  font-weight: bolder; }

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em; }

small {
  font-size: 80%; }

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }

sub {
  bottom: -0.25em; }

sup {
  top: -0.5em; }

img {
  border-style: none; }

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0; }

button,
input {
  overflow: visible; }

button,
select {
  text-transform: none; }

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0; }

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText; }

fieldset {
  padding: 0.35em 0.75em 0.625em; }

legend {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal; }

progress {
  vertical-align: baseline; }

textarea {
  overflow: auto; }

[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0; }

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px; }

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit; }

details {
  display: block; }

summary {
  display: list-item; }

template {
  display: none; }

[hidden] {
  display: none; }

.foundation-mq {
  font-family: "small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em"; }

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 100%; }

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit; }

body {
  margin: 0;
  padding: 0;
  background: #fefefe;
  font-family: Montserrat;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

img {
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic; }

textarea {
  height: auto;
  min-height: 50px;
  border-radius: 3px; }

select {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 100%;
  border-radius: 3px; }

.map_canvas img,
.map_canvas embed,
.map_canvas object,
.mqa-display img,
.mqa-display embed,
.mqa-display object {
  max-width: none !important; }

button {
  padding: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  border-radius: 3px;
  background: transparent;
  line-height: 1;
  cursor: auto; }
  [data-whatinput='mouse'] button {
    outline: 0; }

pre {
  overflow: auto; }

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; }

.is-visible {
  display: block !important; }

.is-hidden {
  display: none !important; }

div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0; }

p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility; }

em,
i {
  font-style: italic;
  line-height: inherit; }

strong,
b {
  font-weight: bold;
  line-height: inherit; }

small {
  font-size: 80%;
  line-height: inherit; }

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  color: inherit;
  text-rendering: optimizeLegibility; }
  h1 small, .h1 small,
  h2 small, .h2 small,
  h3 small, .h3 small,
  h4 small, .h4 small,
  h5 small, .h5 small,
  h6 small, .h6 small {
    line-height: 0;
    color: #cacaca; }

h1, .h1 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h2, .h2 {
  font-size: 1.25rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h3, .h3 {
  font-size: 1.1875rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h4, .h4 {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h5, .h5 {
  font-size: 1.0625rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h6, .h6 {
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

@media print, screen and (min-width: 40em) {
  h1, .h1 {
    font-size: 3rem; }
  h2, .h2 {
    font-size: 2.5rem; }
  h3, .h3 {
    font-size: 1.9375rem; }
  h4, .h4 {
    font-size: 1.5625rem; }
  h5, .h5 {
    font-size: 1.25rem; }
  h6, .h6 {
    font-size: 1rem; } }

a {
  line-height: inherit;
  color: #ddd;
  text-decoration: none;
  cursor: pointer; }
  a:hover, a:focus {
    color: white; }
  a img {
    border: 0; }

hr {
  clear: both;
  max-width: 62.5rem;
  height: 0;
  margin: 1.25rem auto;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #cacaca;
  border-left: 0; }

ul,
ol,
dl {
  margin-bottom: 1rem;
  list-style-position: outside;
  line-height: 1.6; }

li {
  font-size: inherit; }

ul {
  margin-left: 1.25rem;
  list-style-type: disc; }

ol {
  margin-left: 1.25rem; }

ul ul, ol ul, ul ol, ol ol {
  margin-left: 1.25rem;
  margin-bottom: 0; }

dl {
  margin-bottom: 1rem; }
  dl dt {
    margin-bottom: 0.3rem;
    font-weight: bold; }

blockquote {
  margin: 0 0 1rem;
  padding: 0.5625rem 1.25rem 0 1.1875rem;
  border-left: 1px solid #cacaca; }
  blockquote, blockquote p {
    line-height: 1.6;
    color: #8a8a8a; }

cite {
  display: block;
  font-size: 0.8125rem;
  color: #8a8a8a; }
  cite:before {
    content: "— "; }

abbr, abbr[title] {
  border-bottom: 1px dotted #0a0a0a;
  cursor: help;
  text-decoration: none; }

figure {
  margin: 0; }

code {
  padding: 0.125rem 0.3125rem 0.0625rem;
  border: 1px solid #cacaca;
  background-color: #e6e6e6;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  font-weight: normal;
  color: #0a0a0a; }

kbd {
  margin: 0;
  padding: 0.125rem 0.25rem 0;
  background-color: #e6e6e6;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  color: #0a0a0a;
  border-radius: 3px; }

.subheader {
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  line-height: 1.4;
  color: #8a8a8a; }

.lead {
  font-size: 125%;
  line-height: 1.6; }

.stat {
  font-size: 2.5rem;
  line-height: 1; }
  p + .stat {
    margin-top: -1rem; }

ul.no-bullet, ol.no-bullet {
  margin-left: 0;
  list-style: none; }

.text-left {
  text-align: left; }

.text-right {
  text-align: right; }

.text-center {
  text-align: center; }

.text-justify {
  text-align: justify; }

@media print, screen and (min-width: 40em) {
  .medium-text-left {
    text-align: left; }
  .medium-text-right {
    text-align: right; }
  .medium-text-center {
    text-align: center; }
  .medium-text-justify {
    text-align: justify; } }

@media print, screen and (min-width: 64em) {
  .large-text-left {
    text-align: left; }
  .large-text-right {
    text-align: right; }
  .large-text-center {
    text-align: center; }
  .large-text-justify {
    text-align: justify; } }

.show-for-print {
  display: none !important; }

@media print {
  * {
    background: transparent !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    color: black !important;
    text-shadow: none !important; }
  .show-for-print {
    display: block !important; }
  .hide-for-print {
    display: none !important; }
  table.show-for-print {
    display: table !important; }
  thead.show-for-print {
    display: table-header-group !important; }
  tbody.show-for-print {
    display: table-row-group !important; }
  tr.show-for-print {
    display: table-row !important; }
  td.show-for-print {
    display: table-cell !important; }
  th.show-for-print {
    display: table-cell !important; }
  a,
  a:visited {
    text-decoration: underline; }
  a[href]:after {
    content: " (" attr(href) ")"; }
  .ir a:after,
  a[href^='javascript:']:after,
  a[href^='#']:after {
    content: ''; }
  abbr[title]:after {
    content: " (" attr(title) ")"; }
  pre,
  blockquote {
    border: 1px solid #8a8a8a;
    page-break-inside: avoid; }
  thead {
    display: table-header-group; }
  tr,
  img {
    page-break-inside: avoid; }
  img {
    max-width: 100% !important; }
  @page {
    margin: 0.5cm; }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3; }
  h2,
  h3 {
    page-break-after: avoid; }
  .print-break-inside {
    page-break-inside: auto; } }

[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],
textarea {
  display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 100%;
  height: 2.4375rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  border: 1px solid #cacaca;
  border-radius: 3px;
  background-color: #fefefe;
  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  -webkit-transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,
  textarea:focus {
    outline: none;
    border: 1px solid #8a8a8a;
    background-color: #fefefe;
    -webkit-box-shadow: 0 0 5px #cacaca;
            box-shadow: 0 0 5px #cacaca;
    -webkit-transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
    transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s; }

textarea {
  max-width: 100%; }
  textarea[rows] {
    height: auto; }

input:disabled, input[readonly],
textarea:disabled,
textarea[readonly] {
  background-color: #e6e6e6;
  cursor: not-allowed; }

[type='submit'],
[type='button'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-radius: 3px; }

input[type='search'] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

::-webkit-input-placeholder {
  color: #cacaca; }

:-ms-input-placeholder {
  color: #cacaca; }

::-ms-input-placeholder {
  color: #cacaca; }

::placeholder {
  color: #cacaca; }

[type='file'],
[type='checkbox'],
[type='radio'] {
  margin: 0 0 1rem; }

[type='checkbox'] + label,
[type='radio'] + label {
  display: inline-block;
  vertical-align: baseline;
  margin-left: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 0; }
  [type='checkbox'] + label[for],
  [type='radio'] + label[for] {
    cursor: pointer; }

label > [type='checkbox'],
label > [type='radio'] {
  margin-right: 0.5rem; }

[type='file'] {
  width: 100%; }

label {
  display: block;
  margin: 0;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.8;
  color: #0a0a0a; }
  label.middle {
    margin: 0 0 1rem;
    padding: 0.5625rem 0; }

.help-text {
  margin-top: -0.5rem;
  font-size: 0.8125rem;
  font-style: italic;
  color: #0a0a0a; }

.input-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch; }
  .input-group > :first-child, .input-group > :first-child.input-group-button > * {
    border-radius: 3px 0 0 3px; }
  .input-group > :last-child, .input-group > :last-child.input-group-button > * {
    border-radius: 0 3px 3px 0; }

.input-group-label, .input-group-field, .input-group-button, .input-group-button a,
.input-group-button input,
.input-group-button button,
.input-group-button label {
  margin: 0;
  white-space: nowrap; }

.input-group-label {
  padding: 0 1rem;
  border: 1px solid #cacaca;
  background: #e6e6e6;
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center; }
  .input-group-label:first-child {
    border-right: 0; }
  .input-group-label:last-child {
    border-left: 0; }

.input-group-field {
  border-radius: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0px;
      -ms-flex: 1 1 0px;
          flex: 1 1 0px;
  min-width: 0; }

.input-group-button {
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto; }
  .input-group-button a,
  .input-group-button input,
  .input-group-button button,
  .input-group-button label {
    -webkit-align-self: stretch;
        -ms-flex-item-align: stretch;
            align-self: stretch;
    height: auto;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1rem; }

fieldset {
  margin: 0;
  padding: 0;
  border: 0; }

legend {
  max-width: 100%;
  margin-bottom: 0.5rem; }

.fieldset {
  margin: 1.125rem 0;
  padding: 1.25rem;
  border: 1px solid #cacaca; }
  .fieldset legend {
    margin: 0;
    margin-left: -0.1875rem;
    padding: 0 0.1875rem; }

select {
  height: 2.4375rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 1px solid #cacaca;
  border-radius: 3px;
  background-color: #fefefe;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>");
  background-origin: content-box;
  background-position: right -1rem center;
  background-repeat: no-repeat;
  background-size: 9px 6px;
  padding-right: 1.5rem;
  -webkit-transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s; }
  @media screen and (min-width: 0\0) {
    select {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg=="); } }
  select:focus {
    outline: none;
    border: 1px solid #8a8a8a;
    background-color: #fefefe;
    -webkit-box-shadow: 0 0 5px #cacaca;
            box-shadow: 0 0 5px #cacaca;
    -webkit-transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
    transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s; }
  select:disabled {
    background-color: #e6e6e6;
    cursor: not-allowed; }
  select::-ms-expand {
    display: none; }
  select[multiple] {
    height: auto;
    background-image: none; }
`;

/*
 * Copyright 2016 Joa Ebert
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const @type !Array<!string> */
const selectors = [
  // ---------------------------- // ---------------------------
  // Selector                     // Website / Script
  // ---------------------------- // ---------------------------
  "#cookieChoiceInfo",            // BlogSpot
  "#cookie-banner",               // Random guess
  ".cookie-banner",               // Random guess
  "#cookiebanner",                // Random guess
  ".cookiebanner",                // https://github.com/dobarkod/cookie-banner
  "#cookies-eu-banner",           // https://github.com/Alex-D/Cookies-EU-banner
  "cc_banner-wrapper",            // https://silktide.com/tools/cookie-consent/
  "#cookie-bar",                  // http://www.primebox.co.uk/projects/jquery-cookiebar/
  ".cookie-bar",                  // Random guess
  "#cookiebar",                   // Random guess
  ".cookiebar",                   // Random guess
  "#cookie-law",                  // Random guess
  "#cookielaw",                   // Random guess
  ".cookie-law",                  // Random guess
  ".cookielaw",                   // Random guess
  // ---------------------------- // ---------------------------
];

/** @const @type !string */
const cssClass = "banned-by-cookie-banner";

for(let selector of selectors) {
  /** @const @type ?Element */
  const element = document.querySelector(selector);

  if(typeof Element !== "undefined" && element instanceof Element) {
    /** @const @type ?string */
    const klass = element.getAttribute("class");

    element.setAttribute("class", (klass ? klass + " " : "") + cssClass);

    break;
  }
}
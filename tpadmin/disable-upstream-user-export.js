// ==UserScript==
// @name         TP Admin: Disable Upstream Member Export.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable "Queue For The Next Upstream Member Export" button in TP Admin. This only ever seems to be clicked by accident, so disable it by default.
// @author       SSPS Engineering
// @match        *.trusteepartners.com.au/*
// @grant        none
// ==/UserScript==

(function ($) {
  'use strict';
  $("a:contains('Queue For The Next Upstream Member Creation Export')").css({ display: 'none' }).after('<div>-- Queue for Upstream Member Export disabled --</div>');
})($);
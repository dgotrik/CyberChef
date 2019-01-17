/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2018
* @license Apache-2.0
*/
import AddOrSubtractKey from "../../operations/AddOrSubtractKey";
import GematriaAtbash from "../../operations/GematriaAtbash";
import GematriaSum from "../../operations/GematriaSum";
import TextTransliteration from "../../operations/TextTransliteration";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.LiberPrimus = {
    "Add or Subtract Key": AddOrSubtractKey,
    "Gematria Atbash": GematriaAtbash,
    "Gematria Sum": GematriaSum,
    "Text Transliteration": TextTransliteration,
};

export default OpModules;

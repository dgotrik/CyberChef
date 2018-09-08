/**
 * @author onecool [keynotfoundhotel@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation";
import OperationError from "../errors/OperationError";
import Utils from "../Utils";
import Gematria from "../config/Gematria.json";

/**
 * Text Translation operation
 */
class TextTransliteration extends Operation {

    /**
     * TextTranslation constructor
     */

    constructor() {
        super();

        this.name = "Text Transliteration";
        this.module = "LiberPrimus";
        this.description = "Converts English, Gematria, or the Gematria Index into English, Gematria, or Gematria Index.  <br><br>e.g.<code>\u16b3\u16aa\u16b3\u16d6</code> becomes <code>cake</code>";
        this.infoURL = "http://uncovering-cicada.wikia.com/wiki/Gematria_Primus";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [{
                name: "Input Format",
                type: "option", // the argument data type, see the next section for valid types
                value: ["English", "Index", "Runic", "Prime"] // the default value of the argument
            },
            {
                name: "Input Space Type",
                type: "option",
                value: ["SPACE", "DASH(-)", "PERIOD(.)", "COMMA", "none"]
            },
            {
                name: "Output Format",
                type: "option", // the argument data type, see the next section for valid types
                value: ["English", "Index", "Runic", "Prime"] // the default value of the argument
            },
            {
                name: "Output Space Type",
                type: "option",
                value: ["SPACE", "DASH(-)", "PERIOD(.)", "COMMA(,)", "none"]
            }
        ];
    }

        _convertPrime(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter) {
            let returnVal = "";
            if (outputFormat === "prime") {
                return input;
            }
            input = Utils._massageText(input, inputSpaceDelimiter);
            let indices = input.split(" ");
            // input = input.replace(new RegExp(inputSpaceDelimiter, "g"), " "+inputSpaceDelimiter+" ");
            // input = input.replace(new RegExp(" {2}", "g"), " ");
            // let indices = input.split(/[.,\/ -\"\n\r\t;:<>\?\\\'\[\]\{\}]/);
            indices.forEach(function(entry) {
                let lookup = Utils._lookup(entry, outputFormat);
                if (entry === inputSpaceDelimiter || lookup === "29") {
                    returnVal += outputSpaceDelimiter;
                } else if (lookup === "") {
                    returnVal += entry;
                } else {
                    returnVal += lookup;
                }
                if (outputFormat === "index") {
                    returnVal += " ";
                }
            });
            if (outputFormat === "index") {
                //     returnVal = this._massageText(returnVal, outputSpaceDelimiter);
                //    returnVal = returnVal.replace(new RegExp(outputSpaceDelimiter, "g"), " "+outputSpaceDelimiter+" ");
                returnVal = returnVal.replace(new RegExp(" ", "g"), ""); // s p a c e m a g i c
            }
            return returnVal;
        }

    _convertIndex(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter) {
        let returnVal = "";
        if (outputFormat === "index") {
            return input;
        }
        input = Utils._massageText(input, inputSpaceDelimiter);
        let indices = input.split(" ");
        // input = input.replace(new RegExp(inputSpaceDelimiter, "g"), " "+inputSpaceDelimiter+" ");
        // input = input.replace(new RegExp(" {2}", "g"), " ");
        // let indices = input.split(/[.,\/ -\"\n\r\t;:<>\?\\\'\[\]\{\}]/);
        indices.forEach(function(entry) {
            let lookup = Utils._lookup(entry, outputFormat);
            if (entry === inputSpaceDelimiter || lookup === "29") {
                returnVal += outputSpaceDelimiter;
            } else if (lookup === "") {
                returnVal += entry;
            } else {
                returnVal += lookup;
            }
            if (outputFormat === "index") {
                returnVal += " ";
            }
        });
        if (outputFormat === "index") {
            //     returnVal = this._massageText(returnVal, outputSpaceDelimiter);
            //    returnVal = returnVal.replace(new RegExp(outputSpaceDelimiter, "g"), " "+outputSpaceDelimiter+" ");
            returnVal = returnVal.replace(new RegExp(" ", "g"), ""); // s p a c e m a g i c
        }
        return returnVal;
    }

    _convertGematria(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter) {
        let returnVal = "";
        if (outputFormat === "rune") {
            return input;
        }
        for (let i = 0; i < input.length; i++) {
            let lookup = Utils._lookup(input[i], outputFormat);
            if (input[i] === inputSpaceDelimiter) returnVal += outputSpaceDelimiter;
            else if (lookup === "") {
                returnVal += input[i];
            } else {
                returnVal += lookup;
            }
            if (outputFormat === "index") {
                returnVal += " ";
            }
        }
        return returnVal;
    }

    _convertEnglish(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter) {
        let returnVal = "";
        input = Utils._massageText(input, inputSpaceDelimiter);
        let words = input.split(inputSpaceDelimiter);
        let outputWords = [];
        words.forEach(function(word) {
            if (word !== "") {
                outputWords.push(Utils._parseEnglishWord(word, outputFormat));
            }
        });

        returnVal = outputWords.join(outputSpaceDelimiter);
        if (outputFormat === "index") { //format the numbers correctly
            // returnVal = this._massageText(returnVal, outputSpaceDelimiter);;
            returnVal = returnVal.replace(new RegExp(outputSpaceDelimiter, "g"), " " + outputSpaceDelimiter + " ");
            returnVal = returnVal.replace(new RegExp(" {2}", "g"), " "); //replace double spaces with single
        }
        return returnVal;
    }






    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        // const [firstArg, secondArg] = args;
        console.log(args.toString());
        let inputFormat = Utils.LPformat(args[0]);
        let inputSpaceDelimiter = Utils.spaceDelimiter(args[1]);

        let outputFormat = Utils.LPformat(args[2]);
        let outputSpaceDelimiter = Utils.spaceDelimiter(args[3]);
        let returnVal = "";


        console.log(inputFormat+ " " + inputSpaceDelimiter + " " + outputFormat + " " + outputSpaceDelimiter + " " + input);
        if (outputFormat === "index" && outputSpaceDelimiter !== "-") {
            return "Please use DASH(-) space delimiters when outputting indices";
        }
        if (inputFormat === "letter") {
            returnVal = this._convertEnglish(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter);
        } else if (inputFormat === "rune") {
            returnVal = this._convertGematria(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter);
        } else if (inputFormat === "index") {
            returnVal = this._convertIndex(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter);
        } else if (inputFormat === "prime") {
            returnVal = this._convertPrime(input, outputFormat, inputSpaceDelimiter, outputSpaceDelimiter);
        }
        return returnVal;
    }

    /**
     * Highlight Text Translation
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos;
    }

    /**
     * Highlight Text Translation in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos;
    }

}

export default TextTransliteration;

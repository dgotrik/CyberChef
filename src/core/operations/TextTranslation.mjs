/**
 * @author onecool [keynotfoundhotel@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation";
import OperationError from "../errors/OperationError";

/**
 * Text Translation operation
 */
class TextTranslation extends Operation {

    /**
     * TextTranslation constructor
     */
    constructor() {
        super();

        this.name = "Text Translation";
        this.module = "LiberPrimus";
        this.description = "Converts English, Gematria, or the Gematria Index into English, Gematria, or Gematria Index.  <br><br>e.g.<code>\u16b3\u16aa\u16b3\u16d6</code> becomes <code>cake</code>";
        this.infoURL = "http://uncovering-cicada.wikia.com/wiki/Gematria_Primus";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            /* Example arguments. See the project wiki for full details.
            {
                name: "First arg",
                type: "string",
                value: "Don't Panic"
            },
            {
                name: "Second arg",
                type: "number",
                value: 42
            }
            */
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        // const [firstArg, secondArg] = args;

        throw new OperationError("Test");
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

export default TextTranslation;

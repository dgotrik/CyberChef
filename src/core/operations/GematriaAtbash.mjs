/**
 * @author onecool [keynotfoundhotel@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation";
import OperationError from "../errors/OperationError";

/**
 * Gematria Atbash operation
 */
class GematriaAtbash extends Operation {

    /**
     * GematriaAtbash constructor
     */
    constructor() {
        super();

        this.name = "Gematria Atbash";
        this.module = "LiberPrimus";
        this.description = "Applies the 'Reverse Gematria', a.k.a. Atbash Cipher, to the text.  ";
        this.infoURL = "https://vignette.wikia.nocookie.net/uncovering-cicada/images/6/66/Runes-warning.jpg/revision/latest?cb=20140108163159";
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
     * Highlight Gematria Atbash
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
     * Highlight Gematria Atbash in reverse
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

export default GematriaAtbash;

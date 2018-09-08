/**
 * @author onecool [keynotfoundhotel@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation";
import OperationError from "../errors/OperationError";

/**
 * gematriaSum operation
 */
class GematriaSum extends Operation {

    /**
     * GematriaSum constructor
     */
    constructor() {
        super();

        this.name = "Gematria Sum";
        this.module = "LiberPrimus";
        this.description = "CICADA 3301: Converts english words into their 'Gematria' sum according to the prime values of the Gematria Primus. If you'd like to find the Gematria Sum of a phrase, remove all the spaces.  Example:  PATIENCEISAVIRTUE  will sum to 761";
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
     * Highlight gematriaSum
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
     * Highlight gematriaSum in reverse
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

export default GematriaSum;

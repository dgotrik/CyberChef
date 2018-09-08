/**
 * @author onecool [keynotfoundhotel@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation";
import OperationError from "../errors/OperationError";

/**
 * Add or Subtract Key operation
 */
class AddOrSubtractKey extends Operation {

    /**
     * AddOrSubtractKey constructor
     */
    constructor() {
        super();

        this.name = "Add or Subtract Key";
        this.module = "LiberPrimus";
        this.description = "CICADA 3301: Operate on text based on the Gematria Primus.  Valid inputs are Gematria(\u16a2\u16b7\u16aa), Index(0..28), English(F,U,TH,...) and outputs the same.  Can add or subtract values based on the key.";
        this.infoURL = "http://cicada3301.boards.net/thread/38/decrypt-runes-vigen-re-cipher";
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
     * Highlight Add or Subtract Key
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
     * Highlight Add or Subtract Key in reverse
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

export default AddOrSubtractKey;

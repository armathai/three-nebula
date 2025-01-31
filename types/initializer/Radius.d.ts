/**
 * Sets the radius property on initialized particles.
 *
 */
export default class Radius extends Initializer {
    /**
     * Creates a Radius initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.width - The width of the particle radius
     * @property {number} json.height - The height of the particle radius
     * @property {number} json.center - The center of the particle radius
     * @return {Radius}
     */
    static fromJSON(json: object): Radius;
    /**
     * Constructs a Radius initializer instance.
     *
     * @param {number} width - The width of the particle radius
     * @param {number} height - The height of the particle radius
     * @param {boolean} [center=false] - Determines whether to average the radius value
     * @return void
     */
    constructor(width: number, height: number, center?: boolean, isEnabled?: boolean);
    /**
     * @desc The radius span which is used to set the particle radius value.
     * @type {Span}
     */
    radius: Span;
    /**
     * Resets the initializer properties.
     * Clears all previously set zones and resets the zones according to args passed.
     *
     * @param {number} width - The width of the particle radius
     * @param {number} height - The height of the particle radius
     * @param {boolean} [center=false] - Determines whether to average the radius value
     * @return void
     */
    reset(width: number, height: number, center?: boolean): void;
}
import Initializer from "./Initializer";
//# sourceMappingURL=Radius.d.ts.map
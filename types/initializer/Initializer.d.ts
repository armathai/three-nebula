/**
 * The base Emitter / Particle property class.
 *
 * @abstract
 */
export default class Initializer {
    /**
     * Determines if the initializer requires a Web GL API to be provided to its constructor.
     * If true, the WebGL API will need to be provided as the first argument to the constructor
     * and fromJSON methods.
     *
     * @return {boolean}
     */
    static requiresWebGlApi(): boolean;
    /**
     * Returns a new instance of the initializer from the JSON object passed.
     *
     * @abstract
     * @param {object} json - JSON object containing the required constructor properties
     * @return {Behaviour}
     */
    static fromJSON(json: object): Behaviour;
    /**
     * Constructs an Initializer instance.
     *
     * @param {string} [type=INITIALIZER_TYPE_ABSTRACT] - The intiializer type
     * @param {boolean} [isEnabled=true] - Determines if the initializer should be enabled or not
  
     * @return void
     */
    constructor(type?: string, isEnabled?: boolean);
    type: string;
    isEnabled: boolean;
    /**
     * Initializes the property on the emitter or particle.
     *
     * @see {@link '../emitter/emitter.js'} setupParticle
     * @param {Emitter} emitter - the emitter to initialize the property on
     * @param {Particle} particle - the particle to intiialize the property on
     * @return void
     */
    init(emitter: Emitter, particle: Particle): void;
    /**
     * @abstract
     */
    reset(): void;
    /**
     * Place custom property initialization code in this method in the subclass.
     *
     * @param {object} target - either an Emitter or a Particle
     * @abstract
     */
    initialize(target: object): void;
}
//# sourceMappingURL=Initializer.d.ts.map
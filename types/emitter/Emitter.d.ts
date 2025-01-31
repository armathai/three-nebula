/**
 * Emitters are the System engine's particle factories. They cause particles to
 * be rendered by emitting them, and store all particle initializers and behaviours.
 *
 */
export default class Emitter extends Particle {
    /**
     * @desc The particles emitted by this emitter.
     * @type {array}
     */
    particles: any[];
    /**
     * @desc The initializers for particles emitted by this emitter.
     * @type {array}
     */
    initializers: any[];
    /**
     * @desc The behaviours for the emitter.
     * @type {array}
     */
    emitterBehaviours: any[];
    /**
     * @desc The current emit iteration.
     * @type {integer}
     */
    currentEmitTime: integer;
    /**
     * @desc The total number of times the emitter should emit particles.
     * @type {integer}
     */
    totalEmitTimes: integer;
    /**
     * @desc The friction coefficient for all particle to emit by.
     * @type {number}
     */
    damping: number;
    /**
     * @desc Ensures that particles emitted by this emitter are positioned
     * according to the emitter's properties.
     * @type {boolean}
     */
    bindEmitter: boolean;
    /**
     * @desc Determines if the emitter will dispatch internal events. Defaults
     * to false
     * @type {boolean}
     */
    bindEmitterEvent: boolean;
    /**
     * @desc The number of particles to emit per second (a [particle]/b [s])
     * @type {Rate}
     */
    rate: Rate;
    /**
     * @desc Determines if the emitter is emitting particles or not.
     * @type {boolean}
     */
    isEmitting: boolean;
    /**
     * @desc The emitter's id.
     * @type {string}
     */
    id: string;
    cID: number;
    name: string;
    /**
     * @desc The index of the emitter as it is added to the system.
     * @type {number|undefined}
     */
    index: number | undefined;
    /**
     * @desc The emitter's internal event dispatcher.
     * @type {EventDispatcher}
     */
    eventDispatcher: EventDispatcher;
    /**
     * Proxy method for the internal event dispatcher's dispatchEvent method.
     *
     * @param {string} event - The event to dispatch
     * @param {object<Particle>} [target=this] - The event target
     */
    dispatch(event: string, target?: Emitter): void;
    /**
     * Sets the emitter rate.
     *
     * @param {Rate} rate - a rate initializer object
     * @return {Emitter}
     */
    setRate(rate: Rate): Emitter;
    /**
     * Sets the position of the emitter.
     *
     * @param {object} newPosition - an object the new x, y and z props
     * @return {Emitter}
     */
    setPosition(newPosition?: object): Emitter;
    /**
     * Sets the rotation of the emitter.
     *
     * @param {object} newRotation - an object the new x, y and z props
     * @return {Emitter}
     */
    setRotation(newRotation?: object): Emitter;
    /**
     * Sets the total number of times the emitter should emit particles as well as
     * the emitter's life. Also intializes the emitter rate.
     * This enables the emitter to emit particles.
     *
     * @param {number} [totalEmitTimes=Infinity] - the total number of times to emit particles
     * @param {number} [life=Infinity] - the life of this emitter in milliseconds
     * @return {Emitter}
     */
    emit(totalEmitTimes?: number, life?: number): Emitter;
    /**
     * Experimental emit method that is designed to be called from the System.emit method.
     *
     * @return {Emitter}
     */
    experimental_emit(): Emitter;
    /**
     * Sets the total emit times for the emitter.
     *
     * @param {number} [totalEmitTimes=Infinity] - the total number of times to emit particles
     * @return {Emitter}
     */
    setTotalEmitTimes(totalEmitTimes?: number): Emitter;
    /**
     * Sets the life of the emitter.
     *
     * @param {number} [life=Infinity] - the life of this emitter in milliseconds
     * @return {Emitter}
     */
    setLife(life?: number): Emitter;
    /**
     * Stops the emitter from emitting particles.
     *
     * @return void
     */
    stopEmit(): void;
    /**
     * Kills all of the emitter's particles.
     *
     * @return void
     */
    removeAllParticles(): void;
    /**
     * Adds a particle initializer to the emitter.
     * Each initializer is run on each particle when they are created.
     *
     * @param {Initializer} initializer - The initializer to add
     * @return {Emitter}
     */
    addInitializer(initializer: Initializer): Emitter;
    /**
     * Adds multiple particle initializers to the emitter.
     *
     * @param {array<Initializer>} initializers - an array of particle initializers
     * @return {Emitter}
     */
    addInitializers(initializers: array<Initializer>): Emitter;
    /**
     * Sets the emitter's particle initializers.
     *
     * @param {array<Initializer>} initializers - an array of particle initializers
     * @return {Emitter}
     */
    setInitializers(initializers: array<Initializer>): Emitter;
    /**
     * Removes an initializer from the emitter's initializers array.
     *
     * @param {Initializer} initializer - The initializer to remove
     * @return {Emitter}
     */
    removeInitializer(initializer: Initializer): Emitter;
    /**
     * Removes all initializers.
     *
     * @return {Emitter}
     */
    removeAllInitializers(): Emitter;
    /**
     * Adds a behaviour to the emitter. All emitter behaviours are added to each particle when
     * they are emitted.
     *
     * @param {Behaviour} behaviour - The behaviour to add to the emitter
     * @return {Emitter}
     */
    addBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Adds multiple behaviours to the emitter.
     *
     * @param {array<Behaviour>} behaviours - an array of emitter behaviours
     * @return {Emitter}
     */
    addBehaviours(behaviours: array<Behaviour>): Emitter;
    /**
     * Sets the emitter's behaviours.
     *
     * @param {array<Behaviour>} behaviours - an array of emitter behaviours
     * @return {Emitter}
     */
    setBehaviours(behaviours: array<Behaviour>): Emitter;
    /**
     * Removes the behaviour from the emitter's behaviours array.
     *
     * @param {Behaviour} behaviour - The behaviour to remove
     * @return {Emitter}
     */
    removeBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Removes all behaviours from the emitter.
     *
     * @return {Emitter}
     */
    removeAllBehaviours(): Emitter;
    /**
     * Adds an emitter behaviour to the emitter.
     *
     * @param {Behaviour} behaviour - The behaviour to add to the emitter
     * @return {Emitter}
     */
    addEmitterBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Adds multiple behaviours to the emitter.
     *
     * @param {array<Behaviour>} behaviours - an array of emitter behaviours
     * @return {Emitter}
     */
    addEmitterBehaviours(behaviours: array<Behaviour>): Emitter;
    /**
     * Sets the emitter's behaviours.
     *
     * @param {array<Behaviour>} behaviours - an array of emitter behaviours
     * @return {Emitter}
     */
    setEmitterBehaviours(behaviours: array<Behaviour>): Emitter;
    /**
     * Removes the behaviour from the emitter's behaviours array.
     *
     * @param {Behaviour} behaviour - The behaviour to remove
     * @return {Emitter}
     */
    removeEmitterBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Removes all behaviours from the emitter.
     *
     * @return {Emitter}
     */
    removeAllEmitterBehaviours(): Emitter;
    /**
     * Adds the event listener for the EMITTER_DEAD event.
     *
     * @param {onEmitterDead} - The function to call when the EMITTER_DEAD is dispatched.
     * @return {Emitter}
     */
    addOnEmitterDeadEventListener(onEmitterDead: any): Emitter;
    /**
     * Creates a particle by retreiving one from the pool and setting it up with
     * the supplied initializer and behaviour.
     *
     * @return {Emitter}
     */
    createParticle(): Emitter;
    /**
     * Sets up a particle by running all initializers on it and setting its behaviours.
     * Also adds the particle to this.particles.
     *
     * @param {Particle} particle - The particle to setup
     * @return void
     */
    setupParticle(particle: Particle, index: any): void;
    /**
     * Updates the emitter according to the time passed by calling the generate
     * and integrate methods. The generate method creates particles, the integrate
     * method updates existing particles.
     *
     * If the emitter age is greater than time, the emitter is killed.
     *
     * This method also indexes/deindexes particles.
     *
     * @param {number} time - System engine time
     * @return void
     */
    update(time: number): void;
    /**
     * Updates the emitter's emitter behaviours.
     *
     * @param {number} time - System engine time
     * @return void
     */
    updateEmitterBehaviours(time: number): void;
    /**
     * Runs the integration algorithm on the emitter and all particles.
     * Updates the particles with the timstamp passed.
     *
     * @param {number} time - System engine time
     * @return void
     */
    integrate(time: number): void;
    /**
     * Generates new particles.
     *
     * @param {number} time - System engine time
     * @return void
     */
    generate(time: number): void;
}
import Particle from "../core/Particle";
import EventDispatcher from "../events";
//# sourceMappingURL=Emitter.d.ts.map
/**
 * Uses a three THREE.Geometry to determine the zone parameters.
 *
 */
export default class MeshZone extends Zone {
    /**
     * @constructs {MeshZone}
     *
     * @param {THREE.Geometry|Mesh} bounds - the geometry or mesh that will determine the zone bounds
     * @param {number} scale - the zone scale
     * @param {THREE.Geometry} ThreeGeometry - the three geometry class
     * @return void
     */
    constructor(bounds: THREE.Geometry | Mesh, scale: number, ThreeGeometry: THREE.Geometry);
    geometry: any;
    scale: number;
    getPosition(): import("..").Vector3D;
}
import Zone from "./Zone";
//# sourceMappingURL=MeshZone.d.ts.map
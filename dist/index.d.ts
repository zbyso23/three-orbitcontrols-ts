import * as THREE from 'three';
/**
* @author qiao / https://github.com/qiao
* @author mrdoob / http://mrdoob.com
* @author alteredq / http://alteredqualia.com/
* @author WestLangley / http://github.com/WestLangley
* @author erich666 / http://erichaines.com
* @author nicolaspanel / http://github.com/nicolaspanel
*
* This set of controls performs orbiting, dollying (zooming), and panning.
* Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
*    Orbit - left mouse / touch: one finger move
*    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
*    Pan - right mouse, or arrow keys / touch: three finger swipe
*/
export declare class OrbitControls extends THREE.EventDispatcher {
    object: THREE.Camera;
    domElement: HTMLElement | HTMLDocument;
    window: Window;
    enabled: boolean;
    target: THREE.Vector3;
    enableZoom: boolean;
    zoomSpeed: number;
    minDistance: number;
    maxDistance: number;
    enableRotate: boolean;
    rotateSpeed: number;
    enablePan: boolean;
    keyPanSpeed: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    minZoom: number;
    maxZoom: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    enableKeys: boolean;
    keys: {
        LEFT: number;
        UP: number;
        RIGHT: number;
        BOTTOM: number;
    };
    mouseButtons: {
        ORBIT: THREE.MOUSE;
        ZOOM: THREE.MOUSE;
        PAN: THREE.MOUSE;
    };
    enableDamping: boolean;
    dampingFactor: number;
    protected spherical: THREE.Spherical;
    protected sphericalDelta: THREE.Spherical;
    protected scale: number;
    protected target0: THREE.Vector3;
    protected position0: THREE.Vector3;
    protected zoom0: any;
    protected state: number;
    protected panOffset: THREE.Vector3;
    protected zoomChanged: boolean;
    protected rotateStart: THREE.Vector2;
    protected rotateEnd: THREE.Vector2;
    protected rotateDelta: THREE.Vector2;
    protected panStart: THREE.Vector2;
    protected panEnd: THREE.Vector2;
    protected panDelta: THREE.Vector2;
    protected dollyStart: THREE.Vector2;
    protected dollyEnd: THREE.Vector2;
    protected dollyDelta: THREE.Vector2;
    protected updateLastPosition: THREE.Vector3;
    protected updateOffset: THREE.Vector3;
    protected updateQuat: THREE.Quaternion;
    protected updateLastQuaternion: THREE.Quaternion;
    protected updateQuatInverse: THREE.Quaternion;
    protected panLeftV: THREE.Vector3;
    protected panUpV: THREE.Vector3;
    protected panInternalOffset: THREE.Vector3;
    protected onContextMenu: EventListener;
    protected onMouseUp: EventListener;
    protected onMouseDown: EventListener;
    protected onMouseMove: EventListener;
    protected onMouseWheel: EventListener;
    protected onTouchStart: EventListener;
    protected onTouchEnd: EventListener;
    protected onTouchMove: EventListener;
    protected onKeyDown: EventListener;
    constructor(object: THREE.Camera, domElement?: HTMLElement, domWindow?: Window);
    update(): boolean;
    panLeft(distance: number, objectMatrix: any): void;
    panUp(distance: number, objectMatrix: any): void;
    pan(deltaX: number, deltaY: number): void;
    dollyIn(dollyScale: any): void;
    dollyOut(dollyScale: any): void;
    getAutoRotationAngle(): number;
    getZoomScale(): number;
    rotateLeft(angle: number): void;
    rotateUp(angle: number): void;
    getPolarAngle(): number;
    getAzimuthalAngle(): number;
    dispose(): void;
    reset(): void;
    saveState(): void;
    readonly center: THREE.Vector3;
    noZoom: boolean;
    /**
     * TS typeguard. Checks whether the provided camera is PerspectiveCamera.
     * If the check passes (returns true) the passed camera will have the type THREE.PerspectiveCamera in the if branch where the check was performed.
     * @param camera Object to be checked.
     */
    private _checkPerspectiveCamera;
    /**
     * TS typeguard. Checks whether the provided camera is OrthographicCamera.
     * If the check passes (returns true) the passed camera will have the type THREE.OrthographicCamera in the if branch where the check was performed.
     * @param camera Object to be checked.
     */
    private _checkOrthographicCamera;
}

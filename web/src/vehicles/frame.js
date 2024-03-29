import '../style.css'
import * as THREE from 'three'

function createLine(a, b, color = 0xff00ff) {
    var material = new THREE.LineBasicMaterial({ color: color });

    let startVector = new THREE.Vector3(a[0], a[1], a[2]);
    let endVector = new THREE.Vector3(b[0], b[1], b[2]);

    let linePoints = [];
    linePoints.push(startVector, endVector);

    // Create Tube Geometry
    var tubeGeometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(linePoints),
        512 / 2,// path segments
        0.25,// THICKNESS
        4, //Roundness of Tube
        true //closed
    );

    // const geometry = new THREE.BufferGeometry().setFromPoints(points);
    let line = new THREE.Line(tubeGeometry, material);

    return line;
}

export function createFrame(width = 16, height = 9, scale = 1, color = 0xff0000) {
    const frame = new THREE.Group();

    // set camare center
    const center0 = [0, 0, 0]

    // scales
    scale *= 10;
    const distance = .4 * scale
    height = (height / width) * scale
    width = scale

    // frame points
    const pointA = [distance, height / 2, -width / 2]
    const pointB = [distance, height / 2, width / 2]
    const pointC = [distance, -height / 2, width / 2]
    const pointD = [distance, -height / 2, -width / 2]

    const points = [pointA, pointB, pointC, pointD]

    // draw lines
    // center to corner
    for (let i = 0; i < points.length; ++i) {
        frame.add(createLine(center0, points[i]))
    }

    // corner to corner
    for (let i = 1; i < points.length; ++i) {
        frame.add(createLine(points[i - 1], points[i], color))
    }
    frame.add(createLine(points[3], points[0], color))

    // x edge guide
    frame.add(createLine(center0, [distance * 4, 0, 0], 0xBDB76B))

    return frame;
}

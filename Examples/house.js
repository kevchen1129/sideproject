/*jshint esversion: 6 */
// @ts-check

/*
 * Graphics Town Example Objects
 *
 * Houses: adapted from the original C++ Graphics Town
 */

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning
/**  @type typeof import("../THREE/threets/index"); */
let T;
// @ts-ignore
T = THREE;

// we need the GrObject
import { GrObject } from "../Framework/GrObject.js";
 
function uvTri(u1,v1,u2,v2,u3,v3) {
    return [new T.Vector2(u1,v1), new T.Vector2(u2,v2), new T.Vector2(u3,v3)]
}

/** Global (module) variables for simple Houses */
let simpleHouseCount = 0;
let simpleHouseGeometry;    // one geometry for all
let simpleHouseTexture;
let simpleHouseMaterial;
export class SimpleHouse extends GrObject {
    constructor(params={}) {
        if (!simpleHouseGeometry) {
            let w = 2;
            let h = 2;
            let d = 3;
            let r = 1;
            simpleHouseGeometry = new T.Geometry();
            // front vertices
            simpleHouseGeometry.vertices.push(new T.Vector3(  0,   0, 0));
            simpleHouseGeometry.vertices.push(new T.Vector3(  w,   0, 0));
            simpleHouseGeometry.vertices.push(new T.Vector3(  w,   h, 0));
            simpleHouseGeometry.vertices.push(new T.Vector3(  0,   h, 0));
            simpleHouseGeometry.vertices.push(new T.Vector3(w/2, h+r, 0));
            // back vertices
            simpleHouseGeometry.vertices.push(new T.Vector3(  0,   0, d));
            simpleHouseGeometry.vertices.push(new T.Vector3(  w,   0, d));
            simpleHouseGeometry.vertices.push(new T.Vector3(  w,   h, d));
            simpleHouseGeometry.vertices.push(new T.Vector3(  0,   h, d));
            simpleHouseGeometry.vertices.push(new T.Vector3(w/2, h+r, d));
            // front surface
            simpleHouseGeometry.faces.push(new T.Face3(0,1,2));
            simpleHouseGeometry.faces.push(new T.Face3(0,2,3));
            simpleHouseGeometry.faces.push(new T.Face3(3,2,4));
            // back surface
            simpleHouseGeometry.faces.push(new T.Face3(6,5,7));
            simpleHouseGeometry.faces.push(new T.Face3(5,8,7));
            simpleHouseGeometry.faces.push(new T.Face3(8,9,7));
            // right side
            simpleHouseGeometry.faces.push(new T.Face3(1,6,2));
            simpleHouseGeometry.faces.push(new T.Face3(6,7,2));
            // left side
            simpleHouseGeometry.faces.push(new T.Face3(5,0,3));
            simpleHouseGeometry.faces.push(new T.Face3(5,3,8));
            // roof
            simpleHouseGeometry.faces.push(new T.Face3(2,7,4));
            simpleHouseGeometry.faces.push(new T.Face3(7,9,4));
            simpleHouseGeometry.faces.push(new T.Face3(3,4,8));
            simpleHouseGeometry.faces.push(new T.Face3(8,4,9));
            // texture coords
            let tfaces = [];
            tfaces.push(uvTri(0,0, .25,0, .25,.25));        // front
            tfaces.push(uvTri(0,0, .25,.25, 0,.25));
            tfaces.push(uvTri(0,.25, .25,.25, 0,.5));  

            tfaces.push(uvTri(.25,0, 0,0, 0.25,.25));        // back
            tfaces.push(uvTri(0,0, 0,.25, .25,.25));
            tfaces.push(uvTri(0,.25, .25,.25, 0,.5));

            tfaces.push(uvTri(.25,0, .5,0, .25,.25));
            tfaces.push(uvTri(.5,0, .5,.25, .25,.25));

            tfaces.push(uvTri(.5,0, .25,0, .25,.25));
            tfaces.push(uvTri(.5,0, .25,.25, .5,.25));

            tfaces.push(uvTri(0,.5, 1,.5, 0,1));
            tfaces.push(uvTri(1,.5,1,1,0,1));

            tfaces.push(uvTri(0,.5, 0,1, 1,.5));
            tfaces.push(uvTri(1,.5, 0,1, 1,1));
            // now make the normals
            simpleHouseGeometry.computeFaceNormals();
            simpleHouseGeometry.faceVertexUvs = [ tfaces ]
        }
        if (!simpleHouseTexture) {
            simpleHouseTexture = new T.TextureLoader().load("./Examples/house.png");
        }
        if (!simpleHouseMaterial) {
            simpleHouseMaterial = new T.MeshStandardMaterial({
                color:"blue",
               // map:simpleHouseTexture,
                roughness:1.0,
                side:T.DoubleSide});
        }
        let mesh = new T.Mesh(simpleHouseGeometry,simpleHouseMaterial);
        mesh.translateX(params.x || 0);
        mesh.translateY(params.y || 0);
        mesh.translateZ(params.z || 0);
        super(`SimpleHouse-${++simpleHouseCount}`,mesh);
    }
}
export class House_1 extends GrObject {
    constructor(params={}) {


        let geometry = new T.Geometry();
        //
        geometry.vertices.push(new T.Vector3(-1, 1, 0)); // 0
        geometry.vertices.push(new T.Vector3(1, 1, 0)); // 1
        geometry.vertices.push(new T.Vector3(1, 3 / 2, 1 / 2)); // 2
        geometry.vertices.push(new T.Vector3(1, 1, 1)); // 3
        geometry.vertices.push(new T.Vector3(-1, 1, 1)); // 4
        geometry.vertices.push(new T.Vector3(-1, 3 / 2, 1 / 2)); // 5
        //
        geometry.faceVertexUvs = [[]];

        let f1 = new T.Face3(5, 1, 0);
        geometry.faces.push(f1);
        geometry.faceVertexUvs[0].push([new T.Vector2(1, 1), new T.Vector2(0, 0), new T.Vector2(1, 0)]);

        let f2 = new T.Face3(2, 1, 5);
        geometry.faces.push(f2);
        geometry.faceVertexUvs[0].push([new T.Vector2(0, 1), new T.Vector2(0, 0), new T.Vector2(1, 1)]);

        let f3 = new T.Face3(3, 2, 5);
        geometry.faces.push(f3);
        geometry.faceVertexUvs[0].push([new T.Vector2(1, 0), new T.Vector2(1, 1), new T.Vector2(0, 1)]);

        let f4 = new T.Face3(3, 5, 4);
        geometry.faces.push(f4);
        geometry.faceVertexUvs[0].push([new T.Vector2(1, 0), new T.Vector2(0, 1), new T.Vector2(0, 0)]);

        let f5 = new T.Face3(4, 5, 0);
        geometry.faces.push(f5);
        geometry.faceVertexUvs[0].push([new T.Vector2(1, 0), new T.Vector2(0, 0), new T.Vector2(1 / 2, 1)]);

        let f6 = new T.Face3(1, 2, 3);
        geometry.faces.push(f6);
        geometry.faceVertexUvs[0].push([new T.Vector2(1, 0), new T.Vector2(0, 0), new T.Vector2(1 / 2, 1)]);

        geometry.computeFaceNormals();
        geometry.uvsNeedUpdate = true;

        let geometry2 = new T.Geometry();

        geometry2.vertices.push(new T.Vector3(-1, 1, 1)); // 0
        geometry2.vertices.push(new T.Vector3(1, 1, 1)); // 1
        geometry2.vertices.push(new T.Vector3(1, 0, 1)); // 2
        geometry2.vertices.push(new T.Vector3(-1, 0, 1)); // 3

        geometry2.faceVertexUvs = [[]];
        let f1_2 = new T.Face3(2, 1, 3);
        geometry2.faces.push(f1_2);
        geometry2.faceVertexUvs[0].push([new T.Vector2(1, 0), new T.Vector2(1, 1), new T.Vector2(0, 0)]);

        let f2_2 = new T.Face3(1, 0, 3);
        geometry2.faces.push(f2_2);
        geometry2.faceVertexUvs[0].push([new T.Vector2(1, 1), new T.Vector2(0, 1), new T.Vector2(0, 0)]);


        geometry2.computeFaceNormals();
        geometry2.uvsNeedUpdate = true;

        let cube_geometry = new T.BoxGeometry(2, 1, 0.99);
        let cube_material = new T.MeshBasicMaterial({ color: "gray" });
        let cube = new T.Mesh(cube_geometry, cube_material);
        cube.translateY(0.5);
        cube.translateZ(0.5);

        //
        let tl = new T.TextureLoader().load("./Pictures/roof2.png");
        let house_buttom = new T.TextureLoader().load("./Pictures/house2.png");


        let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75 });
        let but_material = new T.MeshStandardMaterial({ map: house_buttom, roughness: 0.0 });
        let mesh = new T.Mesh(geometry, material);
        let mesh2 = new T.Mesh(geometry2, but_material);

        mesh.add(cube);
        mesh.add(mesh2);
        mesh.translateX(params.x );
        //mesh.translateY(params.y || 0);
        mesh.translateZ(params.z );
        mesh.translateY(params.y);
        super("House-1", mesh);
        this.x=params.x||0;
        this.y=params.y||0;
        this.z=params.z||0;
       
    }
}
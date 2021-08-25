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

 

/** Global (module) variables for simple Houses */
let simpleHouseCount = 0;
let buildingGeom;    // one geometry for all
let buildingTexture;
let buildingMaterial;
let t1;
let material;
export class Skyscraper extends GrObject {
    constructor(params={}) {
            let build=new T.Group();
            let buildingGeom= new T.BoxGeometry(7,14,7 );
           buildingGeom.computeFaceNormals();
                let  sideGeom=new T.BoxGeometry(4,11,7);
                let middle=new T.BoxGeometry(14,3,7);

          
          
        
        if (!buildingTexture) {
            buildingTexture = new T.TextureLoader().load("Pictures/building.jpg");
        }
        if (!buildingMaterial) {
            buildingMaterial = new T.MeshStandardMaterial({
                color:"white",
                map:buildingTexture,
                roughness:1.0,
                side:T.DoubleSide});
                
        }
        let mesh = new T.Mesh(buildingGeom,buildingMaterial);
        mesh.translateX(params.x+10 || 0);
        mesh.translateY(20|| 0);
        mesh.translateZ(-params.z || 0);
        let mesh1=new T.Mesh(sideGeom,buildingMaterial);
        mesh1.translateX(params.x+5);
        mesh1.translateY(6);
        mesh1.translateZ(-params.z);
        let mesh2=new T.Mesh(sideGeom,buildingMaterial);
        mesh2.translateX(params.x+15);
        mesh2.translateY(6);
        mesh2.translateZ(-params.z);
        let mesh3=new T.Mesh(middle,buildingMaterial);
        mesh3.translateX(params.x+10);
        mesh3.translateY(12);
        mesh3.translateZ(-params.z);
        build.add(mesh);
        build.add(mesh1);
        build.add(mesh2);
        build.add(mesh3);
        build.castShadow=true;
        build.receiveShadow=true;
        let p=new T.BoxGeometry(4,1,4);
    let pmat=new T.MeshStandardMaterial({color:"black"});
    let meshp=new T.Mesh(p,pmat);
    meshp.position.set(20,26.8,-20);
    build.add(meshp);
    let meshp1=new T.Mesh(p,pmat);
    meshp1.position.set(-22,0,5);
    build.add(meshp1);
        super("skyscraper",build);
    }
}
export class Taipei101 extends GrObject {
   
    constructor(params={}) {
        //    let base=new T.BoxBufferGeometry(5,10,10,3,10,1);
        let geometry = new T.Geometry();
    
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(2, 0, 0));
    geometry.vertices.push(new T.Vector3(2, 0, 2));
    geometry.vertices.push(new T.Vector3(0, 0, 2));
    geometry.vertices.push(new T.Vector3(0, 2, 0));
    geometry.vertices.push(new T.Vector3(3, 2, 0));
    geometry.vertices.push(new T.Vector3(3, 2, 3));
    geometry.vertices.push(new T.Vector3(0, 2, 3));
    
    geometry.scale(1.5,1.5,1.5);
    let f1 = new T.Face3(7, 5, 4);
    geometry.faces.push(f1);
    geometry.faceVertexUvs[0].push([new T.Vector2(1, 1/3), new T.Vector2(2/3, 0), new T.Vector2(2/3, 1/3)]);
    let f2 = new T.Face3(7, 6, 5);
    geometry.faces.push(f2);
    geometry.faceVertexUvs[0].push([new T.Vector2(1, 1/3), new T.Vector2(1, 0), new T.Vector2(2/3, 0)]);
    // 5
    let f3 = new T.Face3(7, 4, 0);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([new T.Vector2(1, 1/3), new T.Vector2(2/3, 1/3), new T.Vector2(2/3, 2/3)]);
    let f4 = new T.Face3(0, 3, 7);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([new T.Vector2(2/3, 2/3), new T.Vector2(1, 2/3), new T.Vector2(1, 1/3)]);
    
    // 3
    let f5 = new T.Face3(1,4,5);
    geometry.faces.push(f5);
    geometry.faceVertexUvs[0].push([ new T.Vector2(1/3, 0),new T.Vector2(2/3, 1/3), new T.Vector2(2/3, 0)]);
    let f6 = new T.Face3(4, 1, 0);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([new T.Vector2(2/3, 1/3), new T.Vector2(1/3, 0), new T.Vector2(1/3, 1/3)]);
    // 4
    let f7 = new T.Face3(2, 7, 3);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([new T.Vector2(1/3, 2/3), new T.Vector2(2/3, 1), new T.Vector2(2/3, 2/3)]);
    let f8 = new T.Face3(2, 6, 7);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([new T.Vector2(1/3, 2/3), new T.Vector2(1/3, 1), new T.Vector2(2/3, 1)]);
    
    // 2
    let f9 = new T.Face3(5,6, 1);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([ new T.Vector2(0, 2/3),new T.Vector2(1/3, 2/3), new T.Vector2(0, 1/3)]);
    let f10 = new T.Face3(1, 6, 2);
    geometry.faces.push(f10)
    geometry.faceVertexUvs[0].push([new T.Vector2(0, 1/3) ,new T.Vector2(1/3, 2/3),new T.Vector2(1/3, 1/3) ]);

    // 1
    let f11 = new T.Face3(2, 0, 1);
    geometry.faces.push(f11);
    geometry.faceVertexUvs[0].push([new T.Vector2(1/3, 2/3), new T.Vector2(2/3, 1/3), new T.Vector2(1/3, 1/3)]);
    let f12 = new T.Face3(2, 3, 0);
    geometry.faces.push(f12);
    geometry.faceVertexUvs[0].push([new T.Vector2(1/3,2/3), new T.Vector2(2/3, 2/3), new T.Vector2(2/3, 1/3)]);
    let Taipei101=new T.Group();
    
    //t1 = new T.TextureLoader().load("./Pictures/building1.jpg");
    
        t1 = new T.TextureLoader().load("./Pictures/building1.jpg");
    
       
    material = new T.MeshStandardMaterial({
        color:"white",
        map:t1,
        roughness:1.0,
        side:T.DoubleSide
    });
        
let base=new T.BoxGeometry(4,5,4);
let baseMesh=new T.Mesh(base,material);
Taipei101.add(baseMesh);
baseMesh.translateX(params.x+1.5);
baseMesh.translateZ(params.z+1);
baseMesh.translateY(3);

let top=new T.BoxGeometry(2,5,2);
let topMesh=new T.Mesh(top,material);
Taipei101.add(topMesh);
topMesh.translateX(params.x+2.2);
topMesh.translateZ(params.z+1.8);
topMesh.translateY(30);

let topsphere=new T.SphereGeometry(1,24,24);
let sphereMesh=new T.Mesh(topsphere,material);
Taipei101.add(sphereMesh);
sphereMesh.translateX(params.x+2.2);
sphereMesh.translateZ(params.z+1.8);
sphereMesh.translateY(33);

let needle=new T.BoxGeometry(0.5,3,0.5);
let needleMesh=new T.Mesh(needle,material);
Taipei101.add(needleMesh);
needleMesh.translateX(params.x+2.2);
needleMesh.translateZ(params.z+1.8);
needleMesh.translateY(35);
geometry.computeFaceNormals();
geometry.uvsNeedUpdate = true;

let p=new T.BoxGeometry(4,1,4);
    let pmat=new T.MeshStandardMaterial({color:"black"});
    let meshp=new T.Mesh(p,pmat);
    meshp.position.set(20,0,-2);
    Taipei101.add(meshp);
   for( let i=0;i<8;i++){
       
        let bodymesh = new T.Mesh( geometry, material );
              bodymesh.translateX(params.x);
                bodymesh.translateZ(params.z-0.5);
                bodymesh.translateY(5+i*3);
               Taipei101.add(bodymesh);

}
    Taipei101.translateX(-20);
    Taipei101.translateZ(-20);
            super("Taipei101",Taipei101);
        }
    }
    
    
    let mtTexture = null;

    export class MorphTest extends GrObject {
        /**
         * 
         * @param {Object} params 
         */
        constructor(params={}) {
            let radius = params.r || 5.0;
    
            if (!mtTexture) {
                let loader = new T.TextureLoader();
                mtTexture = loader.load("./Pictures/ok.jpeg");
            }
            // don't forget to turn on morphing in the material!
            // we need double side since one target is flat
            let material = new T.MeshStandardMaterial({map:mtTexture, morphTargets:true, morphNormals:true, side:T.DoubleSide});
    
            // the initial shape is a sphere - which makes for weird UVs
            let geometry = new T.SphereGeometry(radius,100,100);
    
            // set up morph targets
            // set up a morph target - the first morph target is flat
            // we let the x,y position be the u,v coordinate (so the sphere "unwraps")
            // getting the UV is hard since they are in faces!
            let morphVerts = [];
            // make an empty array of positions
            geometry.vertices.forEach(element => {
                morphVerts.push(new T.Vector3(0,0,0));
            });
            // now go through the faces and copy the UVs for each vertex
            for(let i=0; i<geometry.faces.length; i++) {
                // each vertex on the face
                let v = geometry.faces[i].a;
                morphVerts[geometry.faces[i].a].x = geometry.faceVertexUvs[0][i][0].x  * 4;
                morphVerts[geometry.faces[i].a].y = geometry.faceVertexUvs[0][i][0].y  * 4;
                morphVerts[geometry.faces[i].b].x = geometry.faceVertexUvs[0][i][1].x  * 4;
                morphVerts[geometry.faces[i].b].y = geometry.faceVertexUvs[0][i][1].y  * 4;
                morphVerts[geometry.faces[i].c].x = geometry.faceVertexUvs[0][i][2].x  * 4;
                morphVerts[geometry.faces[i].c].y = geometry.faceVertexUvs[0][i][2].y * 4;
            }
            geometry.morphTargets.push({name:"flat", vertices: morphVerts});
            geometry.computeMorphNormals();
    
            // Morphing only works with Buffer Geometries
            let bgeometry = new T.BufferGeometry().fromGeometry(geometry);
            let mesh = new T.Mesh(bgeometry,material);
            mesh.rotateY(-Math.PI/2);
    
            super("MorphTest",mesh);
            mesh.position.x = params.x || 0;
            mesh.position.y = params.y || 0;
            mesh.position.z = params.z || 0;
            this.mesh = mesh;
    
            // set up the controls vector
            this.mesh.updateMorphTargets();
    
            this.time = 0;
        }
        advance(delta, timeOfDay) {
            this.time += delta/1000;
            // we do cos^2 since it causes things to dwell at the ends (looks better than abs)
            this.mesh.morphTargetInfluences[0] = Math.sin(this.time) * Math.cos(this.time);
          //  this.mesh.rotateY(0.05);
            
        }
    }
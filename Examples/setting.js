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

 

export class grass extends GrObject {
    constructor(params={}) {
        let t1=new T.TextureLoader().load("./Pictures/grass.jpg");
        let grass=new T.CylinderGeometry(12.2,12.2,0.01,40);
        let grassmat=new T.MeshStandardMaterial({map:t1});
        let mesh=new T.Mesh(grass,grassmat);
       // mesh.rotateX(Math.PI/2);
       // mesh.translateY(10);
        super("grass",mesh);
    }
    }
    
    export class Road extends GrObject {
        constructor(x,y,z,rotate,params={}) {
    
            
            let geometry3=new T.Geometry();
            geometry3.vertices.push(new T.Vector3(0,0.01,-10)); //0
            geometry3.vertices.push(new T.Vector3(0,0.01,10)); //1
            geometry3.vertices.push(new T.Vector3(1,0.01,-10)); //2
            geometry3.vertices.push(new T.Vector3(1,0.01,10));//3
            geometry3.scale(3,2,3);
     
            geometry3.faceVertexUvs = [[]];
            let road_face1=new T.Face3(0,1,2);
            let road_face2=new T.Face3(3,2,1);
            geometry3.faces.push(road_face1);
            geometry3.faceVertexUvs[0].push([new T.Vector2(0,1),new T.Vector2(1,1),new T.Vector2(0,0)]);
            geometry3.faces.push(road_face2);
            geometry3.faceVertexUvs[0].push([new T.Vector2(1,0),new T.Vector2(0,0),new T.Vector2(1,1)]);
            geometry3.computeFaceNormals();
            geometry3.uvsNeedUpdate=true;
            geometry3.rotateY(rotate*Math.PI/2);
            geometry3.translate(0,0,1);
            
            let road=new T.TextureLoader().load("./Pictures/road.jpg");
            let roadMat=new T.MeshStandardMaterial({map:road});
            let roadmesh=new T.Mesh(geometry3,roadMat);
            roadmesh.translateX(x);
            roadmesh.translateZ(z);
          //  roadmesh.rotateY(Math.PI*rotate);
     
            super("road",roadmesh);
            this.x=params.x||0;
            this.y=params.y||0;
            this.z=params.z||0;
            this.rotate=params.rotate||1;
        
        }
           
    }
    let tree_counter = 0;

    export class Tree extends GrObject {
        constructor(params={}) { 
    
    //         let group = new T.Group();
    //        // let geometry = new T.CylinderGeometry(0, 0.4, 0.8, 32);
    //         let geometry=new T.SphereGeometry(1,10,10);
    //         geometry.scale(0.5,0.5,0.5);
    //         let geometry1=new T.SphereGeometry(1,10,10);
    //         let material = new T.MeshBasicMaterial({ color: "green" });
    //         geometry1.scale(0.4,0.4,0.4);
    //         let tree_top = new T.Mesh(geometry1, material);
    //         let tree_bottom = new T.Mesh(geometry, material);
    //        // let tree_mid = new T.Mesh(geometry, material);
    //         tree_top.translateY(1.5);
    //       //  tree_mid.translateY(1.5);
    //         tree_bottom.translateY(1);
    
    //         let trunk_geometry = new T.CylinderGeometry(0.1, 0.1, 1, 32);
    //         let trunk_material = new T.MeshBasicMaterial({ color: "#6d5415" });
    //         let trunk = new T.Mesh(trunk_geometry, trunk_material);
    //         trunk.translateY(0.5);
            
    //         group.add(trunk);
    //         group.add(tree_top);
    //        // group.add(tree_mid);
    //         group.add(tree_bottom);
    //         group.position.set(params.x,0,params.z);
    //         // group.translateX(x);
    //         // group.translateZ(z);
    
    //         super("Tree", group);
    //         this.x=params.x||0;
    //         this.z=params.z||0;
    //     }
    // }
    let mat = new T.MeshStandardMaterial({color: "brown", roughness: 1});

    let points = [new T.Vector2(0.5, 0), new T.Vector2(0.2, 8)];
    let trunk_geo = new T.LatheGeometry(points, 4);
    trunk_geo.computeFlatVertexNormals();

    let branch_geo = new T.LatheGeometry(points, 4);
    branch_geo.computeFlatVertexNormals();
    branch_geo.rotateX(Math.PI/2);

    let base = new T.Mesh(trunk_geo, mat);
    for (let i = 0; i < 25; i++) {
        let y = Math.random()*10;
        let branch = new T.Mesh(branch_geo, mat);
        
       
        let  theta = Math.random()*Math.PI*2;
        let phi = Math.PI/2 - Math.random()*Math.PI/4;
        branch.lookAt(new T.Vector3(Math.cos(theta)*Math.sin(phi), Math.cos(phi), Math.sin(phi)*Math.sin(theta)));
        branch.position.y = y + 2;
        let s = (2/branch.position.y + 1)*0.25;
        branch.scale.set(s, s, s);
        base.add(branch);

        let sphere_geo = new T.SphereGeometry((6/branch.position.y + 6)/2, 6, 3);
        sphere_geo.computeFlatVertexNormals();
        let sphere = new T.Mesh(sphere_geo, new T.MeshStandardMaterial({color: "green"}));
        branch.add(sphere);
        sphere.position.z = 8;
    }
    //base.position.set(x, y, z);
    base.scale.set(0.2, 0.2, 0.2);
    base.translateX(params.x);
    base.translateZ(params.z);
    tree_counter++;
    super("tree", base);
    this.x=params.x||0;
    this.z=params.z||0;
    }
}
    export class Flag extends GrObject {
        constructor(params={}) { 
            let l1=new T.TextureLoader().load("./Pictures/flag.png");
            let geom=new T.PlaneGeometry(10,5);
    
            let mat=new T.MeshStandardMaterial({map:l1,roughness:0.75,side:T.DoubleSide});
            let mesh=new T.Mesh(geom,mat);
        mesh.translateY(0.2);
            mesh.translateX(params.x);
            mesh.translateZ(params.z);
            mesh.rotateX(-Math.PI/2);
         
            super("flag",mesh);
            
        }
    }
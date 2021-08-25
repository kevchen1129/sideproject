
let testobjsctr = 0;
/*
* @typedef ExcavatorProperties
* @type {object}
* @property {number} [x=0]
* @property {number} [y=0]
* @property {number} [z=0]
* @property {number} [size=1]
*/
import { GrObject } from "../Framework/GrObject.js";
import { GrCube } from "../Framework/SimpleObjects.js";
export class Dumptruck extends GrObject {
	constructor() {
        let group = new T.Group();
        let box = new T.BoxGeometry(2,2,2);
		let mesh1 = new T.Mesh(box,new T.MeshStandardMaterial({color:"red"}));
		mesh1.position.set(-6,1.2,2);
      //  mesh1.position.y = 0.25;
        group.add(mesh1);
		let mesh2Geom=new T.BoxGeometry(4,2,2);
        let mesh2 = new T.Mesh(mesh2Geom,new T.MeshStandardMaterial({color:"orange"}));
        // set group with origin at pivot point
		mesh2.position.set(-2.5,1.2,2);
		group.add(mesh2);
		
		let wheelGeom=new T.CylinderGeometry(0.5,0.5,3);
		let wheelMat=new T.MeshStandardMaterial({color:"black"});
		let wheel=new T.Mesh(wheelGeom,wheelMat);
		wheel.position.set(-6,0.5,2);
		wheel.rotateX(Math.PI/2);
		group.add(wheel);

		let wheel2=new T.Mesh(wheelGeom,wheelMat);
		wheel2.position.set(-2,0.5,2);
		wheel2.rotateX(Math.PI/2);
		group.add(wheel2);
		
		

        super(`Dumptruck-${testobjsctr++}`,group,
              [ ['x',-5,5,2],['z',-5,5,2],['theta',-180,180,0],
                ['tilt',0,90,0]
              ]);
        
        this.group = group;
        this.mesh1 = mesh1;
        this.mesh2 = mesh2;
       
    }

    update(paramValues) {
        this.group.position.x = paramValues[0];
        this.group.position.z = paramValues[1];
        this.group.rotation.y = degreesToRadians(paramValues[2]);
       this.mesh2.rotation.z = degreesToRadians(-paramValues[3]);
    }
}

	

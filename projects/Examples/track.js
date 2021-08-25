/*jshint esversion: 6 */
// @ts-check

/*
 * Graphics Town Example Objects
 *
 * Simple Circular Track - and an object that goes around on it
 */

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning
/**  @type typeof import("../THREE/threets/index"); */
let T;
// @ts-ignore
T = THREE;
let testobjsctr = 0;
// we need the GrObject
import { GrObject } from "../Framework/GrObject.js";
import { GrCube } from "../Framework/SimpleObjects.js";
import * as Loaders from "../Framework/loaders.js";
import { WorldUI } from "../Framework/WorldUI.js";
let roadTexture=new T.TextureLoader().load("./Pictures/roadTexture.jpg");
/**
 * This is a really simple track - just a circle
 * But in addition to having geometry, objects on the track can ask for their
 * position (given their U value). 
 * They can also ask for the direction vector.
 */
//let thePoints = [ [-10,-10], [-10,10], [10,10], [10,-10]];
let r;
let a;
let a1;
export class CircularTrack extends GrObject {
    constructor(params={}) {
     //   let radius=params.radius||6;
       
        // let radius = params.radius || 6;
        // let width = params.width || 1;
        // let ring = new T.RingGeometry(radius*width+3,radius*width-3,20,3);
        // let material = new T.MeshStandardMaterial({ side:T.DoubleSide,map:roadTexture,roughness:0.8});
        // let mesh = new T.Mesh(ring, material);
        // mesh.rotateX(Math.PI/2);
        // let ring2 = new T.RingGeometry(radius-width,radius+width,64,3);
        // let material2 = new T.MeshStandardMaterial({side:T.DoubleSide, color:"black",roughness:0.3});
        // let mesh2 = new T.Mesh(ring2, material2);
        // mesh2.translateY(0.01);
        // mesh2.rotateX(Math.PI/2);
        // let group = new T.Group();
        // group.add(mesh);
        // group.add(mesh2);
        // group.translateX(params.x || 0);
        // group.translateY(params.bias || 0.1); // raise track above ground to avoid z-fight
        // group.translateZ(params.z || 0);
        // super(`CircularTrack`,group);

   
        let l1=new T.TextureLoader().load("./Pictures/wood.jpg")
        let Tgroup=new T.Group();
        let railroadgeom=new T.CylinderGeometry(0.05,0.05,1.5,100);
        let mat=new T.MeshStandardMaterial({map:l1,bumpMap:l1,roughness:0.75});
       

        let radius = 14.5;
    let width = 0.1;
    let ring = new T.RingGeometry(radius-width,radius+width,32,3);
    let material = new T.MeshStandardMaterial({map:l1,side:T.DoubleSide,roughness:0.75});
    let mesh = new T.Mesh(ring, material);
    mesh.rotateX(Math.PI/2);
    mesh.rotateZ(Math.PI/4);
       
    let radius1 = 13.5;
    let width1 = 0.1;
    let ring1 = new T.RingGeometry(radius1-width1,radius1+width1,32,3);
    let mesh1 = new T.Mesh(ring1, material);
    mesh.translateZ(-0.2);
    mesh1.rotateX(Math.PI/2);
    mesh1.rotateZ(Math.PI/4);
    
    Tgroup.add(mesh);
    Tgroup.add(mesh1);

        // for( let i=0;i<5;i++){ 
        //     a=null;
        //     a =new T.Mesh(railroadgeom,mat);
           
        //     // if(i<15){
        //     a.translateZ(14-i*(0.25));
        //     a.translateX(1+i);
        //     // }else{
        //     //  a.translateZ(14-i*(1));
        //     //  a.translateX(1+i);
        //     // }
        //     // if(i%4){
        //      a.rotateY(-3*i*2);
        //     // }else{
        //   //  }
        //     a.rotateX(Math.PI/2);
        //    group.add(a);
        // }
            // a.translateX(15-i*1);
            // a.translateZ(15+i);
           
           // a.rotateY(r%3);
        //    a.rotateX(Math.PI/2);
        //    group.add(a);
        //et rr=new T.Group();
        for(let i=0;i<4;i++){
        let group=new T.Group();
        a=null;
        a =new T.Mesh(railroadgeom,mat);
        a.translateZ(14);
        a.translateX(0);
        //a.rotateY(-3);
        a.rotateX(Math.PI/2);
        group.add(a);

           a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(13.9);
            a.translateX(1);
            a.rotateY(-3);
            a.rotateX(Math.PI/2);
            group.add(a);

            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(13.8);
            a.translateX(2);
            a.rotateY(-6);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(13.8);
            a.translateX(2);
            a.rotateY(-6);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(13.6);
            a.translateX(3);
            a.rotateY(-9);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(13.3);
            a.translateX(4);
            a.rotateY(-9);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(13.0);
            a.translateX(5);
            a.rotateY(-12);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(12.6);
            a.translateX(6);
            a.rotateY(-15);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(12.2);
            a.translateX(6.9);
            a.rotateY(-15);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(11.6);
            a.translateX(7.7);
            a.rotateY(-18);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(11.1);
            a.translateX(8.4);
            a.rotateY(-18);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(10.5);
            a.translateX(9.1);
            a.rotateY(-21);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(9.9);
            a.translateX(9.8);
            a.rotateY(-21);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(9.3);
            a.translateX(10.4);
            a.rotateY(-24);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(8.6);
            a.translateX(10.9);
            a.rotateY(-24);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(7.8);
            a.translateX(11.4);
            a.rotateY(-27);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(7.1);
            a.translateX(11.8);
            a.rotateY(-27);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(6.4);
            a.translateX(12.3);
            a.rotateY(-30);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(5.6);
            a.translateX(12.8);
            a.rotateY(Math.PI/2.3);
            a.rotateX(Math.PI/2);
            group.add(a);
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(4.8);
            a.translateX(13.2);
            a.rotateY(Math.PI/2.3);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(4);
            a.translateX(13.5);
            a.rotateY(Math.PI/2.2);
            a.rotateX(Math.PI/2);
            group.add(a);

            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(3.2);
            a.translateX(13.7);
            a.rotateY(Math.PI/2.2);
            a.rotateX(Math.PI/2);
            group.add(a);

            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(2.5);
            a.translateX(13.8);
            a.rotateY(Math.PI/2.1);
            a.rotateX(Math.PI/2);
            group.add(a);
            a=null;
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(1.8);
            a.translateX(13.9);
            a.rotateY(Math.PI/2.1);
            a.rotateX(Math.PI/2);
            group.add(a);
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(0);
            a.translateX(14);
            a.rotateY(Math.PI/2);
            a.rotateX(Math.PI/2);
  
            group.add(a);
            a =new T.Mesh(railroadgeom,mat);
            a.translateZ(0.8);
            a.translateX(14);
            a.rotateY(Math.PI/2);
            a.rotateX(Math.PI/2);
            group.add(a);
            
            if(i==0){
                Tgroup.add(group);
                
            }else if(i==1){
                group.rotateY(Math.PI/2);
              
                Tgroup.add(group);
            }else if(i==2){
                group.rotateY(Math.PI/2*3);
                Tgroup.add(group);
            }else{
                group.rotateY(Math.PI);
                Tgroup.add(group);
            }
        
        // group.rotateY(Math.PI * i);
        // group.translateX(14);
        // group.translateZ(-14);
        // Tgroup.add(group);
            
        }
        
            // group.translateY(Math.PI/2);
            // group.translateX(14);
            // group.translateZ(-14);
            // rr.add(group);
            // a1=new T.Group();
            // a1=group;
            // a1.rotateY(Math.PI/2);
            
            // rr.add(a1);
            

        //     let rr=new T.Group();
        //     r.add(group);
        // //     let z=new T.Group();
        // //      z=group;
        // //    z.rotateY(Math.PI/2);
        // //    z.translateX(14);
        // //    z.translateZ(-14);
        // //     rr.add(z);
        // //     z=null;
           // z=




;            // let c =new T.Mesh(railroadgeom,mat);
            // c.translateZ(13.8);
            // c.translateX(2);
            // c.rotateY(-6);
            // c.rotateX(Math.PI/2);
            // group.add(c);
          
           
    //}
       
        super("railroad",Tgroup);
       /// mesh.translateY(10);
      
        this.x = params.x || 0;
        this.z = params.z || 0;
        this.y = params.bias || 0.1;
        this.r = radius;
        

       
    }
    eval(u) {
        let p = u * 2 * Math.PI;
        r=p;
        return [this.x + this.r * Math.cos(p), this.y, this.z + this.r * Math.sin(p)];
    }
    tangent(u) {
        let p = u * 2 * Math.PI;
        // unit tangent vector - not the real derivative
         return [Math.sin(p), 0, -Math.cos(p)];
        // return [p, 0, p];
    }
}
export class SquareTrack extends GrObject {

    constructor(params = {}) {
        let l1=new T.TextureLoader().load("./Pictures/road.jpg")
        let perimeter = params.perimeter || 20;
        let ring1 = new T.RingGeometry(5 + perimeter, 10 + perimeter, 4, 1, 0, 6.3);
        let material1 = new T.MeshStandardMaterial({ side: T.DoubleSide, map:l1, roughness: 0.8 });
        let mesh1 = new T.Mesh(ring1, material1);
        let group = new T.Group();
        group.add(mesh1);
        // group.add(mesh2);
        group.translateX(params.x || 0);
        group.translateY(params.bias || 0.1); // raise track above ground to avoid z-fight
        group.translateZ(params.z || 0);
        super(`SquareTrack`, group);
        this.x = params.x || -45;
        this.z = params.z || -45;
        this.y = params.bias || 0.1;
        this.perimeter = perimeter;
    }
    eval(u) {
        let a = u % 2;
        if (a < 0.5) {
            return [this.x + this.perimeter * 2 * (u % 0.5) + this.perimeter, this.y, this.z + this.perimeter];
        }
        else if (a >= 0.5 && a < 1) {
            return [this.x + this.perimeter + this.perimeter, this.y, this.z + this.perimeter * 2 * (u % 0.5) + this.perimeter];
        }
        else if (a >= 1 && a < 1.5) {
            return [this.x + this.perimeter - this.perimeter * 2 * (u % 0.5) + this.perimeter, this.y, this.perimeter + this.z + this.perimeter];
        }
        else {
            return [this.x + this.perimeter, this.y, this.z + this.perimeter - this.perimeter * 2 * (u % 0.5) + this.perimeter];
        }
    }
    tangent(u) {
        let a = u % 2;
        if (a < 0.5) {
            return [-1, 0, 0];
        }
        else if (a >= 0.5 && a < 1) {
            return [0, 0, -1];
        }
        else if (a >= 1 && a < 1.5) {
            return [1, 0, 0];
        }
        else {
            return [0, 0, 1];
        }
    }
}

/**
 * A simple object to go around a track - key thing, it knows the track so it can ask the track
 * where it should be 
 */
export class TrackCube extends GrCube {
    constructor(track, params={}) {
        super({});
        this.track = track;
        this.u = 0;
        this.rideable = this.objects[0];
    }
    advance(delta,timeOfDay) {
        this.u += delta / 2000;
        let pos = this.track.eval(this.u);
        // remember, the center of the cube needs to be above ground!
        this.objects[0].position.set(pos[0],0.5+pos[1],pos[2]);
        let dir = this.track.tangent(this.u);
        // since we can't easily construct the matrix, figure out the rotation
        // easy since this is 2D!
        let zAngle = Math.atan2(dir[2],dir[0]);
        // turn the object so the Z axis is facing in that direction
        this.objects[0].rotation.y = -zAngle - Math.PI/2;
    }
}
export class GrTrainHead extends GrObject {
   
	constructor(track, params = {}) {
		let trainHead = new T.Group();
        // head
        let geometry = new T.CylinderBufferGeometry(0.45, 0.45, 1.85, 32);
        let material = new T.MeshStandardMaterial({ color: "red", metalness: 0.8, roughness: 0.7 });
        let cylinder = new T.Mesh(geometry, material);
        cylinder.rotateZ(Math.PI/2);
        cylinder.rotateX(Math.PI/2);
        cylinder.translateX(0.5);
        cylinder.translateZ(-1);
        cylinder.translateY(0.55);
        // wheels
        let weels_group = new T.Group();
        let wheel_geometry = new T.CylinderBufferGeometry(0.2, 0.2, 0.1, 32);
        let wheel_material = new T.MeshBasicMaterial({ color: "black" });
        let wheel1 = new T.Mesh(wheel_geometry, wheel_material);
        let wheel2 = new T.Mesh(wheel_geometry, wheel_material);
        let wheel3 = new T.Mesh(wheel_geometry, wheel_material);
        let wheel4 = new T.Mesh(wheel_geometry, wheel_material);
        let wheel5 = new T.Mesh(wheel_geometry, wheel_material);
        let wheel6 = new T.Mesh(wheel_geometry, wheel_material);
        wheel1.rotateY(Math.PI / 2);
        wheel1.rotateZ(Math.PI / 2);
        wheel2.rotateY(Math.PI / 2);
        wheel2.rotateZ(Math.PI / 2);
        wheel3.rotateY(Math.PI / 2);
        wheel3.rotateZ(Math.PI / 2);
        wheel4.rotateY(Math.PI / 2);
        wheel4.rotateZ(Math.PI / 2);
        wheel5.rotateY(Math.PI / 2);
        wheel5.rotateZ(Math.PI / 2);
        wheel6.rotateY(Math.PI / 2);
        wheel6.rotateZ(Math.PI / 2);
        wheel1.translateX(0);
        wheel2.translateX(0.5);
        wheel3.translateX(1);
        wheel4.translateX(0);
        wheel5.translateX(0.5);
        wheel6.translateX(1);
        wheel4.translateY(1);
        wheel5.translateY(1);
        wheel6.translateY(1);

        weels_group.add(wheel1);
        weels_group.add(wheel2);
        weels_group.add(wheel3);
        weels_group.add(wheel4);
        weels_group.add(wheel5);
        weels_group.add(wheel6);
        weels_group.rotateZ(Math.PI/2);
        weels_group.rotateX(Math.PI/2);
        weels_group.translateZ(-1.5);
        weels_group.translateX(0.2);

        let cube_geometry = new T.BoxGeometry(1.2, 1.8, 1.2);
        let cube_material = new T.MeshStandardMaterial({ color: "red", metalness: 0.8, roughness: 0.7 });
        let head_cube = new T.Mesh(cube_geometry, cube_material);
        head_cube.translateX(-1);
        head_cube.translateY(1);
        head_cube.translateZ(-1);

        // let cubeTop_geometry = new T.BoxGeometry(0.8, 0.5, 1.2);
        // let cubeTop_material = new T.MeshStandardMaterial({ color: "red", metalness: 0.8, roughness: 0.7 });
        // let headTop_cube = new T.Mesh(cubeTop_geometry, cubeTop_material);
        // //headTop_cube.translateX(-1);
        // headTop_cube.translateY(1.6);
        // headTop_cube.rotateY(Math.PI/2);
        // headTop_cube.translateZ(-0.8);
        // headTop_cube.translateX(1.2);


        let chimney_geometry = new T.CylinderBufferGeometry(0.15, 0.15, 1.5, 32);
        let chimney_material = new T.MeshStandardMaterial({ color: "black", metalness: 0.8, roughness: 0.7 });
        let chimney = new T.Mesh(chimney_geometry, chimney_material);
        chimney.translateX(-1);
        chimney.translateY(1.6);
        chimney.translateZ(0.85);

        let chimney_geometry1 = new T.CylinderBufferGeometry(0.15, 0.15, 0.6, 32);
    
        let chimney1 = new T.Mesh(chimney_geometry1, chimney_material);
        chimney1.translateX(-1);
        chimney1.translateY(1.1);
        chimney1.translateZ(0);
        let chimney2=new T.Mesh(chimney_geometry1,chimney_material);
        chimney2.translateX(-1);
        chimney2.translateY(1.1);
        chimney2.translateZ(0.4);

        let chimneyTop_geometry = new T.CylinderBufferGeometry(0.35, 0.18, 0.3, 32);
        let chimneyTop_material = new T.MeshStandardMaterial({ color: "yellow", metalness: 0.4, roughness: 0.7 });
        let chimneyTop = new T.Mesh(chimneyTop_geometry, chimneyTop_material);
        chimneyTop.translateX(-1);
        chimneyTop.translateY(2.4);
        chimneyTop.translateZ(0.85);
        trainHead.add(chimney1);
        trainHead.add(chimney2);
      //  trainHead.add(chimneyTop);
        trainHead.add(chimney);
     //   trainHead.add(headTop_cube);
        trainHead.add(head_cube);
        trainHead.add(weels_group);
        trainHead.add(cylinder);
        trainHead.position.set(1.5,0,1.5);
		
		// note that we have to make the Object3D before we can call
		// super and we have to call super before we can use this
		super(`TrainHead`, trainHead);
		this.whole_ob = trainHead;
		this.track = track;
        this.u = 0;
		this.rideable = this.objects[0];

		// put the object in its place
		this.whole_ob.position.x = params.x ? Number(params.x) : 0;
		this.whole_ob.position.y = params.y ? Number(params.y) : 0;
		this.whole_ob.position.z = params.z ? Number(params.z) : 0;
		let scale = params.size ? Number(params.size) : 1;
		trainHead.scale.set(scale, scale, scale);
	}

	advance(delta,timeOfDay) {
        this.u += delta / 2000;
        let pos = this.track.eval(this.u);
        // remember, the center of the cube needs to be above ground!
        this.objects[0].position.set(pos[0],0.5+pos[1],pos[2]);
        let dir = this.track.tangent(this.u);
        // since we can't easily construct the matrix, figure out the rotation
        // easy since this is 2D!
        let zAngle = Math.atan2(dir[2],dir[0]);
        // turn the object so the Z axis is facing in that direction
        this.objects[0].rotation.y = -zAngle - Math.PI/2;
    }
}


/**
 * A Less Simple Object to go around the track
 */
export class TrackCar extends Loaders.FbxGrObject {
    constructor(track) {
        super({fbx:"./Examples/Assets/Lamborghini_Aventador.fbx",color:"white",norm:3.0,name:"Track Car"});
        this.track = track; 
        this.u = 0;
        // the fbx loader puts the car on the ground - we need a ride point above the ground
        this.ridePoint = new T.Object3D();
        this.ridePoint.translateY(0.5);
        this.objects[0].add(this.ridePoint);
        this.rideable = this.ridePoint;
    }
    advance(delta,timeOfDay) {
        this.u += delta / 2000;
        let pos = this.track.eval(this.u);
        this.objects[0].position.set(pos[0],pos[1],pos[2]);
        let dir = this.track.tangent(this.u);
        // since we can't easily construct the matrix, figure out the rotation
        // easy since this is 2D!
        let zAngle = Math.atan2(dir[2],dir[0]);
        // turn the object so the Z axis is facing in that direction
        this.objects[0].rotation.y = -zAngle - Math.PI/2;
    }
}
export class GrdumpTruck extends GrObject {
   
	constructor(track, params = {}) {
       
       
		
        let truck= new T.Group();
        let box = new T.BoxGeometry(2,2,2);
		let mesh1 = new T.Mesh(box,new T.MeshStandardMaterial({color:"red"}));
      // mesh1.position.set(-5.5,1.2,2.5);
      // mesh1.translateX(1);
       mesh1.translateZ(3.5);
       mesh1.translateY(1.5);
        truck.add(mesh1);
		let mesh2Geom=new T.BoxGeometry(4,2,2);
        let mesh2 = new T.Mesh(mesh2Geom,new T.MeshStandardMaterial({color:"orange"}));
        // set group with origin at pivot point
    //   mesh2.position.set(-2.5,1.2,2);
    mesh2.translateY(1.5);
        mesh2.rotateY(-Math.PI/2);
       // mesh2.rotateY(-Math.PI/2);
		truck.add(mesh2);
		
		let wheelGeom=new T.CylinderGeometry(0.5,0.5,3,100);
		let wheelMat=new T.MeshStandardMaterial({color:"white"});
		let wheel=new T.Mesh(wheelGeom,wheelMat);
        //wheel.position.set(-8.5,0.5,6);
        wheel.translateY(0.5);
        wheel.rotateX(Math.PI/2);
       // wheel.translateX(6);
        wheel.rotateZ(Math.PI/2);
		truck.add(wheel);

		let wheel2=new T.Mesh(wheelGeom,wheelMat);
	
        wheel2.rotateX(Math.PI/2);
        wheel2.translateY(3.7);
        wheel2.translateZ(-0.5);
        wheel2.rotateZ(Math.PI/2);
        truck.add(wheel2);
      //  truck.rotateY(Math.PI/4);
		
		super(`dumpTruck`, truck);
		this.whole_ob = truck;
		this.track = track;
        this.u = 0;
		this.rideable = truck;

        
        this.whole_ob.position.x=params.x?Number(params.x):0;
        this.whole_ob.position.y=params.y?Number(params.y):3;
        this.whole_ob.position.z=params.z?Number(params.z):0;
       
       
        truck.scale.set(0.5,0.5,0.5);
        
       
	}

	advance(delta,timeOfDay) {

    this.u += delta / 2000;
    let pos = this.track.eval(this.u);
    this.objects[0].position.set(pos[0],pos[1],pos[2]);
    let dir = this.track.tangent(this.u);
   
    let zAngle = Math.atan2(dir[2],dir[0]);
    // turn the object so the Z axis is facing in that direction
    this.objects[0].rotation.y = -zAngle - Math.PI/2;
   
   
    
    
  //  this.objects[0].rotation.y = Math.abs(Math.atan2(this.whole_ob.position.x,this.whole_ob.position.y));
      }
    }
      export class GrTrainTrack extends GrObject {
   
        constructor(track, params = {}) {
            
            let train_track = new T.Group();
    
            // wheels
            let weels_group = new T.Group();
            let wheel_geometry = new T.CylinderBufferGeometry(0.2, 0.2, 0.1, 32);
            let l1=new T.TextureLoader().load("./Pictures/wheel.png");
            let wheel_material = new T.MeshStandardMaterial({normalMap: l1,map:l1 });
            let wheel1 = new T.Mesh(wheel_geometry, wheel_material);
            let wheel2 = new T.Mesh(wheel_geometry, wheel_material);
            let wheel3 = new T.Mesh(wheel_geometry, wheel_material);
            let wheel4 = new T.Mesh(wheel_geometry, wheel_material);
            let wheel5 = new T.Mesh(wheel_geometry, wheel_material);
            let wheel6 = new T.Mesh(wheel_geometry, wheel_material);
            wheel1.rotateY(Math.PI / 2);
            wheel1.rotateZ(Math.PI / 2);
            wheel2.rotateY(Math.PI / 2);
            wheel2.rotateZ(Math.PI / 2);
            wheel3.rotateY(Math.PI / 2);
            wheel3.rotateZ(Math.PI / 2);
            wheel4.rotateY(Math.PI / 2);
            wheel4.rotateZ(Math.PI / 2);
            wheel5.rotateY(Math.PI / 2);
            wheel5.rotateZ(Math.PI / 2);
            wheel6.rotateY(Math.PI / 2);
            wheel6.rotateZ(Math.PI / 2);
            wheel1.translateX(0);
            wheel2.translateX(0.5);
            wheel3.translateX(1);
            wheel4.translateX(0);
            wheel5.translateX(0.5);
            wheel6.translateX(1);
           wheel4.translateY(1);
            wheel5.translateY(1);
            wheel6.translateY(1);
    
            weels_group.add(wheel1);
            weels_group.add(wheel2);
            weels_group.add(wheel3);
            weels_group.add(wheel4);
            weels_group.add(wheel5);
            weels_group.add(wheel6);
            weels_group.rotateZ(Math.PI / 2);
            weels_group.rotateX(Math.PI / 2);
            weels_group.translateZ(-1.5);
            weels_group.translateX(0.2);
    
            let cube_geometry = new T.BoxGeometry(1, 1.2, 2);
            let t1=new T.TextureLoader().load("./Pictures/white.jpg");
            let cube_material = new T.MeshStandardMaterial({ bumpMap: t1, metalness: 0.8, roughness: 0.7 });
            let head_cube = new T.Mesh(cube_geometry, cube_material);
            head_cube.translateX(-1);
            head_cube.translateY(1);
            head_cube.translateZ(0.5);
    
            train_track.add(head_cube);
            train_track.add(weels_group);
            
            // note that we have to make the Object3D before we can call
            // super and we have to call super before we can use this
            super(`Train Track`, train_track);
            this.whole_ob = train_track;
            this.track = track;
            this.u = 0;
            this.rideable = this.objects[0];
           
    
            // put the object in its place
            this.whole_ob.position.x = params.x ? Number(params.x) : 0;
            this.whole_ob.position.y = params.y ? Number(params.y) : 0;
            this.whole_ob.position.z = params.z ? Number(params.z) : 0;
            let scale = params.size ? Number(params.size) : 1;
            train_track.scale.set(scale, scale, scale);
        }
    
        advance(delta,timeOfDay) {
            this.u += delta / 2000;
            let pos = this.track.eval(this.u);
            // remember, the center of the cube needs to be above ground!
            this.objects[0].position.set(pos[0],0.5+pos[1],pos[2]);
            let dir = this.track.tangent(this.u);
            // since we can't easily construct the matrix, figure out the rotation
            // easy since this is 2D!
            let zAngle = Math.atan2(dir[2],dir[0]);
            // turn the object so the Z axis is facing in that direction
            this.objects[0].rotation.y = -zAngle - Math.PI/2;
        }
    }
    


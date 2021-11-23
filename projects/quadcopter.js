// @ts-check

/**
 * Minimal Starter Code for the QuadCopter assignment
 */

 import { onWindowOnload } from "./Libs/helpers.js";

 // these four lines fake out TypeScript into thinking that THREE
 // has the same type as the T.js module, so things work for type checking
 // type inferencing figures out that THREE has the same type as T
 // and then I have to use T (not THREE) to avoid the "UMD Module" warning
 /**  @type typeof import("./THREE/threets/index"); */
 let T;
 // @ts-ignore
 T = THREE;
 let flag=0;
 
 function propeller() {
 
    
     let group = new T.Group();
 
     let propeller1 = new T.BoxGeometry(0.75, 0.02, 0.15);
     let propeller11 = new T.Mesh(propeller1, new T.MeshStandardMaterial({ color: "black" }));
     propeller11.position.set(0.4, 3.6, 0);
     group.add(propeller11);
 
     let propeller2 = new T.BoxGeometry(0.15, 0.02, 0.75);
     let propeller22 = new T.Mesh(propeller2, new T.MeshStandardMaterial({ color: "white" }));
     propeller22.position.set(0, 3.6, 0.4);
     group.add(propeller22);
 
     let propeller3 = new T.BoxGeometry(0.75, 0.02, 0.15);
     let propeller33 = new T.Mesh(propeller3, new T.MeshStandardMaterial({ color: "black" }));
     propeller33.position.set(-0.4, 3.6, 0);
     group.add(propeller33);
 
     let propeller4 = new T.BoxGeometry(0.15, 0.02, 0.75);
     let propeller44 = new T.Mesh(propeller4, new T.MeshStandardMaterial({ color: "white" }));
     propeller44.position.set(0, 3.6, -0.4);
     group.add(propeller44);
     function draw(){
         group.rotateY(1);
         window.requestAnimationFrame(draw);
     }
     draw();
 
     return group;
 }
 
 function propellertail() {
 
     let group = new T.Group();
 
     let propeller1 = new T.BoxGeometry(0.1, 0.7, 0.01);
     let propeller11 = new T.Mesh(propeller1, new T.MeshStandardMaterial({ color: "grey" }));
     propeller11.position.set(1.2, 3.2, 0);
     group.add(propeller11);
 
     let propeller2 = new T.BoxGeometry(0.1, 0.7, 0.01);
     let propeller22 = new T.Mesh(propeller2, new T.MeshStandardMaterial({ color: "grey" }));
      propeller22.position.set(1.2, 3.2, 0);
     propeller22.rotateZ(Math.PI / 2);
     group.add(propeller22);
 
     function draw(){
         propeller11.rotateZ(1);
         propeller22.rotateZ(1);
         window.requestAnimationFrame(draw);
     }
     draw();
 
     return group;
 }
 
 function helicopter() {
 
     let group = new T.Group();
    
         let topGeom = new T.SphereGeometry(3, 18, 12, 0, Math.PI *2, Math.PI /6, Math.PI ); // Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2
         let topMat = new T.MeshBasicMaterial({ color: "black", transparent: false, opacity: 0.9 });
         let top = new T.Mesh(topGeom, topMat);
         top.scale.set(0.15, 0.15, 0.15);
         top.position.set(0, 3, 0);
         group.add(top);
 
 
     // legs
     let rightleg = new T.BoxGeometry(0.05, 0.5, 0.05);
     let rightleg1 = new T.Mesh(rightleg, new T.MeshStandardMaterial({ color: "black" }));
     rightleg1.position.set(-0.12, 2.6, -0.2);
     group.add(rightleg1);
 
     let leftleg = new T.BoxGeometry(0.05, 0.5, 0.05);
     let leftleg1 = new T.Mesh(leftleg, new T.MeshStandardMaterial({ color: "black" }));
     leftleg1.position.set(-0.12, 2.6, 0.2);
     group.add(leftleg1);
 
     let rightleg2 = new T.BoxGeometry(0.05, 0.5, 0.05);
     let rightleg3 = new T.Mesh(rightleg2, new T.MeshStandardMaterial({ color: "black" }));
     rightleg3.position.set(0.12, 2.6, -0.2);
 
     group.add(rightleg3);
 
     let leftleg2 = new T.BoxGeometry(0.05, 0.5, 0.05);
     let leftleg3 = new T.Mesh(leftleg2, new T.MeshStandardMaterial({ color: "black" }));
     leftleg3.position.set(0.12, 2.6, 0.2);
 
     group.add(leftleg3);
 
     //feet
     let leftfeet = new T.BoxGeometry(0.5, 0.05, 0.05);
     let leftfeet1 = new T.Mesh(leftfeet, new T.MeshStandardMaterial({ color: "black" }));
     leftfeet1.position.set(0, 2.38, 0.2);
     group.add(leftfeet1);
 
     let rightfeet = new T.BoxGeometry(0.5, 0.05, 0.05);
     let rightfeet1 = new T.Mesh(rightfeet, new T.MeshStandardMaterial({ color: "black" }));
     rightfeet1.position.set(0, 2.38, -0.2);
     group.add(rightfeet1);
 
     // stick
     let stick = new T.BoxGeometry(0.05, 0.25, 0.05);
     let stick1 = new T.Mesh(stick, new T.MeshStandardMaterial({ color: "black" }));
     stick1.position.set(0, 3.5, 0);
     group.add(stick1);
 
     // tail
     let tail = new T.BoxGeometry(0, 0.2, 0.15);
     let tail1 = new T.Mesh(tail, new T.MeshStandardMaterial({ color: "black" }));
     tail1.position.set(0.8, 3.1, 0);
     tail1.rotateZ(0.3);
     group.add(tail1);
 
    
     return group;
 }
 function propellerplane(){
     let group = new T.Group();
 
     let propeller1 = new T.BoxGeometry(0.1, 0.7, 0.01);
     let propeller11 = new T.Mesh(propeller1, new T.MeshStandardMaterial({ color: "black" }));
     propeller11.position.set(-0.5, 3, -2);
     group.add(propeller11);
     let propeller2 = new T.BoxGeometry(0.1, 0.7, 0.01);
     let propeller22 = new T.Mesh(propeller2, new T.MeshStandardMaterial({ color: "black" }));
      propeller22.position.set(-0.5, 3, -2);
    // propeller22.rotateY(Math.PI / 2);
     group.add(propeller22);
 
     let propeller33=new T.Mesh(propeller1,new T.MeshStandardMaterial({ color: "black" }));
     propeller33.position.set(-0.5, 3, -2);
      group.add(propeller33);
 
 
     function draw(){
        propeller11.rotateX(1);
         propeller22.rotateX(0.5);
         propeller33.rotateX(0.5);
         window.requestAnimationFrame(draw);
     }
     draw();
     return group;
 
 }
 
 function quad(){
     let group=new T.Group();
     let bodyGeom=new T.BoxGeometry(1.4,0.4,0.5);
     let bodyMat=new T.MeshStandardMaterial({color:"brown"});
     let body=new T.Mesh(bodyGeom,bodyMat);
     body.position.set(-0.1,3,-2);
 
     let wing1Geom=new T.BoxGeometry(0.6,0.2,0.3);
     let wing1Mat=new T.MeshStandardMaterial({color:"brown"});
     let wing1=new T.Mesh(wing1Geom,wing1Mat);
     wing1.position.set(0,3,-1.5);
     wing1.rotateY(Math.PI/2);
 
     let wing2=new T.Mesh(wing1Geom,wing1Mat);
     wing2.position.set(0,3,-2.5);
     wing2.rotateY(Math.PI/2);
 
     let windowGeom=new T.BoxGeometry(0.4,0.1,0.4);
     let windowMat=new T.MeshStandardMaterial({color:"grey",transparent:true,opacity:0.5});
     let window=new T.Mesh(windowGeom,windowMat);
     window.position.set(0.1,3.3,-2);
     window.rotateZ(-Math.PI/4);
 
     let tailGeom=new T.BoxGeometry(0.4,0.1,0.3);
     let tailMat=new T.MeshStandardMaterial({color:"brown"});
     let tail=new T.Mesh(tailGeom,tailMat);
     tail.position.set(-0.61,3.3,-2);
     tail.rotateZ(Math.PI/2);
     tail.rotateX(Math.PI/2);
 
     let tail1=new T.Mesh(tailGeom,tailMat);
     tail1.position.set(-0.61,3,-1.7)
     tail1.rotateY(Math.PI/2);
 
     let tail2=new T.Mesh(tailGeom,tailMat);
     tail2.position.set(-0.61,3,-2.3)
     tail2.rotateY(Math.PI/2);
 
     let propeller=propellerplane();
     propeller.position.setX(1.2);
    // propeller.rotateY(Math.PI/4);
 
      group.add(propeller);
     group.add(tail);
     group.add(tail1);
     group.add(tail2);
     group.add(window);
     group.add(wing2);
     group.add(wing1);
     group.add(body);
     return group;
 
 }
 
 function quadcopter() {
     let renderer = new T.WebGLRenderer();
     renderer.setSize(1200, 700);
     document.body.appendChild(renderer.domElement);
 
     let scene = new T.Scene();
     let camera = new T.PerspectiveCamera(40, renderer.domElement.width / renderer.domElement.height, 1, 1000);
 
     camera.position.z = 10;
     camera.position.y = 5;
     camera.position.x = 5;
     camera.lookAt(0, 0, 0);
 
     // since we're animating, add OrbitControls
     let controls = new T.OrbitControls(camera, renderer.domElement);
 
     scene.add(new T.AmbientLight("white", 0.2));
 
     // two lights - both a little off white to give some contrast
     let dirLight1 = new T.DirectionalLight(0xF0E0D0, 1);
     dirLight1.position.set(1, 1, 0);
     scene.add(dirLight1);
 
     let dirLight2 = new T.DirectionalLight(0xD0E0F0, 1);
     dirLight2.position.set(-1, 1, -0.2);
     scene.add(dirLight2);
 
     // make a ground plane
     let groundBox = new T.BoxGeometry(10, 0.1, 10);
     let groundMesh = new T.Mesh(groundBox, new T.MeshStandardMaterial({ color: "grey", roughness: 0.9 }));
     // put the top of the box at the ground level (0)
     groundMesh.position.y = -0.05;
     scene.add(groundMesh);
 
     // this is the part the student should change
     //** GET RID OF THIS SILLY DONUT! Replace it with an aircraft*/
 
 
     let baseGeom=new T.BoxGeometry(2,0,2);
     let baseMat=new T.MeshStandardMaterial({color:"white"});
     let baseMesh=new T.Mesh(baseGeom,baseMat);
     scene.add(baseMesh);
     baseMesh.position.y=0.5;
 
 
     let target = pointer();
     let target2=pointer2();
    
     function pointer() {
         let group = new T.Group();
         let tagetGeom=new T.SphereGeometry(0.2,20,0);
         let targetMat=new T.MeshStandardMaterial({ color: "black" ,metalness:10});
         let target=new T.Mesh(tagetGeom,targetMat);
         target.position.set(0.5, 1, 0);
         group.add(target);
         return group;
     }
     function pointer2() {
         let group = new T.Group();
        // let tagetGeom=new T.SphereGeometry(0.2,20,0);
        let targetGeom=new T.TorusKnotGeometry(8,15,6);
        targetGeom.scale(0.01,0.01,0.01);
         let targetMat=new T.MeshStandardMaterial({ color: "red"});
         let target2=new T.Mesh(targetGeom,targetMat);
         target2.position.set(-0.5, 1.2, -0.5);
         group.add(target2);
         return group;
     }
 
 
     let copter1 = helicopter();
    let helicopterProp = propeller();
     let helicopterTail = propellertail();
 
     let quadcopter=quad();
     quadcopter.position.setY(1);
     quadcopter.rotateX(Math.PI/15);
     quadcopter.rotateZ(Math.PI/15);
     let group=new T.Group();
     group.add(copter1);
     group.add(helicopterProp);
     group.add(helicopterTail);
    // group.rotateX(-Math.PI/4);
 
     scene.add(group);
     scene.add(quadcopter);
     scene.add(target);
     scene.add(target2);
     let axWorld = new T.AxesHelper();
     scene.add(axWorld);
 
     let s = 0;
     let q=0;
     //copter1.rotateY(-Math.PI * 2 / 3);
   //  helicopterTail.rotateY(-Math.PI );
 
     function animateLoop() {
         //** EXAMPLE CODE - STUDENT SHOULD REPLACE */
         // move in a circle 
         let a= performance.now() / 1000;
         let b=performance.now()/600;
        
         let ds = a - s;
         s = a;
 
         let dk=b-q;
         q=b;
         let x = 3 * Math.cos(a);
         let z = 3 * Math.sin(a);
         
         group.position.x=x;
         group.position.z=z;
         group.rotateY(-ds);
         for(let i=0;i<4;i++){
             let y=0.6*Math.cos(a*i)-1;
             group.position.y=y;
         }
         target2.rotation.y+=-dk;
          target.rotation.y += -ds;
          let i = 3* Math.cos(b);
          let j = 3 * Math.sin(b);
          quadcopter.position.x=-i;
          quadcopter.position.z=-j;
          quadcopter.rotateY(-dk);
 
         renderer.setClearColor("pink");
         renderer.render(scene, camera);
         window.requestAnimationFrame(animateLoop);
     }
     animateLoop();
 }
 onWindowOnload(quadcopter);
/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 * 
 * This is the main file - it creates the world, populates it with 
 * objects and behaviors, and starts things running
 * 
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 * 
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning
/**  @type typeof import("./THREE/threets/index"); */
let T;
// @ts-ignore
T = THREE;

import { GrWorld } from "./Framework/GrWorld.js";
import {GrObject } from "./Framework/GrObject.js";  // only for typing
import * as Helpers from "./Libs/helpers.js";
import { WorldUI } from "./Framework/WorldUI.js";

/** These imports are for the examples - feel free to remove them */
import {SimpleHouse,House_1} from "./Examples/house.js";
import {Skyscraper,Taipei101,MorphTest} from "./Examples/skyscraper.js";
import {GrColoredRoundabout,GrAdvancedSwing,GrCarousel}from "./Examples/parkobjects.js";
import {CircularTrack, TrackCube, TrackCar,GrdumpTruck,GrTrainTrack,GrTrainHead,SquareTrack} from "./Examples/track.js";
import {Helicopter, Helipad} from "./Examples/helicopter.js";
import {grass, Road,Tree,Flag}from "./Examples/setting.js";
import{Dumptruck}from"./Examples/Dumptruck.js";

/**
 * The Graphics Town Main - 
 * This builds up the world and makes it go...
 */
function grtown() {
    // make the world
    let world = new GrWorld({
        width:1000, height:600,         // make the window reasonably large
        groundplanesize:30  ,            // make the ground plane big enough for a world of stuff
        groundplanecolor:"lightblue"
    });
    let loader=new T.CubeTextureLoader();

    let textureCube=loader.load([
        'Pictures/Bottom.png',
        'Pictures/Back.png',
        'Pictures/Top.png',
         'Pictures/Front.png',
         'Pictures/Right.png',
         'Pictures/Left.png'
    ]);

    // put stuff into it - you probably want to take the example stuff out first


    /********************************************************************** */
    /** EXAMPLES - student should remove these and put their own things in  */
    /***/
    // make two rows of houses, mainly to give something to look at
    for(let i=-19; i<20; i+=5) {
        world.add(new SimpleHouse({x:i, z: 25}));
    }
    for(let i=0;i<10;i++){
        world.add(new House_1({x:24,y:0,z:-8 +i*3}));
    }
   
    for(let i=0;i<15;i++){
        world.add(new Tree({x:(-25+i*3),z:20}));
        world.add(new Tree({x:-25,z:20+(i*-3)}));
        world.add(new Tree({x:(-25+i*3),z:-25}));
        if(i<14)
        world.add(new Tree({x:18,z:-22+(i*3)}));
    }
  //  world.add(new Tree({x:10,z:10}));
    // for(let i=0;i<15;i++){
    //     world.add(new Tree({x:-25,z:20+(i*-3)}));
    // }
    
    // world.add(new Tree({x:-10,z:10}));
    world.add(new Flag({x:-17,z:15}));
   world.add(new Skyscraper({x:10,z:20}));
   world.add(new Taipei101({x:0,z:0}));
    /** Race Track - with three things racing around */
    let track = new CircularTrack({x:0,y:1,z:0,radius:15});
    let strack=new SquareTrack({x:-75,y:1,z:-75,perimeter:48})
//    // let tc1 = new TrackCube(track);
//     let tc2 = new TrackCube(track);
//     let tc3 = new TrackCar(track);
    let car=new TrackCar(strack);
    let tc1=new GrdumpTruck(strack);
    let tc3 = new GrTrainHead(track);
    let tc4 = new GrTrainTrack(track);
    let tc5 = new GrTrainTrack(track);
    let tc6 = new GrTrainTrack(track);
    let tc7 = new GrTrainTrack(track);
    let tc8 = new GrTrainTrack(track);
    let tc9 = new GrTrainTrack(track);
    let tc10 = new GrTrainTrack(track);
    car.u=0.25 
    tc3.u =.24;
    tc4.u = 0.2;
    tc5.u = 0.17;
    tc6.u = 0.14;
    tc7.u = 0.11;
    tc8.u = 0.08;
    tc9.u = 0.05;
    tc10.u = 0.02;
    // place things are different points on the track
    // tc2.u = 0.25;
    // tc3.u = 0.125;
    tc1.u=0.5;
 
    ///tc4.whole_ob.rotateY(Math.PI);
    // and make sure they are in the world
    world.add(track);
    //world.add(strack);
    world.add(car);
    // world.add(tc1);
    // world.add(tc2);
    // world.add(tc3);
    world.add(tc1);
    world.add(tc3);
    world.add(tc4);
    world.add(tc5);
    world.add(tc6);
    world.add(tc7);
    world.add(tc8);
    world.add(tc9);
    world.add(tc10);
    world.add(new GrAdvancedSwing({x:6,z:2}));
    world.add(new GrAdvancedSwing({x:6,z:5}));
    world.add(new GrColoredRoundabout({x:-5,z:-5})); 
    world.add(new GrCarousel());
    world.add(new grass());
    world.add(new Road(0,0,22.5,1));
    world.add(new Road(0,0,-27,1));
    world.add(new Road(22,0,-1,2));
    world.add(new Road(-26.5,0,-1,2));
    world.add(new MorphTest({y:15}));
   
    
    /** Helicopter - first make places for it to land*/
   // world.add(new Helipad(-15,0,0));
    world.add(new Helipad(20,27.6 ,-20));
    world.add(new Helipad(0,0.5,-22));
    world.add(new Helipad(-22,0.5,5));
   // world.add(new Helipad(0,0,17));
    let copter = new Helicopter();
    world.add(copter);
    copter.getPads(world.objects);
    let light=new T.AmbientLight("white",0.5);
    light.castShadow=true;
    world.scene.add(light);
    world.renderer.shadowMapEnabled=true;


    /** EXAMPLES - end - things after this should stay                      */
    /********************************************************************** */

    // build and run the UI

    // only after all the objects exist can we build the UI
    // @ts-ignore       // we're sticking a new thing into the world
    world.ui = new WorldUI(world);
   
    world.scene.background=textureCube;
    textureCube.format=T.RGBAFormat;
    // now make it go!
    world.go();
}
Helpers.onWindowOnload(grtown);
import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";
import Button4 from "./Button4/Button4.js";
import Button5 from "./Button5/Button5.js";
import Button6 from "./Button6/Button6.js";
import Button7 from "./Button7/Button7.js";
import Button8 from "./Button8/Button8.js";
import Button9 from "./Button9/Button9.js";
import Button10 from "./Button10/Button10.js";
import Button11 from "./Button11/Button11.js";
import Button12 from "./Button12/Button12.js";
import Button13 from "./Button13/Button13.js";
import Button14 from "./Button14/Button14.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Button15 from "./Button15/Button15.js";
import Button16 from "./Button16/Button16.js";
import Button17 from "./Button17/Button17.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 1.9995663190219943,
    y: -5.000154542438111,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 19
  }),
  Sprite3: new Sprite3({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 10,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Button2: new Button2({
    x: 183,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Button3: new Button3({
    x: 187.1158558902863,
    y: 93.02981823162922,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  Button4: new Button4({
    x: 183.52726948043355,
    y: 34.84018587134717,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Button5: new Button5({
    x: 180.53474548239112,
    y: -21.316785781144368,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Button6: new Button6({
    x: 179.2122914203776,
    y: -76.3159128371247,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Button7: new Button7({
    x: 180.17397549527138,
    y: -131.41918493247366,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Button8: new Button8({
    x: 61.0280411876028,
    y: -133.31669414729444,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Button9: new Button9({
    x: -58.02948667426934,
    y: -134.61397506135313,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Button10: new Button10({
    x: -177.77397160273364,
    y: -136.10943425254538,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Button11: new Button11({
    x: -179.5892368268738,
    y: -84.08071163640182,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Button12: new Button12({
    x: -175.57600276693273,
    y: -31.34468700004549,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Button13: new Button13({
    x: -178.305287441731,
    y: 21.19252032497476,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Button14: new Button14({
    x: 46.74994025548211,
    y: 151.25331904322775,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  Sprite2: new Sprite2({
    x: 109.999995295207,
    y: 82.99999533759262,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Button15: new Button15({
    x: -25.905994268667158,
    y: 103.01063424008217,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  }),
  Button16: new Button16({
    x: -187.4701556522773,
    y: 98.15420855673035,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  Button17: new Button17({
    x: 75,
    y: -84,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

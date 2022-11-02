/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Sprite3/costumes/1.svg", {
        x: 23.683614779969673,
        y: 23.33909142456605
      }),
      new Costume("2", "./Sprite3/costumes/2.svg", {
        x: 23.5977903539532,
        y: 23.10511302167538
      }),
      new Costume("3", "./Sprite3/costumes/3.svg", {
        x: 23.597793116166287,
        y: 23.10511164799894
      }),
      new Costume("4", "./Sprite3/costumes/4.svg", {
        x: 23.597795878379372,
        y: 23.1051102743225
      }),
      new Costume("5", "./Sprite3/costumes/5.svg", {
        x: 23.597788640592455,
        y: 23.10510890064606
      }),
      new Costume("6", "./Sprite3/costumes/6.svg", {
        x: 23.59779140280554,
        y: 23.10510752696962
      }),
      new Costume("7", "./Sprite3/costumes/7.svg", {
        x: 23.597794165018627,
        y: 23.10510615329318
      }),
      new Costume("8", "./Sprite3/costumes/8.svg", {
        x: 23.597794165018627,
        y: 23.10510615329318
      }),
      new Costume("9", "./Sprite3/costumes/9.svg", {
        x: 23.359726959977394,
        y: 23.105104779616738
      }),
      new Costume("0", "./Sprite3/costumes/0.svg", {
        x: 23.35971784778269,
        y: 23.09830147798334
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {}

  *startAsClone() {}
}

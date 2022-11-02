/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button15 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-b", "./Button15/costumes/button2-b.svg", {
        x: 58.952,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Button15/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.robux > 999) {
      this.stage.vars.robux += -1000;
      this.stage.vars.rebirthMultiplier += 0.01;
    } else {
      0;
    }
  }
}

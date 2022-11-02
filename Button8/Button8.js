/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button8/costumes/button2-a.svg", {
        x: 58.98200000000023,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button8/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button8/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.robux > 99999) {
      this.stage.vars.gems += 18;
      this.stage.vars.rps += 2000;
      this.stage.vars.robux += -100000;
    }
  }
}

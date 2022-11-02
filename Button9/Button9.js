/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button9/costumes/button2-a.svg", {
        x: 58.982000000000255,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button9/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button9/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.robux > 499999) {
      this.stage.vars.gems += 25;
      this.stage.vars.rpc += 10000;
      this.stage.vars.robux += -500000;
    }
  }
}

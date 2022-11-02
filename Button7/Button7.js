/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button7/costumes/button2-a.svg", {
        x: 58.9820000000002,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button7/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button7/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.robux > 49999) {
      this.stage.vars.gems += 12;
      this.stage.vars.rpc += 750;
      this.stage.vars.robux += -50000;
    }
  }
}

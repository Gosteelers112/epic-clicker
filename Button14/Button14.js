/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button14/costumes/button2-a.svg", {
        x: 58.9820000000004,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button14/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button14/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.robux > 1000000000000) {
      this.stage.vars.robux = 0;
      this.stage.vars.rebirthMultiplier += 1;
      this.stage.vars.rpc = 1;
      this.stage.vars.rps = 1;
    } else {
      yield* this.sayAndWait("You need 1T robux to rebirth", 2);
    }
  }
}

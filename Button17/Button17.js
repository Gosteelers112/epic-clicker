/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Button17/costumes/button3-a.svg", {
        x: 44.83099999999999,
        y: 40.655298707753474
      }),
      new Costume("button3-b", "./Button17/costumes/button3-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button17/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.gems > 1000 || this.stage.vars.gems == 1000) {
      this.stage.vars.gems += -1000;
      yield* this.askAndWait(
        "What is your roblox username? Robux will be added to your account by 96 hours.(4 days)"
      );
      this.stage.vars.usernamesOfPeoplesRobuxAccountToGiveThem80Robux.push(
        this.answer
      );
    } else {
      yield* this.sayAndWait(
        "You don't have enough gems to redeem 80 robux",
        2
      );
    }
  }
}

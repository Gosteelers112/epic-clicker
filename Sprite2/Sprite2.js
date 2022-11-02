/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 41.805572509765625,
        y: 44.06597900390625
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.vars.codesPutIn = 0;
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("Code?");
    if (this.answer == "50v" || this.answer == "100vi") {
      if (2 > this.stage.vars.codesPutIn) {
        this.stage.vars.rebirthMultiplier += 1;
        this.stage.vars.codesPutIn += 1;
      } else {
        this.visible = false;
      }
    } else {
      yield* this.sayAndWait("Incorrect code", 2);
    }
  }
}

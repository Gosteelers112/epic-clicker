/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button16/costumes/button2-a.svg", {
        x: 58.982000000000085,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button16/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button16/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait(
      "Check out link description for the link to the code. Make sure you check out the project. Please note that it is on Snap! coding not Scratch.",
      3
    );
    yield* this.askAndWait("Code?");
    if (this.answer < "Thanks for viewing") {
      null;
    } else {
      null;
    }
  }
}

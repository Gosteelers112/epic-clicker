/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download", "./Sprite1/costumes/download.jpg", {
        x: 216,
        y: 234
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 50;
    this.stage.vars.robux = 0;
    this.stage.vars.rpc = 1;
    this.stage.vars.rebirthMultiplier = 1;
    this.stage.vars.rps = 1;
    while (true) {
      yield* this.wait(1);
      this.stage.vars.robux +=
        this.stage.vars.rps * this.stage.vars.rebirthMultiplier;
      this.stage.vars.TotalRobux +=
        this.stage.vars.rebirthMultiplier * this.stage.vars.rps;
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.stage.vars.robux +=
      this.stage.vars.rebirthMultiplier * this.stage.vars.rpc;
    this.stage.vars.TotalRobux +=
      this.stage.vars.rebirthMultiplier * this.stage.vars.rpc;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.maxRobux > this.stage.vars.Highscore) {
        this.stage.vars.Highscore = this.stage.vars.maxRobux;
        this.stage.vars.highscoreSetter = /* no username */ "";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (
        this.stage.vars.maxRobux > this.stage.vars.SecondNumber &&
        this.stage.vars.Highscore > this.stage.vars.maxRobux
      ) {
        this.stage.vars.SecondNumber = this.stage.vars.maxRobux;
        this.stage.vars.second = /* no username */ "";
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (
        this.stage.vars.maxRobux > this.stage.vars.ThirdNumber &&
        this.stage.vars.SecondNumber > this.stage.vars.maxRobux
      ) {
        this.stage.vars.ThirdNumber = this.stage.vars.maxRobux;
        this.stage.vars.third = /* no username */ "";
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (
        this.stage.vars.maxRobux > this.stage.vars.FourthNumber &&
        this.stage.vars.ThirdNumber > this.stage.vars.maxRobux
      ) {
        this.stage.vars.FourthNumber = this.stage.vars.maxRobux;
        this.stage.vars.forth = /* no username */ "";
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.robux > this.stage.vars.maxRobux) {
        this.stage.vars.maxRobux = this.stage.vars.robux;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (
        this.stage.vars.maxRobux > this.stage.vars.FifthNumber &&
        this.stage.vars.FourthNumber > this.stage.vars.maxRobux
      ) {
        this.stage.vars.FifthNumber = this.stage.vars.maxRobux;
        this.stage.vars.fifth = /* no username */ "";
      }
      yield;
    }
  }
}

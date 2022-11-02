/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.digits = 3;
    this.vars.size = 500;
    this.vars.centerX = 0;
    this.vars.centerY = 100;
    this.vars.robux = 3683.5499999999975;
    this.vars.rps = 333;
    this.vars.rpc = 111;
    this.vars.highscore = 0;
    this.vars.Highscore = 111188895206963;
    this.vars.HighscoreSetter = 0;
    this.vars.highscoreSetter = "buggykelbel";
    this.vars.second = "buggykelbel";
    this.vars.SecondNumber = 2378620812189;
    this.vars.thirdNumber = 0;
    this.vars.third = "buggykelbel";
    this.vars.ThirdNumber = 93211796367;
    this.vars.FourthNumber = 419;
    this.vars.forth = "buggykelbel";
    this.vars.maxRobux = 111188895206963;
    this.vars.FifthNumber = 0;
    this.vars.fifth = "buggykelbel";
    this.vars.TotalRobux = 141325877614357.44;
    this.vars.Goal = 100000000;
    this.vars.rebirthMultiplier = 3.0699999999999985;
    this.vars.codesPutIn = 2;
    this.vars.gems = 45;
    this.vars.usernamesOfPeoplesRobuxAccountToGiveThem80Robux = [];

    this.watchers.robux = new Watcher({
      label: "robux",
      style: "large",
      visible: true,
      value: () => this.vars.robux,
      x: 428,
      y: 73
    });
    this.watchers.Highscore = new Watcher({
      label: "☁ highscore",
      style: "normal",
      visible: true,
      value: () => this.vars.Highscore,
      x: 239,
      y: 181
    });
    this.watchers.highscoreSetter = new Watcher({
      label: "highscore setter",
      style: "normal",
      visible: true,
      value: () => this.vars.highscoreSetter,
      x: 240,
      y: 152
    });
    this.watchers.gems = new Watcher({
      label: "gems",
      style: "normal",
      visible: true,
      value: () => this.vars.gems,
      x: 245,
      y: 124
    });
  }
}

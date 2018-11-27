// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


  @property(cc.Node)
  bg: cc.Node = null;

  @property(cc.Node)
  bird: cc.Node = null;

  onLoad () {
    console.log(this.bird.children);
  }

  pastTime: number = 0;
  speed: number = 0;

  start() {

  }

  update (dt) {
    this.pastTime += dt;
    this.changeBirdSprite();
    this.birdGravity();
    this.moveBg();
  }

  birdGravity() {
    this.speed -= 0.1;
    this.bird.y += this.speed;
  }

  flyUp() {
    this.speed = 2.5;
  }

  moveBg() {
    this.bg.x -= 1;
    if (this.bg.x <= -288) {
      this.bg.x = 0;
    }
  }

  changeBirdSprite() {
    const tmp = this.pastTime % 0.6;
    const [bird_0, bird_1, bird_2] = this.bird.children;
    if (tmp >= 0 && tmp < 0.2) {
      bird_0.active = true;
      bird_1.active = false;
      bird_2.active = false;
    }
    if (tmp >= 0.2 && tmp < 0.4) {
      bird_0.active = false;
      bird_1.active = true;
      bird_2.active = false;
    }
    if (tmp >= 0.4 && tmp < 0.6) {
      bird_0.active = false;
      bird_1.active = false;
      bird_2.active = true;
    }
  }
}

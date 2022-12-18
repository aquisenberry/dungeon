"use strict";
const $white = "#ffffff";
const $red = "#ff0000";
const setColor = (game, color) => {
  game.context.fillStyle = color;
};
export default function (ecs, game) {
  console.log("game ------>", game);
  // eslint-disable-line no-unused-vars
  console.log(ecs, game);
  ecs.addEach(() => {
    let image = new Image();
    image.src = "../../images/pixel-platformer.png";
    game.context.drawImage(image, 0, 0, image.height * 5, image.width * 5);
  }, "camera");
  ecs.addEach(() => {
    // ecs.addEach(function (entity, elapsed) {
    // eslint-disable-line no-unused-vars
    // eslint-disable-line no-unused-vars
    game.context.font = "normal 900 35px Rubik";
    setColor(game, $red);
    // game.context.fillRect(
    //   0,
    //   0,
    //   game.context.canvas.width,
    //   game.context.canvas.height
    // );
    setColor(game, $white);
  }, "playerController2d");
}

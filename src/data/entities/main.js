import prefabs from "@data/prefabs";
import { addComponent } from "./index";
import components from "splat-ecs/lib/components";
const sceneEntities = [];
const index = {
  nextId: 0,
};

const indexTracker = (index) => {
  index.nextId += 1;
  return index.nextId - 1;
};

const defineCameraComponents = (camera) => {
  addComponent(camera, "position", components.position.factory(0, 0, 0));
  addComponent(camera, "running", true);
  addComponent(camera, "follow", components.follow.factory(player.id, 255));
};

const definePlayerComponents = (player) => {
  addComponent(player, "position", components.position.factory(200, 200, 1));
  addComponent(player, "size", components.size.factory(32, 64));
  addComponent(
    player,
    "playerController2d",
    components.playerController2d.factory()
  );
  addComponent(
    player,
    "movement2d",
    components.movement2d.factory(
      {
        up: true,
        down: true,
        left: true,
        right: true,
      },
      { up: -0.05, down: 0.05, left: -0.05, right: 0.05 },
      {
        up: -0.5,
        down: 0.5,
        left: -0.5,
        right: 0.5,
      }
    )
  );
  addComponent(player, "velocity", components.velocity.factory());
  addComponent(player, "friction", components.friction.factory(0.97, 0.97));
};

const camera = prefabs.camera(indexTracker(index));
const player = prefabs.player(indexTracker(index));

defineCameraComponents(camera);
definePlayerComponents(player);
sceneEntities.push(camera);
sceneEntities.push(player);

export default sceneEntities;

import main from "./main";

export function addComponent(entity, componentName, properties) {
  entity[componentName] = properties;
}
export default {
  main,
};

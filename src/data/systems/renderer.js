export default [
  {
    name: "splat-ecs/lib/systems/renderer/apply-shake",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/clear-screen",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/viewport-move-to-camera",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/background-color",
    scenes: "all",
  },
  {
    name: "./systems/renderer/sample-renderer-system",
    scenes: "all",
  },
  {
    name: "./systems/renderer/render-loading-bar",
    scenes: ["loading"],
  },
  {
    name: "splat-ecs/lib/systems/renderer/draw-image",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/draw-rectangles",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/viewport-reset",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/draw-frame-rate",
    scenes: "all",
  },
  {
    name: "splat-ecs/lib/systems/renderer/revert-shake",
    scenes: "all",
  },
];

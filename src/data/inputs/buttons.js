export default {
  up: [
    {
      device: "keyboard",
      button: "w",
    },
    {
      device: "keyboard",
      button: "up",
    },
    {
      device: "gamepad",
      button: "dpad up",
    },
    {
      device: "gamepad",
      button: "left stick up",
    },
  ],
  down: [
    {
      device: "keyboard",
      button: "s",
    },
    {
      device: "keyboard",
      button: "down",
    },
    {
      device: "gamepad",
      button: "dpad down",
    },
    {
      device: "gamepad",
      button: "left stick down",
    },
  ],
  left: [
    {
      device: "keyboard",
      button: "a",
    },
    {
      device: "keyboard",
      button: "left",
    },
    {
      device: "gamepad",
      button: "dpad left",
    },
    {
      device: "gamepad",
      button: "left stick left",
    },
  ],
  right: [
    {
      device: "keyboard",
      button: "d",
    },
    {
      device: "keyboard",
      button: "right",
    },
    {
      device: "gamepad",
      button: "dpad right",
    },
    {
      device: "gamepad",
      button: "left stick right",
    },
  ],
};

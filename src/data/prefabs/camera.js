const camera = function (id, matchCanvasSize = true) {
  let fullCanvas = matchCanvasSize;

  const setMatchCanvasSize = (matchCanvas = true) => {
    fullCanvas = matchCanvas;
  };
  return {
    id,
    name: "camera",
    camera: true,
    matchCanvasSize: fullCanvas,
    setMatchCanvasSize,
  };
};

export default camera;

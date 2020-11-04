window.addEventListener('load', _ => {
  const rotation = [0, 0, 0]
  const ids = ['g1074', '', '']
  const outerBtn = document.getElementById('outer-btn');
  const middleBtn = document.getElementById('middle-btn');
  const innerBtn = document.getElementById('inner-btn');
  const svgObject = document.getElementById('svg-object');
  svgObject.addEventListener('load', _ => {
    rotate(0, +180)();
    rotate(1, +180)();
    rotate(1, +180)();
    outerBtn.addEventListener('click', rotate(0, +90));
    middleBtn.addEventListener('click', rotate(1, +90));
    innerBtn.addEventListener('click', rotate(2, +90));
    function rotate(rotIdx, angle) {
      return _ => {
        console.log(`rotate ${rotIdx} by ${angle}`);
        const rot = (rotation[rotIdx] + angle) % 360;
        rotation[rotIdx] = rot;
        const toRotate = svgObject.contentDocument.getElementById(ids[rotIdx]);
        toRotate.setAttribute("transform", `rotate(${rot}, 50.27036,50.27036)`)
      }
    }
  });
});
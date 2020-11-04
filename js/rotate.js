window.addEventListener('load', _ => {
  const rotation = [0, 0, 0];
  const ids = ['g1074', 'g1057', 'g1040'];
  const intervals = [undefined, undefined, undefined];
  const outerBtn = document.getElementById('outer-btn');
  const middleBtn = document.getElementById('middle-btn');
  const innerBtn = document.getElementById('inner-btn');
  const svgObject = document.getElementById('svg-object');
  rotate(0, +180)();
  rotate(1, +180)();
  rotate(2, +90)();
  outerBtn.addEventListener('click', rotate(0, +90));
  middleBtn.addEventListener('click', rotate(1, +90));
  innerBtn.addEventListener('click', rotate(2, +90));
  function rotate(rotIdx, angle) {
    return _ => {
      const rot = (rotation[rotIdx] + angle);
      const toRotate = svgObject.contentDocument.getElementById(ids[rotIdx]);
      let current = rotation[rotIdx];
      if (intervals[rotIdx]) {
        clearInterval(intervals[rotIdx])
      }
      intervals[rotIdx] = setInterval(_ => {
        const speed =document.getElementById('speed').value;
        current += Math.min(speed, rot - current);
        toRotate.setAttribute("transform", `rotate(${current}, 50.27036,50.27036)`);
        if (rot - current < 0.01) {
          rotation[rotIdx] = rot % 360;
          clearInterval(intervals[rotIdx]);
        }
      }, 33);
    }
  }
});
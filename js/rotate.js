window.addEventListener('load', _ => {
    const rotation = [0,0,0]
    const ids = ['g1074', '', '']
    const outerBtn = document.getElementById('outer-btn');
    const middleBtn = document.getElementById('middle-btn');
    const innerBtn = document.getElementById('inner-btn');

    rotate(0, +180)();
    outerBtn.addEventListener('click', rotate(0, +90));

    function rotate(rotIdx, angle) {
        return _ => {
            const rot = (rotation[rotIdx] + angle) % 360;
            rotation[rotIdx] = rot;
            const svgObject = document.getElementById('svg-object');
            const toRotate = document.getElementById(ids[rotIdx]);
            toRotate.setAttribute("transform", `rotate(${rot}, 50.27036,50.27036)`)
        }
    }
});
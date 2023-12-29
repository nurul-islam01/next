import { useEffect } from 'react';

export const useBgMove = (elementId) => {
  useEffect(() => {
    let body = document.body,
      html = document.documentElement;

    let height =
      15 /
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
    let width =
      15 /
      Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
      );

    document.body.addEventListener('mousemove', function (evt) {
      let a = evt.pageX - width / 2,
        t = evt.pageY - height / 2,
        o = width * a * -1,
        i = height * t * -1;

      const background = document.getElementById(elementId);
      const x = -(evt.pageX + this.offsetLeft) / 20;
      const y = -(evt.pageY + this.offsetTop) / 20;
      background.style.backgroundPosition =
        'calc( 50% + ' + o + 'px ) calc( 50% + ' + i + 'px )';
    });
  }, []);
};

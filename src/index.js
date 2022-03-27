/**
 * @typedef {{
 *  animate: (keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: number | KeyframeAnimationOptions)=> Animation,
 * duration: number,
 * delay: number,
 * setStyle: (options: CSSStyleDeclaration)=> void
 * }} Animate
 * @param {Animate}
 */
function fadeIn({ animate, duration, delay }) {
  animate([{ opacity: 0 }, { opacity: 1 }], {
    duration,
    delay,
    easing: "ease-in",
  });
}

/**
 * @typedef {{
 *  animate: (keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: number | KeyframeAnimationOptions)=> Animation,
 * duration: number,
 * delay: number,
 * setStyle: (options: CSSStyleDeclaration)=> void
 * }} Animate
 * @param {Animate}
 */
function fadeOut({ animate, duration, delay }) {
  animate([{ opacity: 1 }, { opacity: 0 }], {
    duration,
    delay,
    easing: "ease-in",
  });
}
/**
 * @typedef {{
 *  animate: (keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: number | KeyframeAnimationOptions)=> Animation,
 * duration: number,
 * delay: number,
 * setStyle: (options: CSSStyleDeclaration)=> void
 * }} Animate
 * @param {Animate}
 */
function bounce({ animate, duration, delay }) {
  animate(
    [
      {
        animationTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        transform: "translate3d(0, 0, 0)",
      },
      {
        animationTimingFunction: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        transform: "translate3d(0, -30 px, 0)",
      },
      {
        animationTimingFunction: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        transform: "translate3d(0, -15px, 0) ",
      },
      { transform: "translate3d(0,-4px,0)" },
    ],
    {
      duration,
      delay,
      easing: "ease",
    }
  );
}

export function flip({ animate, duration, delay }) {
  animate(
    [
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
      },
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
      },
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
      },
      {
        transform:
          "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
      },
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
      },
    ],
    {
      duration,
      delay,
      easing: "ease-in-out",
    }
  );
}

export function bubble({ animate, duration, delay }) {
  animate(
    [
      { transform: "scale3d(1, 1, 1)" },
      { transform: "scale3d(1.05, 1.05, 1.05)" },
      { transform: "scale3d(1, 1, 1)" },
    ],
    {
      delay,
      duration,
      easing: "ease-in-out",
    }
  );
}

export function swing({ animate, duration, delay }) {
  animate(
    [
      { transform: "rotate3d(0, 0, 1, 15deg)" },
      { transform: "rotate3d(0, 0, 1, -10deg)" },
      { transform: "rotate3d(0, 0, 1, 5deg)" },
      { transform: "rotate3d(0, 0, 1, -5deg)" },
      { transform: "rotate3d(0, 0, 1, 0deg)" },
    ],
    {
      delay,
      duration,
      easing: "ease-in-out",
    }
  );
}


export function slide({ animate, duration, delay }) {

}

export default {
  fadeIn,
  fadeOut,
  bounce,
  swing,
  bubble,
  flip,
};

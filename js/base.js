window.onload = function () {
  var main = new Vue({
    el: "#app",
    data: {
      currentActivity: "home",
    },
  });
  triggerAnimation();
};

function triggerAnimation() {
  new Vue({
    el: "#app",
    mounted() {
      TweenMax.set(`.polygons path`, {
        scale: 0,
        opacity: 0,
        transformOrigin: "50% 50%",
      });
      TweenMax.staggerTo(
        `.polygons path`,
        0.25,
        {
          scale: 1,
          opacity: 1,
          ease: Back.easeOut.config(0.7),
        },
        0.03
      );
    },
  });
}

function generate_hex() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

function reanimate() {
  new Vue({
    el: "#app",
    mounted() {
      paths = document.querySelectorAll("path");
      for (var i = 0; i < 41; i++) {
        paths[i].setAttribute("style", "fill:" + generate_hex());
      }
      TweenMax.set(`.polygons path`, {
        scale: 0,
        opacity: 0,
        transformOrigin: "50% 50%",
      });
      TweenMax.staggerTo(
        `.polygons path`,
        0.25,
        {
          scale: 1,
          opacity: 1,
          ease: Back.easeOut.config(0.7),
        },
        0.03
      );
    },
  });
}

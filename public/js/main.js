$(document).ready(function() {
  function a() {
    i.width = Math.max($(window).innerWidth(), 600),
      i.height = Math.max($(window).innerHeight(), 400)
  }

  function b() {
    var a = j.x / i.width * 2 - 1,
      b = j.y / i.height * 2 - 1,
      c = a * d,
      l = b * d;
    k.x = k.x * e + c * (1 - e),
      k.y = k.y * e + l * (1 - e);
    var m = "translate(" + k.x + "px," + k.y + "px)",
      n = "translate(" + k.x * f + "px," + k.y * f + "px)";
    g.css({
        transform: m
      }),
      h.css({
        transform: n
      })
  }
  var c = 40,
    d = 10,
    e = .93,
    f = .32,
    g = $(".hero-shape img"),
    h = $(".hero-xl-icon img");
  var i = {
      width: 400,
      height: 600
    },
    j = {
      x: 0,
      y: 0
    },
    k = {
      x: 0,
      y: 0
    };
  a(),
    setInterval(b, 1e3 / c),
    $(window).resize(a),
    $(document).mousemove(function(a) {
      j.x = a.clientX,
        j.y = a.clientY
    })
});


const headerEl = document.querySelector("#header");
// 페이지에 스크롤 이벤트 추가
window.addEventListener(
  "scroll",
  // _.throttle(함수, 시간)
  // 스크롤이 300ms마다 한번씩 실행되도록 설정
  _.throttle(function () {
    console.log(window.scrollY);
    // 페이지의 스크롤 위치가 200px 보다 크면
    if (window.scrollY > 200) {
      gsap.to(headerEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 페이지의 스크롤 위치가 200px 보다 작으면
      gsap.to(headerEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// AOS
AOS.init();

// 화면bg전환
// gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo(
//   "#about",
//   {
//     backgroundColor: gsap.getProperty("html", "--light"),
//   },
//   {
//     scrollTrigger: {
//       trigger: ".color-dark",
//       scrub: true,
//       end: "bottom bottom",
//     },
//     backgroundColor: gsap.getProperty("html", "--dark"),
//   }
// );
// txt-ani
// about
const animatedElement3 = document.querySelector(".about-txt");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 700) {
    animatedElement3.style.animation =
      "typing 3.5s steps(20, end) forwards, blink-caret 0.5s step-end 3 forwards";
  }
});
// best
const animatedElement4 = document.querySelector(".best-txt");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 1500) {
    animatedElement4.style.animation =
      "typing2 3.5s steps(20, end) forwards, blink-caret2 0.5s step-end 3 forwards";
  }
});
$(document).ready(function () {
  var zindex = 10;

  $(".best-card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($(".best-card-1").hasClass("showing")) {
      // a card is already in view
      $(".best-card.show").removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $(".best-card-1").removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this).css({ zIndex: zindex }).addClass("show");
      }

      zindex++;
    } else {
      // no cards in view
      $(".best-card-1").addClass("showing");
      $(this).css({ zIndex: zindex }).addClass("show");

      zindex++;
    }
  });
});
// gallery
const animatedElement5 = document.querySelector(".gallery-txt");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 2500) {
    animatedElement5.style.animation =
      "typing3 3.5s steps(20, end) forwards, blink-caret3 0.5s step-end 4 forwards";
  }
});
// community
const animatedElement6 = document.querySelector(".community-txt");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 4300) {
    animatedElement6.style.animation =
      "typing4 3.5s steps(20, end) forwards, blink-caret4 0.5s step-end 4 forwards";
  }
});

// 애니메이션 작동
const animatedElement = document.querySelector(".about-ani-txt");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 700) {
    animatedElement.style.webkitAnimation =
      "focus-in-contract 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    animatedElement.style.animation =
      "focus-in-contract 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
  }
});

// 마우스 효과
const text = document.querySelector(".mouse-text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll("span");
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 18 + "deg)";
}

document.addEventListener("mousemove", function (e) {
  text.style.left = e.pageX + "px";
  text.style.top = e.pageY + "px";
});

// best
$(".best-box").on("click", function () {
  $(".best-card").toggleClass("flipped");
});
$(".best-box2").on("click", function () {
  $(".best-card2").toggleClass("flipped");
});
$(".best-box3").on("click", function () {
  $(".best-card3").toggleClass("flipped");
});
$(".best-box4").on("click", function () {
  $(".best-card4").toggleClass("flipped");
});
$(".best-box5").on("click", function () {
  $(".best-card5").toggleClass("flipped");
});
$(".best-box6").on("click", function () {
  $(".best-card6").toggleClass("flipped");
});
// test

class CanvasWaves {
  constructor() {
    //Canvas and context
    this.canvas = $("#canvas-waves");
    this.context = this.canvas.get(0).getContext("2d");

    //Constants
    const ctx = this.context,
      cw = this.canvas.width();

    //Mouse position
    this.mouse = { x: 0, y: 0 };

    //Style properties
    this.styleWhite = true;
    this.styleWhiteValues = {
      dots: "rgba(155, 175, 190, .5)",
      waves: "rgba(0, 193, 204, .4)",
      background: "#fff",
    };
    this.styleBlackValues = {
      dots: "rgba(140, 160, 175, .8)",
      waves: "rgba(0, 193, 204, .4)",
      background: "#000",
    };
    this.styleColors = {
      dots: this.styleWhiteValues.dots,
      waves: this.styleWhiteValues.waves,
      background: this.styleWhiteValues.background,
    };

    //Gradients
    this.gradientMask = ctx.createLinearGradient(0, 0, cw, 0);
    this.gradientMask.addColorStop(0.0, "rgba(255,255,255,1.0)");
    this.gradientMask.addColorStop(0.2, "rgba(255,255,255,0.0)");
    this.gradientMask.addColorStop(0.8, "rgba(255,255,255,0.0)");
    this.gradientMask.addColorStop(1.0, "rgba(255,255,255,1.0)");

    //Request animation frame id
    this.rafId = undefined;

    //Frame counter
    this.frame = 0;

    //Style switch test
    $(window).keydown(this.windowKeyDownHandler.bind(this));

    //Mouse move event
    $(window).mousemove(this.windowMouseMoveHandler.bind(this));

    //Debug
    this.showLog = true;
    this.logList = [];
  }

  windowKeyDownHandler(evt) {
    if (evt.which != 13) return;

    if (this.styleWhite) this.setStyleBlack();
    else this.setStyleWhite();
    this.styleWhite = !this.styleWhite;
  }

  windowMouseMoveHandler(evt) {
    const px = evt.pageX - this.canvas.offset().left,
      py = evt.pageY - this.canvas.offset().top;

    TweenMax.to(this.mouse, 0.65, { x: px, y: py, ease: Power1.easeOut });
  }

  render() {
    const ctx = this.context,
      cw = this.canvas.width(),
      ch = Math.ceil(this.canvas.height() * 0.5),
      hh = Math.ceil(ch * 0.5),
      mx = this.mouse.x,
      my = this.mouse.y,
      frame = this.frame,
      dots = cw * 0.25,
      oy = ch;

    let grd, c, i, px, py, lh, wave;

    //Clear canvas (except buffer area)
    ctx.clearRect(0, 0, cw, ch);

    //Render red mouse trail buffer
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, oy, cw, ch);
    grd = ctx.createRadialGradient(mx, my + oy, 20, mx, my + oy, 100);
    grd.addColorStop(0.0, "rgba(255,0,0,0.05)");
    grd.addColorStop(1.0, "rgba(255,0,0,0.0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, oy, cw, ch);
    ctx.closePath();

    //Buffer pixel color
    c = ctx.getImageData(0, oy + hh, cw, 1).data;

    //Render gray dots
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = this.styleColors.dots;
    for (i = 0; i < dots; i++) {
      px = i * 4;
      py = hh;
      ctx.moveTo(px, py);
      ctx.lineTo(px, py + 2);
    }
    ctx.stroke();
    ctx.closePath();

    //Render wave lines
    ctx.beginPath();
    ctx.strokeStyle = this.styleColors.waves;
    for (i = 0; i < dots; i++) {
      px = i * 4;
      py = hh + 1;
      wave = (Math.cos((frame * 1.5 + i * 5) * 0.35 * 0.15) + 2) * 0.5;
      wave *= (Math.sin((frame - i * 50) * 0.35 * 0.15) + 2) * 0.5;

      //Draw waves
      lh = Math.max(Math.floor(c[i * 16] * 0.12) - 1, 0);
      ctx.moveTo(px + 2, py);
      ctx.lineTo(px + 2, py - lh * wave);
      ctx.lineTo(px + 2, py + lh * wave);
    }
    ctx.stroke();
    ctx.closePath();

    //Apply gradient mask
    ctx.fillStyle = this.gradientMask;
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(0, 0, cw, ch);
    ctx.globalCompositeOperation = "source-over";

    //Render debug
    //this.renderDebug();

    //Background color
    TweenMax.set("body", { backgroundColor: this.styleColors.background });

    //Render loop
    this.frame += 1;
    this.rafId = window.requestAnimationFrame(this.render.bind(this));
  }

  debugLog(p_description, p_value) {
    if (!this.showLog) return;
    if (!this.logList) this.logList = [];
    this.logList.push({ description: p_description, value: p_value });
  }

  renderDebug() {
    const list = this.logList,
      ctx = this.context;

    let message, log, i;

    ctx.save();
    ctx.fillStyle = "#f00";
    ctx.font = "bold 16px monospace";
    ctx.textBaseLine = "top";
    ctx.textAlign = "left";
    for (i = 0; i < list.length; i++) {
      log = list[i];
      message =
        !log.description && !log.value
          ? ""
          : log.description + ": " + log.value;
      ctx.fillText(message, 10, i * 20 + 20);
    }
    ctx.restore();

    this.logList = [];
  }

  setStyle(style, time) {
    const target = {
      dots: style.dots,
      waves: style.waves,
      background: style.background,
      ease: Cubic.easeInOut,
    };
    TweenMax.to(this.styleColors, time, target);
  }

  setStyleWhite(time = 1) {
    this.setStyle(this.styleWhiteValues, time);
  }

  setStyleBlack(time = 1) {
    this.setStyle(this.styleBlackValues, time);
  }

  startRender() {
    this.render();
  }

  stopRender() {
    window.cancelAnimationFrame(this.rafId);
    this.rafId = undefined;
  }
}

let canvasWaves = new CanvasWaves();
canvasWaves.startRender();
canvasWaves.setStyleBlack(0);

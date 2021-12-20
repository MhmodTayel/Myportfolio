$(document).ready(() => {
  AOS.init();
  $.ajax({
    url: "https://testimonialapi.toolcarton.com/api",
    success: function (res) {
      res.pop();
      res.forEach((user, idx) => {
        let { name, avatar, rating, designation, message } = user;
        if (idx == 0 || idx == 3 || idx == 6) {
          var flip = 'data-aos="fade-right" data-aos-duration="1000"';
        } else if (idx == 2 || idx == 5 || idx == 8) {
          var flip = 'data-aos="fade-left" data-aos-duration="1000"';
        } else {
          var flip = 'data-aos="fade-up" data-aos-duration="1000"';
        }
        $(".section-testimonial").append(
          `
          <article class="article" ${flip}>
            <span class="rating">${rating}</span>
            <header class="user-info">
              <img src="${avatar}" alt="" />
              <div> <h5>${name}</h5>
              <span> ${designation} </span></div>
             
            </header>
            <div class="text">
              ${message}
            </div>
          </article>
          `
        );
      });
    },
  });

  let heroTxt = [
    `H`,
    `i`,
    `<br />`,
    `I`,
    `'`,
    `m`,
    `<img src="./imgs/M.png" alt="" />`,
    `a`,
    `h`,
    `m`,
    `o`,
    `u`,
    `d`,
    `,`,
    `<br />`,
    `w`,
    `e`,
    `b`,
    ` `,
    `d`,
    `e`,
    `v`,
    `e`,
    `l`,
    `o`,
    `p`,
    `e`,
    `r`,
  ];
  var count = 0;
  var speed = 200;
  function typeWriter(textArr, ele) {
    if (count < textArr.length) {
      ele.innerHTML += `<span>${textArr[count]}</span>`;
      count++;
      setTimeout(() => {
        typeWriter(textArr, ele);
      }, speed);
    }
  }

  typeWriter(heroTxt, document.getElementById("heroText"));







  

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  document.addEventListener("scroll", function () {
    $(".progress").css("width", `${scale(window.scrollY, 0, 3726, 0, 100)}%`);
  });

  $(".circle").click(function () {
    $(".circle ul").toggleClass("clicked changed");
  });

  $(".container").click(function () {
    $(".circle ul").removeClass("clicked");
  });
});

$(document).ready(() => {
  $.ajax({
    url: "https://testimonialapi.toolcarton.com/api",
    success: function (res) {
      res.pop();
      res.forEach((user, idx) => {
        let { name, avatar, rating, designation, message } = user;
        $(".section-testimonial").append(
          `
          <article class="article">
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
});

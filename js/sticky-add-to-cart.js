!(function () {
  const t = document.querySelector(".ast-sticky-add-to-cart");
  if (t) {
    const c = document.querySelector(
      ".product .single_add_to_cart_button"
    ).offsetTop;
    window.addEventListener("scroll", function () {
      window.scrollY >= c
        ? t.classList.add("is-active")
        : t.classList.remove("is-active");
    });
  }
  var o = document.querySelector(
      ".ast-sticky-add-to-cart-action-wrap .single_link_to_cart_button"
    ),
    e = document.querySelector(".single_add_to_cart_button");
  if (o && e) {
    e = e.getBoundingClientRect().top;
    if (e) {
      const n = e + window.pageYOffset - 230;
      n &&
        o.addEventListener("click", function (t) {
          t.preventDefault(), window.scrollTo({ top: n, behavior: "smooth" });
        });
    }
  }
})();

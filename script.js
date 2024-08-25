
/*
 slider swiper activation
*/
var swiper = new Swiper(".hero__slider--activation", {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    clickable: true,
    speed: 500,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


/*
   OffCanvas Sidebar Activation
*/
function offcanvsSidebar(openTrigger, closeTrigger, wrapper) {
    let OpenTriggerprimary__btn = document.querySelectorAll(openTrigger);
    let closeTriggerprimary__btn = document.querySelector(closeTrigger);
    let WrapperSidebar = document.querySelector(wrapper);
    let wrapperOverlay = wrapper.replace(".", "");
  
    function handleBodyClass(evt) {
      let eventTarget = evt.target;
      if (!eventTarget.closest(wrapper) && !eventTarget.closest(openTrigger)) {
        WrapperSidebar.classList.remove("active");
        document
          .querySelector("body")
          .classList.remove(`${wrapperOverlay}_active`);
      }
    }
    if (OpenTriggerprimary__btn && WrapperSidebar) {
      OpenTriggerprimary__btn.forEach(function (singleItem) {
        singleItem.addEventListener("click", function (e) {
          if (e.target.dataset.offcanvas != undefined) {
            WrapperSidebar.classList.add("active");
            document
              .querySelector("body")
              .classList.add(`${wrapperOverlay}_active`);
            document.body.addEventListener("click", handleBodyClass.bind(this));
          }
        });
      });
    }
  
    if (closeTriggerprimary__btn && WrapperSidebar) {
      closeTriggerprimary__btn.addEventListener("click", function (e) {
        if (e.target.dataset.offcanvas != undefined) {
          WrapperSidebar.classList.remove("active");
          document
            .querySelector("body")
            .classList.remove(`${wrapperOverlay}_active`);
          document.body.removeEventListener("click", handleBodyClass.bind(this));
        }
      });
    }
  }


/*
   Offcanvas Mobile Menu Function
*/
const offcanvasHeader = function () {
    const offcanvasOpen = document.querySelector(
        ".offcanvas__header--menu__open--btn"
      ),
      offcanvasClose = document.querySelector(".offcanvas__close--btn"),
      offcanvasHeader = document.querySelector(".offcanvas__header"),
      offcanvasMenu = document.querySelector(".offcanvas__menu"),
      body = document.querySelector("body");
    /* Offcanvas SubMenu Toggle */
    if (offcanvasMenu) {
      offcanvasMenu
        .querySelectorAll(".offcanvas__sub_menu")
        .forEach(function (ul) {
          const subMenuToggle = document.createElement("button");
          subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
          ul.parentNode.appendChild(subMenuToggle);
        });
    }
    /* Open/Close Menu On Click Toggle Button */
    if (offcanvasOpen) {
      offcanvasOpen.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.dataset.offcanvas != undefined) {
          offcanvasHeader.classList.add("open");
          body.classList.add("mobile_menu_open");
        }
      });
    }
    if (offcanvasClose) {
      offcanvasClose.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.dataset.offcanvas != undefined) {
          offcanvasHeader.classList.remove("open");
          body.classList.remove("mobile_menu_open");
        }
      });
    }
  
    /* Mobile submenu slideToggle Activation */
    let mobileMenuWrapper = document.querySelector(".offcanvas__menu_ul");
    if (mobileMenuWrapper) {
      mobileMenuWrapper.addEventListener("click", function (e) {
        let targetElement = e.target;
        if (targetElement.classList.contains("offcanvas__sub_menu_toggle")) {
          const parent = targetElement.parentElement;
          if (parent.classList.contains("active")) {
            targetElement.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            targetElement.classList.add("active");
            parent.classList.add("active");
            slideDown(targetElement.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".offcanvas__sub_menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        }
      });
    }
  
    if (offcanvasHeader) {
      document.addEventListener("click", function (event) {
        if (
          !event.target.closest(".offcanvas__header--menu__open--btn") &&
          !event.target.classList.contains(
            ".offcanvas__header--menu__open--btn".replace(/\./, "")
          )
        ) {
          if (
            !event.target.closest(".offcanvas__header") &&
            !event.target.classList.contains(
              ".offcanvas__header".replace(/\./, "")
            )
          ) {
            offcanvasHeader.classList.remove("open");
            body.classList.remove("mobile_menu_open");
          }
        }
      });
    }
  
    /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
    if (offcanvasHeader) {
      window.addEventListener("resize", function () {
        if (window.outerWidth >= 992) {
          offcanvasHeader.classList.remove("open");
          body.classList.remove("mobile_menu_open");
        }
      });
    }
  };
  offcanvasHeader();
  
  // Category Submenu
  
  const categoryMobileMenu = function () {
    const CategorySubMenu = document.querySelector(".category__mobile--menu");
    if (CategorySubMenu) {
      CategorySubMenu.querySelectorAll(".category__sub--menu").forEach(function (
        ul
      ) {
        let catsubMenuToggle = document.createElement("button");
        catsubMenuToggle.classList.add("category__sub--menu_toggle");
        ul.parentNode.appendChild(catsubMenuToggle);
      });
    }
    let categoryMenuWrapper = document.querySelector(
      ".category__mobile--menu_ul"
    );
    if (categoryMenuWrapper) {
      categoryMenuWrapper.addEventListener("click", function (e) {
        let targetElement = e.target;
        if (targetElement.classList.contains("category__sub--menu_toggle")) {
          const parent = targetElement.parentElement;
          if (parent.classList.contains("active")) {
            targetElement.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".category__sub--menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            targetElement.classList.add("active");
            parent.classList.add("active");
            slideDown(targetElement.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".category__sub--menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        }
      });
    }
  };
  categoryMobileMenu();


/*
  Footer widget Activation
*/
let accordion = true;
const footerWidgetAccordion = function () {
  accordion = false;
  let footerWidgetContainer = document.querySelector(".main__footer");
  footerWidgetContainer.addEventListener("click", function (evt) {
    let singleItemTarget = evt.target;
    if (singleItemTarget.classList.contains("footer__widget--button")) {
      const footerWidget = singleItemTarget.closest(".footer__widget"),
        footerWidgetInner = footerWidget.querySelector(
          ".footer__widget--inner"
        );
      if (footerWidget.classList.contains("active")) {
        footerWidget.classList.remove("active");
        slideUp(footerWidgetInner);
      } else {
        footerWidget.classList.add("active");
        slideDown(footerWidgetInner);
        getSiblings(footerWidget).forEach(function (item) {
          const footerWidgetInner = item.querySelector(
            ".footer__widget--inner"
          );

          item.classList.remove("active");
          slideUp(footerWidgetInner);
        });
      }
    }
  });
};

window.addEventListener("load", function () {
  if (accordion) {
    footerWidgetAccordion();
  }
});
window.addEventListener("resize", function () {
  document.querySelectorAll(".footer__widget").forEach(function (item) {
    if (window.outerWidth >= 768) {
      item.classList.remove("active");
      item.querySelector(".footer__widget--inner").style.display = "";
    }
  });
  if (accordion) {
    footerWidgetAccordion();
  }
});

  
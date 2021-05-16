function slidersJob() {

    var swiper = new Swiper('.our-job .swiper-container', {
        speed: 1000,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.our-job .swiper-button-next',
            prevEl: '.our-job .swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerView: 'auto',
                spaceBetween: 20,
                effect: 'slide',
                fadeEffect: {
                    crossFade: false
                },
            },

            992: {
                slidesPerView: 1,
                spaceBetween: 30,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            },
        }
    })
}

function slidersFeedback() {
    var swiper = new Swiper('.feedback .swiper-container', {
        speed: 1000,
        spaceBetween: 30,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerView: 'auto',
                spaceBetween: 20,
                effect: 'slide',
                fadeEffect: {
                    crossFade: false
                },
            },

            992: {
                slidesPerView: 1,
                spaceBetween: 30,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            },
        }
    })
}

function openVideo() {
    $(".feedback-modal").addClass("feedback-modal--active");
    $(".modal-bg").addClass("modal-bg--active")
}

function closeVideo() {
    $(".feedback-modal").removeClass("feedback-modal--active");
    $(".modal-bg").removeClass("modal-bg--active")
}



function closeContactModal() {
    $(".agree-modal").removeClass("agree-modal--active");
    $(".modal-bg").removeClass("modal-bg--active");
}

function openAgreeModal() {
    $(".contact-modal").removeClass("contact-modal--active");
    $(".agree-modal").addClass("agree-modal--active");
    $(".modal-bg").addClass("modal-bg--active")
}


function checkInput() {
    let aboutInput = $("#about-project");
    let nameInput = $("#name");
    let phoneInput = $("#tel");
    let formSuccess = 0;
    if (aboutInput.val().length < 1) {
        aboutInput.addClass("input-error");
        $(".contact-modal__hint").hide()
        $(".contact-modal__error.about-project").show()
    } else {
        aboutInput.removeClass("input-error");
        formSuccess++;
        $(".contact-modal__hint").show()
        $(".contact-modal__error.about-project").hide()
    }
    if (nameInput.val().length < 1) {
        nameInput.addClass("input-error");
        $(".contact-modal__error.name").show()
    } else {
        nameInput.removeClass("input-error");
        $(".contact-modal__error.name").hide()
        formSuccess++;
    }
    if (phoneInput.val().length < 1) {
        phoneInput.addClass("input-error");
        $(".contact-modal__error.tel").show()
    } else {
        phoneInput.removeClass("input-error");
        $(".contact-modal__error.name").hide()
        formSuccess++;
    }
    if (formSuccess === 3) {
        $(".contact-modal").hide();
        $(".thanks").show()
        return true;
    }
}


$(document).ready(function() {
    slidersFeedback()
    slidersJob()


    $(".questions__show").click(function() {
        $(this).children("span").children(".questions__btn").toggleClass("questions__btn--active")
            // $(".questions__hidden").slideToggle();
        $(this).siblings(".questions__hidden").slideToggle();
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        // $(".nav").toggleClass("nav--active");
        $(".nav").slideToggle(100);
    })

    $(".feedback__play-btn").click(function() {
        openVideo()
    })
    $(".modal-bg").click(function() {
        closeVideo()
        closeContactModal()
    })


    let aboutInput = $("#about-project").val();
    let nameInput = $("#name").val();
    let phoneInput = $("#tel").val();
    const form = $("#form");
    // form.addEventListener("submit", formSend)
    form.submit(formSend)
    async function formSend(e) {

        e.preventDefault();
        checkInput()

        let formSuccess = checkInput();
        let formData = new FormData();
        formData.append('about', aboutInput);
        formData.append('name', nameInput);
        formData.append('phone', phoneInput);
        console.log(formData)
        console.log(formSuccess)
            // if (formSuccess) {
            //     let response = await fetch('sendmail.php', {
            //         method: "POST",
            //         body: formData
            //     });
            //     if (response.ok) {
            //         let result = await response.json();
            //         alert(result.message);
            //         aboutInput = "";
            //         nameInput = "";
            //         phoneInput = "";
            //     }else{
            //         alert("error")
            //     }
            // }
    }
    $(".nav-home .nav__item").on("click", "a", function(event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var idc = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(idc).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({ scrollTop: top }, 700);
    });
    $(".footer__item").on("click", "a", function(event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var idc = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(idc).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({ scrollTop: top }, 700);
    });


    $("#about-project").keydown(function() {
        if ($(this).val() !== "") {
            $("label[for='about-project']").addClass("active");
        } else {
            $("label[for='about-project']").removeClass("active");
        }
    })
    autosize($('textarea'));
    $("#name").keydown(function() {
        if ($(this).val() !== "") {
            $("label[for='name']").addClass("active");
        } else {
            $("label[for='name']").removeClass("active");
        }
    })
    $("#tel").keydown(function() {
        if ($(this).val() !== "") {
            $("label[for='tel']").addClass("active");

        } else {
            $("label[for='tel']").removeClass("active");
        }
    })
    $.fn.setCursorPosition = function(pos) {
        this.each(function(index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };
    $("#tel").click(function() {
        $("#tel").setCursorPosition(3)
    }).mask("+7 999 999 99 99")

});
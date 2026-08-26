document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PRELOADER
    ========================= */

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function () {

            preloader.style.opacity = "0";

        }, 250);


        setTimeout(function () {

            preloader.remove();

        }, 700);

    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navbar =
        document.querySelector(".navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            menuToggle.classList.toggle("active");

            const expanded =
                navbar.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                expanded
            );

        });


        navbar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       BACK TO TOP
    ========================= */

    const backTop =
        document.querySelector(".back-to-top");


    window.addEventListener("scroll", function () {

        if (!backTop) return;


        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    if (backTop) {

        backTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =========================
       PRODUCT QUOTE BUTTONS
    ========================= */

    document.querySelectorAll(
        ".product-quote"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const product =
                    button.dataset.product ||
                    "Custom Bottle Requirement";


                const bottleSelect =
                    document.querySelector(
                        "#bottleType"
                    );


                if (bottleSelect) {

                    if (product.includes("250")) {

                        bottleSelect.value =
                            "250ml";

                    }

                    else if (product.includes("500")) {

                        bottleSelect.value =
                            "500ml";

                    }

                    else if (product.includes("750")) {

                        bottleSelect.value =
                            "750ml";

                    }

                    else if (product.includes("1 L")) {

                        bottleSelect.value =
                            "1 Litre";

                    }

                    else {

                        bottleSelect.value =
                            "Custom";

                    }

                }


                const message =
                    document.querySelector(
                        "#message"
                    );


                if (message && !message.value) {

                    message.value =
                        "I am interested in " +
                        product +
                        ". Please share details, pricing and available options.";

                }


                const form =
                    document.querySelector(
                        "#quoteForm"
                    );


                if (form) {

                    form.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }

        );

    });


    /* =========================
       PHONE VALIDATION
    ========================= */

    const phoneInput =
        document.querySelector("#phone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                phoneInput.value =
                    phoneInput.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

            }
        );

    }


    /* =========================
       QUANTITY
    ========================= */

    const quantityInput =
        document.querySelector("#quantity");


    if (quantityInput) {

        quantityInput.addEventListener(
            "input",
            function () {

                quantityInput.value =
                    quantityInput.value
                        .replace(/\D/g, "");

            }
        );

    }


    /* =========================
       WHATSAPP QUOTE FORM
    ========================= */

    const quoteForm =
        document.querySelector("#quoteForm");


    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.querySelector("#name")
                    ?.value
                    .trim();


                const business =
                    document.querySelector("#business")
                    ?.value
                    .trim();


                const phone =
                    document.querySelector("#phone")
                    ?.value
                    .trim();


                const bottleType =
                    document.querySelector(
                        "#bottleType"
                    )
                    ?.value
                    .trim();


                const quantity =
                    document.querySelector(
                        "#quantity"
                    )
                    ?.value
                    .trim();


                const message =
                    document.querySelector(
                        "#message"
                    )
                    ?.value
                    .trim();


                /* NAME */

                if (!name) {

                    alert(
                        "Please enter your name."
                    );

                    return;

                }


                /* PHONE */

                if (
                    !/^[6-9]\d{9}$/.test(phone)
                ) {

                    alert(
                        "Please enter a valid 10-digit Indian mobile number."
                    );

                    return;

                }


                /* CREATE WHATSAPP MESSAGE */

                let whatsappMessage =
                    "Hello PATIL AQUA SOLUTIONS,%0A%0A";


                whatsappMessage +=
                    "Name: " +
                    encodeURIComponent(name);


                whatsappMessage +=
                    "%0AWhatsApp: " +
                    encodeURIComponent(phone);


                if (business) {

                    whatsappMessage +=
                        "%0ABusiness: " +
                        encodeURIComponent(
                            business
                        );

                }


                if (bottleType) {

                    whatsappMessage +=
                        "%0ABottle Type: " +
                        encodeURIComponent(
                            bottleType
                        );

                }


                if (quantity) {

                    whatsappMessage +=
                        "%0AEstimated Quantity: " +
                        encodeURIComponent(
                            quantity
                        );

                }


                if (message) {

                    whatsappMessage +=
                        "%0ARequirement: " +
                        encodeURIComponent(
                            message
                        );

                }


                /* OPEN WHATSAPP */

                const whatsappURL =
                    "https://wa.me/919404925598?text=" +
                    whatsappMessage;


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }

        );

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    document.querySelectorAll(
        "[data-year]"
    ).forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});
/* =========================================================
   TECHNOVA 2026 - COLLEGE EVENT PORTAL
   JavaScript DOM Manipulation
   ========================================================= */


/* ================= REGISTRATION FORM ================= */

const registrationForm = document.getElementById("registrationForm");

const registrationSuccess =
    document.getElementById("registrationSuccess");

const successText =
    document.getElementById("successText");

const newRegistrationBtn =
    document.getElementById("newRegistrationBtn");


registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    /*
        Bootstrap validation
    */
    if (!registrationForm.checkValidity()) {

        registrationForm.classList.add("was-validated");

        return;
    }


    /*
        Read form values using DOM
    */
    const participantName =
        document.getElementById("participantName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const department =
        document.getElementById("department").value;

    const year =
        document.getElementById("year").value;

    const selectedEvent =
        document.getElementById("eventSelect").value;


    /*
        Display dynamic success message
    */
    successText.innerHTML =
        "Thank you, <strong>" +
        participantName +
        "</strong>! Your registration for " +
        "<strong>" +
        selectedEvent +
        "</strong> has been successfully submitted." +
        "<br><br>" +
        "Department: <strong>" +
        department +
        "</strong>" +
        " | Year: <strong>" +
        year +
        "</strong>" +
        "<br>" +
        "Contact: <strong>" +
        mobile +
        "</strong>";


    /*
        Hide form
    */
    registrationForm.style.display = "none";


    /*
        Display success message
    */
    registrationSuccess.style.display = "block";


    /*
        Show browser alert
    */
    alert(
        "Registration Successful!\n\n" +
        "Participant: " + participantName +
        "\nEvent: " + selectedEvent
    );


    /*
        Scroll to success message
    */
    registrationSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* ================= NEW REGISTRATION ================= */

newRegistrationBtn.addEventListener("click", function () {

    registrationForm.reset();

    registrationForm.classList.remove("was-validated");

    registrationSuccess.style.display = "none";

    registrationForm.style.display = "block";

    registrationForm.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* ================= EVENT REGISTRATION BUTTONS ================= */

const registerEventButtons =
    document.querySelectorAll(".register-event-btn");


const eventSelect =
    document.getElementById("eventSelect");


registerEventButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
            Get event name from data-event
        */
        const eventName =
            button.getAttribute("data-event");


        /*
            Automatically select event
        */
        eventSelect.value = eventName;


        /*
            Scroll to registration section
        */
        document.getElementById("registration").scrollIntoView({
            behavior: "smooth"
        });


        /*
            Highlight selected event
        */
        eventSelect.focus();

    });

});


/* ================= EVENT FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const eventItems =
    document.querySelectorAll(".event-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
            Remove active class from all buttons
        */
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        /*
            Add active class to clicked button
        */
        button.classList.add("active");


        /*
            Get selected category
        */
        const selectedCategory =
            button.getAttribute("data-category");


        /*
            Filter events
        */
        eventItems.forEach(function (eventItem) {

            const eventCategory =
                eventItem.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === eventCategory
            ) {

                eventItem.classList.remove("hidden");

            } else {

                eventItem.classList.add("hidden");

            }

        });

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const contactSuccess =
    document.getElementById("contactSuccess");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /*
        Validate contact form
    */
    if (!contactForm.checkValidity()) {

        contactForm.classList.add("was-validated");

        return;
    }


    /*
        Read contact form values
    */
    const contactName =
        document.getElementById("contactName").value.trim();

    const contactEmail =
        document.getElementById("contactEmail").value.trim();

    const contactSubject =
        document.getElementById("contactSubject").value.trim();


    /*
        Display success message
    */
    contactSuccess.innerHTML =
        '<i class="bi bi-check-circle"></i> ' +
        "Thank you, <strong>" +
        contactName +
        "</strong>! Your enquiry regarding " +
        "<strong>" +
        contactSubject +
        "</strong> has been submitted successfully.";


    contactSuccess.style.display = "block";


    /*
        Show alert
    */
    alert(
        "Message Sent Successfully!\n\n" +
        "Thank you, " +
        contactName +
        "."
    );


    /*
        Reset form
    */
    contactForm.reset();

    contactForm.classList.remove("was-validated");

});


/* ================= DYNAMIC ANNOUNCEMENT ================= */

const announcementContainer =
    document.getElementById("announcementContainer");


/*
    Create a new announcement dynamically
*/
function addAnnouncement(title, description, date) {

    const announcement =
        document.createElement("div");

    announcement.className =
        "col-md-4";


    announcement.innerHTML = `
        <div class="announcement-card">

            <div class="announcement-icon">
                <i class="bi bi-info-circle"></i>
            </div>

            <h4>${title}</h4>

            <p>${description}</p>

            <span class="announcement-date">
                ${date}
            </span>

        </div>
    `;


    announcementContainer.appendChild(announcement);

}


/*
    Example dynamic announcement
*/
addAnnouncement(
    "Volunteer Registration",
    "Students interested in volunteering for TechNova 2026 can register with the event coordination team.",
    "September 25, 2026"
);


/* ================= NAVIGATION AUTO CLOSE ================= */

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.getElementById("navbarNav");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        /*
            Close Bootstrap mobile menu
            when a navigation link is clicked.
        */
        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* ================= PAGE LOAD MESSAGE ================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "TechNova 2026 College Event Portal loaded successfully."
    );

});
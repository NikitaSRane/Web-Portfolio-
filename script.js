const resumeBtns = document.querySelectorAll(".resume_btn");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const menuIcon = document.querySelector("#menu_icon");
const navbar = document.querySelector("header nav");

const modeBtn = document.querySelector(".mode");

// Default mode is DARK
document.body.classList.remove("light");
modeBtn.innerHTML = "<i class='bx bxs-moon'></i>";

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        modeBtn.innerHTML = "<i class='bx bxs-sun'></i>";

    } else {
        modeBtn.innerHTML = "<i class='bx bxs-moon'></i>";
    }
});

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    })

    sections.forEach(section => {
        section.classList.remove('active');
    })

    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            sections[idx].classList.add('active');

        }
    })
})

sections.forEach((section, idx) => {
    section.addEventListener('click', () => {
        if (!section.classList.contains('active')) {
            activePage();
            section.classList.add('active');
        }
    })
})

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume_detail");

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});



const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})


/* EmailJS to send email  */

emailjs.init("sYS24nCftsrG_v6cg");

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // avoid page reload

    const status=document.querySelector("#status");

    // these IDs from the previous steps
    emailjs.sendForm('service_0b5feho', 'template_470l6mk', this)
        .then(() => {
            status.textContent="Email sent successfully.";
            status.style.color="green";
            this.reset();
        })
        .catch((error) => {
            status.textContent="Failed to sent email.";
            status.style.color="red";
            console.log("Error: ",error);
        });
});


function openNav() {
    document.getElementById("sideNav").style.left = "0";
}

function closeNav() {
    document.getElementById("sideNav").style.left = "-250px";
}

function toggleSidebar() {
    const sideNav = document.getElementById("sideNav");
    const currentLeft = parseFloat(getComputedStyle(sideNav).left);
    if (currentLeft < 0) {
        openNav();
    } else {
        closeNav();
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    closeNav();
}

// Fetch and display GitHub repositories
fetch('https://api.github.com/users/DavidHCCNguyen/repos?per_page=100')
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repoList');
        const ul = document.createElement('ul');
        data.forEach(repo => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = repo.html_url;
            a.textContent = repo.name;
            a.target = "_blank";
            li.appendChild(a);
            ul.appendChild(li);
        });
        repoList.appendChild(ul);
    })
    .catch(error => console.error('Error fetching GitHub repositories:', error));

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.hidden');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('visible');
            }
        }
    }
});

let isDarkMode = false;

function toggleDarkMode() {
    const body = document.body;
    const footer = document.querySelector('footer');

    if (isDarkMode) {
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
        github.style.backgroundColor = '#f4f4f4';
    } else {
        body.style.backgroundColor = '#222';
        body.style.color = '#fff';
        github.style.backgroundColor = 'black';
    }

    isDarkMode = !isDarkMode;
}
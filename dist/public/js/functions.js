const     nav                 = document.querySelector('nav'),
          navItems            = document.querySelectorAll('nav ul li a'),
          navUl               = document.querySelector('nav ul'),
          navArray            = Array.from(navItems),
          menuBtn             = document.querySelector('.btn-menu');
var       navItemIndex        = 0;

toggleActiveLink = () => {
          if (navItemIndex === navArray.length - 1) {
                    return;
          }
          else {
                    for (var i = 0; i < navArray.length; i++) {
                              navArray[i].classList.remove('active-nav-item');
                    }
                    navArray[navItemIndex].classList.add('active-nav-item');
          }
          toggleMenu();
}

toggleMenu = () => {
          navUl.classList.toggle('d-block');
}

navUl.addEventListener('click', function (e) {
          let clickedNavItem = e.target.closest('a');
          navItemIndex = navArray.findIndex(a => a === clickedNavItem);
          console.log(navItemIndex);
          toggleActiveLink();
})

menuBtn.addEventListener('click', function () {
          toggleMenu();
})

addToClipboard = (e) => {
          let text = document.getElementById("copyEmail").innerHTML;
          navigator.clipboard.writeText(text);
          alert('Copied ' + "'" + text + "'");
}
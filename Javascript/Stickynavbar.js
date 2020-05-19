window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar"); // finder id navbar i index.html siden
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")  // gør at den tilføjer sticky i en class
        } else {
            navbar.classList.remove("sticky");  // fjerner sticky fra id'ets
        }
    }
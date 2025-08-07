function loadModules() {
    topBarLoad();
    navBarLoad();
}
function topBarLoad() {
    var title = document.getElementById("title")
    title.innerHTML = '<div id="logoContainer">\
                            <img id="socLogo" src="../images/AIS_logo.png">\
                        </div>\
                        <div id="titleContainer">\
                            <h1>HKU AI Society</h1>\
                        </div>'
}

function navBarLoad() {
    var navBar = document.getElementsByClassName("navbar")[0]
    navBar.innerHTML = `<nav class="navbar" role="navigation">\ 
                            <ul class="main-menu">\ 
                            <li class="menu-item"><a href="./home.html">Home</a></li>\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="#">Freshmen Guide</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./courses.html">Course Info</a></li>\ 
                                <li class="submenu-item"><a href="./courses.html#APAISyll">Applied AI Syllabus</a></li>\ 
                                <li class="submenu-item"><a href="./course helper.html">Course Selection Tool </a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="#">AI Society</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./aisoc.html">Who We Are</a></li>\ 
                                <li class="submenu-item"><a href="./aisoc.html#events">Events</a></li>\ 
                                <li class="submenu-item"><a href="./aisoc.html#excos">The Exco Team</a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item"><a href="#">FAQs</a></li>\ 
                            <li class="menu-item"><a href="contact.html">Contact</a></li>\ 
                            <li class="menu-item"><a href="#">More Coming Soon!</a></li>\ 
                            </ul>\ 
                        </nav>`






}


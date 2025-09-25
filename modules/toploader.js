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
                            <h1 id="socName">HKU AI Society</h1>\
                        </div>'
}

function navBarLoad() {
    var navBar = document.getElementsByClassName("navbar")[0]
    navBar.innerHTML = `<nav class="navbar" role="navigation">\ 
                            <ul class="main-menu">\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="./home.html">Home</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./home.html#whoweare">Who We Are</a></li>\ 
                                <li class="submenu-item"><a href="./home.html#events">Events</a></li>\ 
                                </ul>\ 
                            </li>\ 
                                
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="#">Freshmen Guide</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./courses.html">Course Info</a></li>\ 
                                <li class="submenu-item"><a href="./courses.html#APAISyll">Applied AI Syllabus</a></li>\ 
                                <li class="submenu-item"><a href="./course helper.html">Course Selection Tool </a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="./aisoc.html">AI Society</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./aisoc.html">The Exco Team</a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <!-- <li class="menu-item"><a href="#">FAQs</a></li> -->\ 
                            <li class="menu-item"><a href="contact.html">Contact</a></li>\ 
                            <li class="menu-item"><a href="#">More Coming Soon!</a></li>\ 
                            </ul>\ 
                            <!-- AI Resources in HKU -->
                            
                        </nav>`






}


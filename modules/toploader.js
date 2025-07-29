function loadModules(){
    topBarLoad();
    navBarLoad();
}
function topBarLoad(){
    var title = document.getElementById("title")
    title.innerHTML =   '<div id="logoContainer">\
                            <img id="socLogo" src="../images/AIS_logo.png">\
                        </div>\
                        <div id="titleContainer">\
                            <h1>HKU AI Society</h1>\
                        </div>'
}

function navBarLoad(){
    var navBar = document.getElementsByClassName("navbar")[0]
    navBar.innerHTML = `<nav class="navbar" role="navigation">\ 
                            <ul class="main-menu">\ 
                            <li class="menu-item"><a href="./home.html">Home</a></li>\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="#">Freshmen Guide</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="./course">Couse Selection</a></li>\ 
                                <li class="submenu-item"><a href="#12">Applied AI Syllabus</a></li>\ 
                                <li class="submenu-item"><a href="./course helper.html">Couse Selection Tool </a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="#">AI Society</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="#21">Who We Are</a></li>\ 
                                <li class="submenu-item"><a href="#22">Events</a></li>\ 
                                <li class="submenu-item"><a href="#23">Submenu 2.3</a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item has-dropdown" aria-haspopup="true">\ 
                                <a href="#">Menu 3</a>\ 
                                <ul class="dropdown-menu">\ 
                                <li class="submenu-item"><a href="#31">Submenu 3.1</a></li>\ 
                                <li class="submenu-item"><a href="#32">Submenu 3.2</a></li>\ 
                                <li class="submenu-item"><a href="#33">Submenu 3.3</a></li>\ 
                                </ul>\ 
                            </li>\ 
                            <li class="menu-item"><a href="#">FAQs</a></li>\ 
                            <li class="menu-item"><a href="#">Contact</a></li>\ 
                            </ul>\ 
                        </nav>`


    
    
    
    
}


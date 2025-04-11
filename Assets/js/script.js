document.addEventListener("DOMContentLoaded", function () {
  // Build the Navbar dynamically with Contact Us button
  const navbar = `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Home&nbsp;&nbsp;&nbsp;|</a></li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">The XINNIX Difference</a></li>
                <li><a class="dropdown-item" href="#">Working at XINNIX</a></li>
                <li><a class="dropdown-item" href="#">XINNIX Gives Back</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Solutions&nbsp;&nbsp;</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Sales Performance</a></li>
                <li><a class="dropdown-item" href="#">Leadership Development</a></li>
                <li><a class="dropdown-item" href="#">Operational Performance</a></li>
                <li><a class="dropdown-item" href="#">Business Enhancement Classes</a></li>
                <li><a class="dropdown-item" href="#">Consulting</a></li>
                <li><a class="dropdown-item" href="#">Workshops & Keynotes</a></li>
                <li><a class="dropdown-item" href="#">Events</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Industries&nbsp;&nbsp;</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Financial Services</a></li>
                <li><a class="dropdown-item" href="#">Healthcare</a></li>
                <li><a class="dropdown-item" href="#">Hospitality</a></li>
                <li><a class="dropdown-item" href="#">Information Technology</a></li>
                <li><a class="dropdown-item" href="#">Insurance</a></li>
                <li><a class="dropdown-item" href="#">Manufacturing</a></li>
                <li><a class="dropdown-item" href="#">Mortgage</a></li>
                <li><a class="dropdown-item" href="#">All Industries</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Partnerships&nbsp;&nbsp;</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Partnerships</a></li>
                <li><a class="dropdown-item" href="#">Affiliates</a></li>
                <li><a class="dropdown-item" href="#">Are You a FOX?</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Resources&nbsp;&nbsp;</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">eBooks</a></li>
                <li><a class="dropdown-item" href="#">Guides</a></li>
                <li><a class="dropdown-item" href="#">Podcast Library</a></li>
                <li><a class="dropdown-item" href="#">Newsroom</a></li>
              </ul>
            </li>

            <li class="nav-item"><a class="nav-link" href="#">Blog&nbsp;&nbsp;</a></li>
          </ul>
          <!-- Contact Us Button -->
          <a href="#contact" class="btn btn-contact-us">Contact Us</a>
        </div>
      </div>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbar;
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navbarToggle() {
    let x = document.getElementById("nav-links");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
  }

/* Showing / hiding tabs in Top Book Section */

function selectTab(tabIndex) {
  //Hides all TABS
  document.getElementById('bookTab1Content').style.display="none";
  document.getElementById('bookTab2Content').style.display="none";
  document.getElementById('bookTab3Content').style.display="none";
  document.getElementById('bookTab4Content').style.display="none";
  
  //Shows the selected TAB
  document.getElementById('bookTab' + tabIndex + 'Content').style.display="grid";  
}

//Scroll to section

window.smoothScroll = function(target) {
  let scrollContainer = target;
  do { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  let targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
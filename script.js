document.addEventListener("DOMContentLoaded", function () {
  // Get carousel elements
  const prevButton = document.querySelector("._prev");
  const nextButton = document.querySelector("._next");
  const carousel = document.querySelector(".carousel-inner");

  // Add event listener for previous button
  prevButton.addEventListener("click", function () {
      const activeItem = carousel.querySelector(".carousel-item.active");
      const prevItem = activeItem.previousElementSibling || carousel.lastElementChild;
      activeItem.classList.remove("active");
      prevItem.classList.add("active");
  });

  // Add event listener for next button
  nextButton.addEventListener("click", function () {
      const activeItem = carousel.querySelector(".carousel-item.active");
      const nextItem = activeItem.nextElementSibling || carousel.firstElementChild;
      activeItem.classList.remove("active");
      nextItem.classList.add("active");
  });
});
//   show and hide
function showDiv(divId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
      content.classList.remove('active');
  });

  const selectedDiv = document.getElementById(divId);
  if (selectedDiv) {
      selectedDiv.classList.add('active');
  }
  
}

function showProj(divId) {
  const introProject = document.querySelector('.intro.project');

  if (divId === 'div2') {
      introProject.classList.remove('active');
  } else {
      introProject.classList.add('active');
  }
}

function showDivs(divIdPrefix) {
  // Remove 'active' class from all content divs
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
      content.classList.remove('active');
  });

  // Add 'active' class to all divs with the specified prefix (divIdPrefix)
  const selectedDivs = document.querySelectorAll(`[id^="${divIdPrefix}"]`);
  selectedDivs.forEach(div => {
    div.classList.add('active');
  });
}

function projDisplay(proj) {
  console.log('Function called with:', proj); 

  const projects = document.querySelectorAll('.proj-details');
  console.log('Projects found:', projects); 

  projects.forEach(pro => {
      pro.classList.remove('active');
      console.log('Removed active class from:', pro.id); 
  });

  const selectedProj = document.getElementById(proj);
  if (selectedProj) {
      selectedProj.classList.add('active');
      console.log('Added active class to:', selectedProj.id); 
  } else {
      console.log('Project not found:', proj); 
  }
}


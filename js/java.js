document.querySelectorAll(".hover1, .hover2, .hover3, .hover4")
  .forEach((item) => {
    const pBox = item.querySelector(".p-box");
    if (pBox) pBox.style.visibility = "hidden";
    

    item.addEventListener("mouseenter", () => {
      if (pBox) pBox.style.visibility = "visible";
      item.style.transform = "translateY(-70px)";
      item.style.transition = "0.5s ease";
    });

    item.addEventListener("mouseleave", () => {
      if (pBox) pBox.style.visibility = "hidden";
      item.style.transform = "translateY(0)";
    });
  });



  


 
  

 
  
  
 
  

  



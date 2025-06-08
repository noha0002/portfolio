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

 
  

 
  
  
 
  

  

//el betyder "element" så det du gør, er "selecting ur .b-box"
// og hver p-box "foreach" for elementet "style.backgroundcolor" "
// pBox.style.visibility = "hidden"; " den skal først gemmes før, det vises.

document.querySelectorAll(".hover1, .hover2, .hover3").forEach((item) => {
  const pBox = item.querySelector(".p-box");
  pBox.style.visibility = "hidden"; 
 
  

  item.addEventListener("mouseenter", () => {
    pBox.style.visibility = "visible";
  });

  item.addEventListener("mouseleave", () => {
    pBox.style.visibility = "hidden";
  });
});



  document.querySelectorAll(".hover1, .hover2, .hover3").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-70px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
      item.style.transition ="0.5s ease";
    });
  });

  
  


//el betyder "element" så det du gør, er "selecting ur .b-box" 
// og hver p-box "foreach" for elementet "style.backgroundcolor" " 
// pBox.style.visibility = "hidden"; " den skal først gemmes før, det vises. 

  
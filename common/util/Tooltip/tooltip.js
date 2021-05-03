(() => {
  const requiredTooltipElems = document.querySelectorAll(
    '[data-tip="tooltip"]'
  );

  const tooltipElem = document.createElement("div");
  tooltipElem.style.position = "fixed";
  tooltipElem.style.backgroundColor = "rgba(0, 0, 0, 0.452)";
  tooltipElem.style.padding = "5px 7px";
  tooltipElem.style.borderRadius = "5px";
  tooltipElem.style.color = 'white'
  tooltipElem.style.transition = ".3s";


  document.body.appendChild(tooltipElem);

  for (let i = 0; i < requiredTooltipElems.length; i++) {
    requiredTooltipElems[i].addEventListener("mouseover", () => {
      let viewportOffset = requiredTooltipElems[i].getBoundingClientRect();

      tooltipElem.innerText = requiredTooltipElems[i].getAttribute("title");
      tooltipElem.style.top = `${viewportOffset.top + requiredTooltipElems[i].offsetHeight + 20}px`;
      tooltipElem.style.left = `${viewportOffset.left}px`;

      console.log( tooltipElem)
      tooltipElem.style.opacity = "1";
      
      
    });
    
    requiredTooltipElems[i].addEventListener("mouseout", () => {
        tooltipElem.style.opacity = "0";
        // tooltipElem.remove();
    });

  }

})();

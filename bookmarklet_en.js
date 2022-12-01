javascript: ((adWord) => {
  function removeAds() {
    Array.prototype.filter
      .call(document.querySelectorAll("span"), (e) =>
        e.innerText?.includes(adWord)
      )
      .forEach((e) => {
        const target = e.closest("[data-testid=cellInnerDiv]");
        if (target) target.style.display = "none";
      });
    setTimeout(removeAds, 1000);
  }
  setTimeout(removeAds);
})("Promoted");

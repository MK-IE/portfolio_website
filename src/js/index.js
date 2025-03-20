function animatedIcon() {
  const faviconAnimation = [
    "🖥️",
    "🏃",
    "🏋️"
  ];

  const titles = ["l......", "lo.....", "loa....", "load..."];

  if (!document.querySelector("head link[rel='icon']"))
    document.querySelector("head").innerHTML =
      document.querySelector("head").innerHTML +
      `<linkrel="icon"href=""/>`;

  document
    .querySelector("head link[rel='icon']")
    .setAttribute("href", `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${faviconAnimation[0]}</text></svg>`);
  let animCount = 0;
  function animFoo() {
    if (animCount >= faviconAnimation.length) {
      animCount = 0;
    }
    document
      .querySelector("head link[rel='icon']")
      .setAttribute(
        "href",
        `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${faviconAnimation[animCount]}</text></svg>`
      );
    animCount++;
  }

  setInterval(() => {
    animFoo();
  }, 2000);
}

animatedIcon();

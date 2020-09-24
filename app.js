document.getElementById("copyright")

  if (new Date().getFullYear() === 2020) {
    copyright.appendChild(document.createTextNode(' 2020'));
  } else {
    copyright.appendChild(document.createTextNode(' 2020 - ' + new Date().getFullYear()));
  };

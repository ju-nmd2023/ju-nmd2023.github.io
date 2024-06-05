window.addEventListener("load", () => {
  fetch("fop2024.csv")
    .then((response) => response.text())
    .then((data) => {
      const lines = String(data).split("\n");
      const container = document.getElementById("container");
      lines.shift();
      lines.forEach((element) => {
        let line = element.replace("\r", "");
        const result = line.split(";");
        if (result.length < 3) {
          return;
        }

        const a = document.createElement("a");
        const h4 = document.createElement("h4");
        const fileEnding = result[3] === "" ? "png" : result[3];
        h4.innerText = result[2];
        a.appendChild(h4);
        a.href = result[1];
        a.target = "_blank";
        a.classList.add("item");
        a.style.backgroundImage = `url(games/${result[0]}.${fileEnding})`;
        container.appendChild(a);
      });
    });
});

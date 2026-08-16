(() => {
    const birthdayElement = document.querySelector("#birthday[data-birthday]");
    const balloonLayer = document.querySelector("#birthday-balloons");

    if (!birthdayElement || !balloonLayer) return;

    const japanDateParts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tokyo",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(new Date()).map(({ type, value }) => [type, value]));
    const todayInJapan = `${japanDateParts.month}-${japanDateParts.day}`;

    if (todayInJapan !== birthdayElement.dataset.birthday) return;

    const colors = ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#36a2eb", "#9966ff"];
    const balloonCount = 24;

    for (let index = 0; index < balloonCount; index += 1) {
        const balloon = document.createElement("span");
        const balloonBody = document.createElement("span");
        const direction = index % 2 === 0 ? 1 : -1;
        const size = 42 + Math.random() * 34;

        balloon.className = "birthday-balloon";
        balloonBody.className = "birthday-balloon-body";
        balloonBody.style.setProperty("--balloon-color", colors[index % colors.length]);
        balloon.style.setProperty("--balloon-left", `${Math.random() * 94}%`);
        balloon.style.setProperty("--balloon-size", `${size}px`);
        balloon.style.setProperty("--balloon-delay", `${Math.random() * 4.5}s`);
        balloon.style.setProperty("--balloon-duration", `${6 + Math.random() * 3}s`);
        balloon.style.setProperty("--balloon-drift", `${direction * (20 + Math.random() * 70)}px`);
        balloon.style.setProperty("--balloon-drift-back", `${direction * (-10 - Math.random() * 35)}px`);
        balloon.appendChild(balloonBody);
        balloonLayer.appendChild(balloon);
    }

    window.setTimeout(() => balloonLayer.replaceChildren(), 14000);
})();


function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    let size = Math.random() * 10 + 5;
    let duration = Math.random() * 5 + 3;
    let position = Math.random() * window.innerWidth;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${position}px`;
    snowflake.style.animationDuration = `${duration}s`;

    setTimeout(() => {
      snowflake.remove();
    }, duration * 1000);
  }

  for (let i = 0; i < 100; i++) {
    createSnowflake();
  }
  setInterval(createSnowflake, 50);

import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgCreeper from "../../media/bricks-network.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgCreeper class={styles["hero-image"]} alt="Creeper Image" />
      <h1>
        Welcome to <span class="highlight">Minecraft</span>
        <br />
        Server <span class="highlight">Adventure</span>
      </h1>
      <p>Join our community and start building your world today!</p>
      <div class={styles["button-group"]}>
        <button
          onClick$={async () => {
            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["00ff00", "ffffff", "ff0000", "0000ff", "ffff00"],
              origin: {
                x: 0.5,
                y: 0.35,
              },
            };
 
            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);
          }}
        >
          Celebrate Your Build
        </button>
        <a
          href="https://minecraft.net/en-us/article/minecraft-servers"
          target="_blank"
          class="button button-dark"
        >
          Learn More
        </a>
      </div>
    </div>
  );
});

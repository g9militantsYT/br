import BricksNetwork from '~/media/bricks-network.png?jsx';
import { component$ } from "@builder.io/qwik";
import { HiHomeOutline, HiMapOutline } from "@qwikest/icons/heroicons";
import { LuVote } from "@qwikest/icons/lucide";
import headerstyles from "./header.module.css";

export default component$(() => {
  return (
    <header class={headerstyles.header}>
      <div class={[headerstyles.wrapper].join(" ")}>
        <div class={headerstyles.logo}>
            <BricksNetwork alt="BricksNetwork Icon"/>
        </div>
        <nav>
          <li>
            <a href="/" rel="noopener noreferrer">
              Home
              <HiHomeOutline />
            </a>
          </li>
          <li>
            <a href="/vote" rel="noopener noreferrer">
              Vote
              <LuVote />
            </a>
          </li>
          <li>
            <a href="https://map.bricks-network.xyz" target="_blank" rel="noopener noreferrer">
              Map
              <HiMapOutline />
            </a>
          </li>
        </nav>
      </div>
    </header>
  );
});
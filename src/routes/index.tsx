import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/hero/hero";
import Starter from "../components/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Bricks Network",
  meta: [
    {
      name: "description",
      content: "Welcome to the official website of Bricks Network",
    },
  ],
};

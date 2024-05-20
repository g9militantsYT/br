import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <p>Voting links will be added to this page</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "",
  meta: [
    {
      name: "description",
      content: "Welcome to the official website of Bricks Network",
    },
  ],
};

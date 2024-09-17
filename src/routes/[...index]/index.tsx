// src/routes/[...index]/index.tsx

import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../../components/builder-registry";

// Define Builder's public API key and content model.
export const BUILDER_PUBLIC_API_KEY = process.env.PUBLIC_BUILDER_API_KEY ?? "";

// Define a route loader function that loads
// content from Builder based on the URL.
export const useBuilderContent = routeLoader$(async ({ url }) => {
  // Fetch content for the specified model using the API key.
  const builderContent = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_PUBLIC_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  // Return the fetched content.
  return builderContent;
});

// Define a component that renders Builder content
// using Qwik's Content component.
export default component$(() => {
  // Call the useBuilderContent function to get the content.
  const content = useBuilderContent();
  // Specify the content model, pass the fetched content,
  // and provide the Public API Key
  return (
    <>
      <Content
        model="page"
        content={content.value}
        apiKey={BUILDER_PUBLIC_API_KEY}
        customComponents={CUSTOM_COMPONENTS}
      />
    </>
  );
});

import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { Label } from "@qwik-ui/headless";
import { LibLabel } from "my-qwik-library-name";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Label,
    name: "Qwik UI Label",
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Label",
          options: { text: "Label Text" },
        },
      },
    ],
  },
  {
    component: LibLabel,
    name: "New Qwik Library Label",
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Label",
          options: { text: "Label Text" },
        },
      },
    ],
  },
];

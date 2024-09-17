# Problem:

The editor does not update when directly consuming from the Qwik UI headless library into the Builder component registry. (potentially any Qwik library)

## Reproduction Steps:

1. Create a new page model for any route in the Builder dashboard

2. Drag and drop the custom Label component into the editor, drag any sort of builder component and watch the text update.

3. Refresh the Builder dashboard

4. Try dragging and adding more text

If you've successfully reproduced the issue, then it should not visually update when more text is added to the page.

Our custom component code from Qwik UI:
https://github.com/qwikifiers/qwik-ui/blob/main/packages/kit-headless/src/components/label/label.tsx

# Problem:

When running preview on the latest SDK version, we run into an issue where the Qwik manifest is not able to find the proper function in the graph during build.

## Reproduction Steps:

1. Make sure `@builder.io/sdk-qwik` is on the latest version.

2. Run npm run preview

3. You should see a Qwik Error code 31, where the symbol is undefined in the manifest when it tries to be serialized.

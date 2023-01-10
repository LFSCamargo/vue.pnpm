/// <reference types="vite-svg-loader" />
/// <reference types="vite-plugin-pages/client" />

declare module "*.svg" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import {
  BookmarkSquareIcon,
  EllipsisHorizontalIcon,
  HomeIcon,
} from "@heroicons/vue/24/outline";
import { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue";

type Item = {
  name: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, Record<string, never>>;
  path?: string;
  url?: string;
  description: string;
  comingSoon?: boolean;
};

type Routes = {
  title: string;
  path?: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, Record<string, never>>;
  menuOptions: {
    footer: never[];
    items: Item[];
  };
};

export const navbarRoutes = [
  {
    title: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    title: "More",
    icon: EllipsisHorizontalIcon,
    menuOptions: {
      items: [
        {
          name: "Star on Github",
          description: "See the source Code and use it on your page",
          url: "http://github.com/LFSCamargo/vue.pnpm",
          icon: BookmarkSquareIcon,
        },
      ] as Item[],
    },
  },
] as Routes[];

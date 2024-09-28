import React, { useEffect, useState } from "react";

import { FloatingDock } from "./studio_component/Studio_dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";

const Studio_banner = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },

    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <Image src="https://assets.aceternity.com/logo-dark.png" width={20} height={20} alt="Aceternity Logo" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ];
  return (
    <div className="max-w-screen-2xl w-screen overflow-hidden">
      <div data-aos="fade-left" data-aos-duration="800" className="bg-[url(/studio/IMG_5547-2.jpg)] bg-cover h-screen bg-no-repeat w-screen flex flex-col items-center justify-center">
        <div data-aos="zoom-in" data-aos-duration="1000" className="bg-clip-text text-8xl sm:p-10 font-extrabold text-blue-600 cursor-pointer">
          <span> STUDIO</span>
        </div>
        <div className="flex items-center justify-center h-[35rem] w-full">
          <FloatingDock
            // only for demo, remove for production
            mobileClassName="translate-y-20"
            items={links}
          />
        </div>
      </div>
    </div>
  );
};

export default Studio_banner;

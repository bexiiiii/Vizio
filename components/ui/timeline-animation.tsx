"use client";

import type { Ref } from "react";
import {
  ElementType,
  ReactNode,
  RefObject,
  useMemo,
  useRef,
} from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineContentProps = React.HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  animationNum?: number;
  timelineRef?: RefObject<Element | null>;
  customVariants?: Variants;
  children: ReactNode;
};

export function TimelineContent({
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...rest
}: TimelineContentProps) {
  const localRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(localRef, {
    once: true,
    margin: "-10% 0px",
    root: timelineRef,
  });

  const variants = useMemo<Variants>(() => {
    if (customVariants) {
      return customVariants;
    }

    return {
      hidden: { opacity: 0, y: 24 },
      visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: typeof index === "number" ? index * 0.1 : 0,
          duration: 0.4,
          ease: "easeOut",
        },
      }),
    } satisfies Variants;
  }, [customVariants]);

  const MotionComponent = useMemo(() => motion(Component as ElementType), [Component]);

  return (
    <MotionComponent
      ref={localRef as unknown as Ref<HTMLElement>}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { MoveDirection } from "@tsparticles/engine";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  description: string;
  price: number;
  yearlyPrice: number;
  buttonText: string;
  buttonVariant: "outline" | "default";
  popular?: boolean;
  includes: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline",
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default",
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline",
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
];

type PricingSwitchProps = {
  onSwitch: (value: string) => void;
};

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full border border-gray-700 bg-neutral-900 p-1">
        <Link href="/checkout">
          <button
            type="button"
            onClick={() => handleSwitch("0")}
            className={cn(
              "relative z-10 h-10 w-fit rounded-full px-3 py-1 font-medium transition-colors sm:px-6 sm:py-2",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute left-0 top-0 h-10 w-full rounded-full border-4 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600 shadow-sm shadow-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>
        </Link>

        <Link href="/checkout">
          <button
            type="button"
            onClick={() => handleSwitch("1")}
            className={cn(
              "relative z-10 h-10 w-fit flex-shrink-0 rounded-full px-3 py-1 font-medium transition-colors sm:px-6 sm:py-2",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute left-0 top-0 h-10 w-full rounded-full border-4 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600 shadow-sm shadow-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants: Variants = {
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: index * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value, 10) === 1);

  return (
    <div
      className="relative mx-auto min-h-screen overflow-x-hidden bg-black"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 z-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute inset-0" style={{
          backgroundImage:
            "linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)",
          backgroundSize: "70px 80px",
        }} />
        <SparklesComp
          density={1800}
          direction={MoveDirection.bottom}
          speed={1}
          color="var(--sparkles-color)"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] z-0 flex h-[113.625vh] w-full flex-none flex-col flex-nowrap content-start items-start justify-start gap-2.5 overflow-hidden p-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          />
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          />
        </div>
      </TimelineContent>

      <article className="relative z-50 mx-auto mb-6 max-w-3xl space-y-2 pt-32 text-center">
        <h2 className="text-4xl font-medium text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Plans that works best for your
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          Trusted by millions, We help teams all around the world, Explore which
          option is right for you.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute left-[10%] top-0 z-0 h-full w-[80%]"
        style={{
          backgroundImage: "radial-gradient(circle at center, #206ce8 0%, transparent 70%)",
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="mx-auto grid max-w-5xl gap-4 py-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative z-10 border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white",
                plan.popular &&
                  "z-20 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#0900ff]",
              )}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="mb-2 text-3xl">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="ml-1 text-gray-300">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  type="button"
                  className={cn(
                    "mb-6 w-full rounded-xl p-4 text-xl",
                    plan.popular
                      ? "border border-blue-500 bg-gradient-to-t from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-800"
                      : plan.buttonVariant === "outline"
                        ? "border border-neutral-800 bg-gradient-to-t from-neutral-950 to-neutral-600 text-white shadow-lg shadow-neutral-900"
                        : "bg-white text-neutral-900",
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 border-t border-neutral-700 pt-4">
                  <h4 className="mb-3 text-base font-medium">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="grid h-2.5 w-2.5 place-content-center rounded-full bg-neutral-500" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}

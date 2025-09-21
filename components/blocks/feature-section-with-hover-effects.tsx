import { cn } from "@/lib/utils";
import {
  IconClock,
  IconMovie,
  IconCurrencyDollar,
  IconCash,
  IconBrain,
  IconHeadset,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Экономия времени",
      description:
        "Изменение контента в несколько кликов, удаленно, без использования флешки.",
      icon: <IconClock className="w-6 h-6" />, // ⏰ время
    },
    {
      title: "Интересный контент",
      description:
        "Создание увлекательного контента, который привлекает внимание.",
      icon: <IconMovie className="w-6 h-6" />, // 🎬 контент / видео
    },
    {
      title: "Увеличение прибыли",
      description:
        "Делайте спецпредложения, тестируйте разные дизайны, продвигайте новые позиции.",
      icon: <IconCurrencyDollar className="w-6 h-6" />, // 💰 прибыль
    },
    {
      title: "Дополнительный заработок",
      description: "Зарабатывайте, интегрируя объявления на экраны.",
      icon: <IconCash className="w-6 h-6" />, // 💵 доход
    },
    {
      title: "AI показ контента",
      description:
        "AI подбирает наиболее релевантный контент в зависимости от трафика и погоды.",
      icon: <IconBrain className="w-6 h-6" />, // 🧠 искусственный интеллект
    },
    {
      title: "24/7 Поддержка",
      description:
        "Мы всегда доступны. По крайней мере, наши AI-агенты доступны ",
      icon: <IconHeadset className="w-6 h-6" />, // 🎧 поддержка
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature border-neutral-200 dark:border-neutral-800",
        (index % 3 === 0) && "lg:border-l", // первая в ряду
        index < 3 && "lg:border-b", // первые 3 сверху
        "lg:border-r"
      )}
    >
      {/* hover фон */}
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none",
          index < 3
            ? "bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
            : "bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
        )}
      />

      {/* иконка */}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      {/* заголовок */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* описание */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

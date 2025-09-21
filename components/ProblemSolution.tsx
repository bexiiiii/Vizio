import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import {
  AlertTriangle,
  Clock,
  Video,
  DollarSign,
} from "lucide-react";

const itemsSample: BentoItem[] = [
  {
    title: "Загрузка контента на флешки",
    description: "Приходится вручную носить флешки в рестораны и точки продаж, чтобы обновлять контент.",
    icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    status: "Проблема",
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Потеря времени",
    description: "Запуск акций и обновлений на экранах занимает слишком много времени.",
    icon: <Clock className="w-5 h-5 text-orange-500" />,
    status: "Проблема",
  },
  {
    title: "Нехватка контента",
    description: "Не всегда понятно, что показывать на экранах — в итоге они простаивают.",
    icon: <Video className="w-5 h-5 text-purple-500" />,
    status: "Проблема",
    colSpan: 2,
  },
  {
    title: "Потеря прибыли",
    description: "Мониторы используются неэффективно, и компания упускает доход.",
    icon: <DollarSign className="w-5 h-5 text-blue-500" />,
    status: "Проблема",
  },
];

function ProblemSolution() {
  return <BentoGrid items={itemsSample} />;
}

export { ProblemSolution };

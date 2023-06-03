import icon_1 from "../../img/rate_icon_1.svg";
import icon_2 from "../../img/rate_icon_2.svg";
import icon_3 from "../../img/rate_icon_3.svg";

export const rateList = [
  {
    id: 1,
    name: "Beginner",
    label: "Для небольших исследований",
    price: "799",
    oldPrice: "1 200",
    installmentPlan: "150",
    icon: icon_1,
    includeServices: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7",
    ],
    colors: ["#FFB64F", "#000000"],
  },
  {
    id: 2,
    name: "Pro",
    label: "Для HR и фрилансеров",
    price: "1 299",
    oldPrice: "2 600",
    installmentPlan: "279",
    icon: icon_2,
    includeServices: [
      "Все пункты тарифа Beginner",
      "Экспорт истрий",
      "Рекомендации по приоритетам",
    ],
    colors: ["#7CE3E1", "#000000"],
  },
  {
    id: 3,
    name: "Business",
    label: "Для корпоративных клиентов",
    price: "2 379",
    oldPrice: "3 700",
    icon: icon_3,
    includeServices: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка",
    ],
    colors: ["#000000", "#FFFFFF"],
  }
];
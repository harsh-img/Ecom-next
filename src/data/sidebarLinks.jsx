import { Home, ShoppingBag, BarChart2, Truck, BookOpen } from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/admin/dashboard",
    badge: 5,
    children: [
      {
        title: "eCommerce",
        icon: ShoppingBag,
        path: "/admin/dashboard/ecommerce",
      },
      {
        title: "CRM",
        icon: BarChart2,
        path: "/admin/dashboard/crm",
      },
      {
        title: "Analytics",
        icon: BarChart2,
        path: "/admin/dashboard/analytics",
      },
      {
        title: "Logistics",
        icon: Truck,
        path: "/admin/dashboard/logistics",
      },
      {
        title: "Academy",
        icon: BookOpen,
        path: "/admin/dashboard/academy",
      },
    ],
  },
];

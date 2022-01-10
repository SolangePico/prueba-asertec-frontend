export interface MenuTabs {label: string, value: string, path: string, active: boolean, icon: string}
export const menuTabs: MenuTabs[] = [
  {
    label: "Salud",
    value: "health",
    path: "health",
    active: true,
    icon: "vaccines"
  },
  {
    label: "Vida",
    value: "life",
    path: "life",
    active: true,
    icon: "monitor_heart"
  },
  {
    label: "Autos",
    value: "cars",
    path: "cars",
    active: true,
    icon: "drive_eta"
  },
  {
    label: "Pymes",
    value: "pymes",
    path: "pymes",
    active: false,
    icon: "store_mall_directory"
  },
  {
    label: "Viajes",
    value: "travel",
    path: "travel",
    active: false,
    icon: "flight_takeoff"
  },
  {
    label: "Dental",
    value: "dental",
    path: "dental",
    active: false,
    icon: "health_and_safety"
  },
]

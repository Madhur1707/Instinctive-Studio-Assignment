import { Button } from "@/components/ui/button";
import {
  Book,
  LayoutDashboard,
  LucideMessageCircleQuestion,
  NotebookTabs,
  PieChart,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 h-full shadow-md">
      <div className="p-3">
        <div className="mb-8 ml-3">
          <img src="/Vector.png" alt="Quyl" />
        </div>

        <div className="space-y-4  text-gray-800">
          <Button variant="ghost" className="w-full justify-start text-base">
            <LayoutDashboard /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base">
            <NotebookTabs /> Students
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base">
            <Book /> Chapter
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base">
            <LucideMessageCircleQuestion /> Help
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base">
            <PieChart /> Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start text-base">
            <Settings /> Settings
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

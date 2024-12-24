import { Button } from "./ui/button";
import {
  BellDot,
  LayoutDashboard,
  MessageSquareMore,
  SearchIcon,
  ShieldQuestion,
  SlidersHorizontal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-full">
      <Button variant="ghost" className="lg:hidden p-2" onClick={toggleSidebar}>
        <LayoutDashboard />
      </Button>

      {/* Search Bar */}
      <div className="relative w-96 md:w-1/2 lg:w-1/2 bg-gray-50">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <SearchIcon size={18} />
        </span>
        <Input placeholder="Search your course" className="pl-10" />
      </div>

      {/* Right Section */}
      <div className=" items-center gap-4 hidden sm:flex">
        <Button variant="ghost" className="p-2">
          <ShieldQuestion />
        </Button>
        <Button variant="ghost" className="p-2">
          <MessageSquareMore />
        </Button>
        <Button variant="ghost" className="p-2">
          <SlidersHorizontal />
        </Button>
        <Button variant="ghost">
          <BellDot className="w-8 h-8" />
        </Button>
      </div>

      <div className="flex items-center gap-2 sm:ml-4">
        <Avatar className="sm:ml-4">
          <AvatarImage src="/avatar.jpg" alt="User Avatar" />
          <AvatarFallback className="bg-blue-600 text-white">A</AvatarFallback>
        </Avatar>
        <span className="font-medium text-gray-700 hidden sm:flex">
          Adeline H. Dancy
        </span>
      </div>
    </header>
  );
};

export default Header;

import {
  BellDot,
  MessageSquareMore,
  SearchIcon,
  ShieldQuestion,
  SlidersHorizontal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-full">
      {/* Search Bar */}
      <div className="relative w-96 md:w-1/2 lg:w-1/2 bg-gray-50">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <SearchIcon size={18} />
        </span>
        <Input placeholder="Search your course" className="pl-10" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="User Avatar" />
            <AvatarFallback className="bg-blue-600 text-white">A</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-700">Adeline H. Dancy</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

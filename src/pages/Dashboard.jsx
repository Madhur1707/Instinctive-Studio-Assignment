import { useState } from "react";
import AddStudentModal from "@/components/AddStudentModal";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudentTable from "@/components/StudentTable";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar visibility

  return (
    <div className="flex h-screen overflow-hidden flex-col lg:flex-row">
      {/* Pass the sidebar state to Sidebar component */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} /> {/* Add toggle function to Header */}
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <AddStudentModal />
          </div>
        </div>

        <div className="flex-1 p-4 ml-4 rounded-md bg-gray-50 overflow-y-auto">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

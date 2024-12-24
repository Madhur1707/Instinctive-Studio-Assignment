import AddStudentModal from "@/components/AddStudentModal";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import StudentTable from "@/components/StudentTable";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <AddStudentModal />
          </div>
        </div>

        <div className="flex-1 p-4  ml-4 rounded-md bg-gray-50 overflow-y-auto">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

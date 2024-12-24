import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudentTable from "@/components/StudentTable";
import AddStudentModal from "@/components/AddStudentModal";

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

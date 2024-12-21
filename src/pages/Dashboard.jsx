import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StudentTable from "@/components/StudentTable";
import AddStudentModal from "@/components/AddStudentModal";

const Dashboard = ({ students }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <AddStudentModal />
          </div>
        </div>

        <div className="flex-1 p-4">
          <StudentTable students={students} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

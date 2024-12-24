import React, { useEffect, useState } from "react";
import { Edit, Trash, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import supabase from "@/lib/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { setStudents, deleteStudent } from "@/redux/studentsSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import EditStudentModal from "./EditStudentModal";

const StudentTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const loading = useSelector((state) => state.students.loading);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch students from Supabase and update Redux store
  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase.from("Student").select("*");

      if (error) {
        console.error("Error fetching students:", error);
        return;
      }

      const structuredData = data.map((student) => ({
        ...student,
        courses: student.courses.split(", "),
        dateJoined: formatDate(student.dateJoined),
        lastLogin: formatDateTime(student.lastLogin),
        status: student.status ? "Active" : "Inactive",
      }));

      dispatch(setStudents(structuredData));
    } catch (err) {
      console.error("Unexpected error fetching students:", err);
    }
  };

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, [dispatch]);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formatted = new Intl.DateTimeFormat("en-IN", options)
      .format(new Date(date))
      .replace(",", "");
    const [month, day, year] = formatted.split(" ");
    return `${day} ${month} ${year}`;
  };

  const formatDateTime = (date) => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formatted = new Intl.DateTimeFormat("en-IN", options)
      .format(new Date(date))
      .replace(",", "");
    const [month, day, year, time] = formatted.split(" ");
    return `${day} ${month} ${year} ${time.toUpperCase()}`;
  };

  // Delete student and update Redux store
  const handleDelete = async (id) => {
    const { error } = await supabase.from("Student").delete().match({ id });

    if (error) {
      console.error("Error deleting student:", error);
    } else {
      dispatch(deleteStudent(id));
      alert("Student deleted successfully!");
    }
  };

  if (loading) {
    return <p>Loading students...</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-black">Student Name</TableHead>
          <TableHead className="text-black">Cohort</TableHead>
          <TableHead className="text-black">Courses</TableHead>
          <TableHead className="text-black">Date Joined</TableHead>
          <TableHead className="text-black">Last Login</TableHead>
          <TableHead className="text-black">Status</TableHead>
          <TableHead className="text-black">Update & Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.cohort}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2 items-center">
                {student.courses.map((course, index) => (
                  <span key={index} className="flex items-center gap-1">
                    <User2 className="w-4 h-4 text-gray-500" />
                    {course}
                    {index < student.courses.length - 1 && <span>,</span>}
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell>{student.dateJoined}</TableCell>
            <TableCell>{student.lastLogin}</TableCell>
            <TableCell>
              <div
                className={`w-4 h-4 rounded-full ${
                  student.status === "Active" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => setEditingStudent(student)}
                className="text-white mr-2"
              >
                <Edit className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleDelete(student.id)}
                variant="destructive"
              >
                <Trash className="w-5 h-5" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {editingStudent && (
        <EditStudentModal
          student={editingStudent}
          isOpen={!!editingStudent}
          onClose={() => setEditingStudent(null)}
          onStudentUpdated={fetchStudents}
        />
      )}
    </Table>
  );
};

export default StudentTable;

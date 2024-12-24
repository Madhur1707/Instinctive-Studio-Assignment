import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import supabase from "@/lib/supabaseClient";

const EditStudentModal = ({ student, onClose, onStudentUpdated, isOpen }) => {
  const [name, setName] = useState(student?.name || "");
  const [cohort, setCohort] = useState(student?.cohort || "");
  const [courses, setCourses] = useState(student?.courses.join(", ") || "");

  const handleUpdate = async () => {
    const coursesArray = courses.split(",").map((course) => course.trim());

    const { error } = await supabase
      .from("Student")
      .update({
        name,
        cohort,
        courses: coursesArray.join(", "),
      })
      .eq("id", student.id);

    if (error) {
      console.error("Error updating student:", error);
    } else {
      onStudentUpdated();
      alert("Student updated successfully!");
      onClose();
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Student</DrawerTitle>
        </DrawerHeader>

        <form className="flex flex-col gap-4 p-4 pb-0">
          <Input
            type="text"
            name="name"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            name="cohort"
            placeholder="Cohort"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
            required
          />
          <Input
            type="text"
            name="courses"
            placeholder="Courses (comma-separated)"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            required
          />

          <Button type="button" onClick={handleUpdate} className="w-full">
            Update Student
          </Button>
        </form>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EditStudentModal;

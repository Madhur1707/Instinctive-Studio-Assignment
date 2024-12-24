import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import { Input } from "./ui/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import supabase from "@/lib/supabaseClient";
import { addStudent } from "@/redux/studentsSlice";

const AddStudentModal = () => {
  const [name, setName] = useState("");
  const [cohort, setCohort] = useState("");
  const [courses, setCourses] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const coursesArray = courses.split(",");

    const { error } = await supabase.from("Student").insert([
      {
        name,
        cohort,
        courses: coursesArray.join(", "),
        status: true,
      },
    ]);

    if (error) {
      console.error("Error adding student:", error);
    } else {
      dispatch(addStudent({ name, cohort, courses: coursesArray }));
      alert("Student added successfully!");
    }
  };

  return (
    <div className="flex justify-between items-center space-x-4 space-y-3 w-full">
      <div className="flex space-x-4">
        <div className="flex items-center bg-gray-50 shadow-sm ml-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="AY 2024-25" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center bg-gray-50 shadow-sm">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="CBSE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Drawer>
        <DrawerTrigger>
          <Button
            type="button"
            className="bg-gray-50 text-black hover:text-white"
          >
            Add Student
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="font-bold text-2xl">
              Add a New Student
            </DrawerTitle>
          </DrawerHeader>

          <form className="flex flex-col gap-4 p-4 pb-0">
            <div className="flex gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1"
              />
              <Input
                type="text"
                name="cohort"
                placeholder="Cohort"
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}
                required
                className="flex-1"
              />
            </div>

            <Input
              type="text"
              name="courses"
              placeholder="Courses (comma-separated)"
              value={courses}
              onChange={(e) => setCourses(e.target.value)}
              required
              className="w-full"
            />

            <Button
              type="button"
              onClick={handleSubmit}
              variant="default"
              className="w-full"
            >
              Add Student
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
    </div>
  );
};

export default AddStudentModal;

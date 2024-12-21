import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const AddStudentModal = () => {
    return (
        <div className="flex justify-between items-center space-x-4 space-y-3 w-full">
            <div className="flex space-x-4">
                <div className="flex items-center bg-gray-50 shadow-sm ml-2">
                    <Select id="cohort-year">
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
                    <Select id="cbse">
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

            <div>
                <Button type="submit">Add Student</Button>
            </div>
        </div>
    );
};

export default AddStudentModal;

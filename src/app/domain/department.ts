import { Instructor } from "./instructor";

export class Department {

    constructor(
        public DepartmentID:number,
        public Name:string,
        public Budget:number,
        public StartDate:Date,
        public InstructorID:number,
        public Instructor:Instructor
    ){}
}

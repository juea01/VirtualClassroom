import { Teacher } from "./teacher.model";
import { TimeTable } from "./timeTable.model";
export class ClassRoom {
  constructor(public timeTable: TimeTable, public _id?: string, public subject?: string,  public category?: string, public description?: string, public maxNumberStudents?: number, public minNumbersStudents?: number,
    public teacher?: Teacher){}
}

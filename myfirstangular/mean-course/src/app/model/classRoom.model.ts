import { TimeTable } from "./timeTable.model";
export class ClassRoom {
  constructor(public timeTable: TimeTable, public id?: number, public subject?: string,  public category?: string, public description?: string, public maxNumberStudents?: number, public minNumbersStudents?: number,
    public teacher?: string,){}
}

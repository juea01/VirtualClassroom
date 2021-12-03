import { NgModule } from "@angular/core";
import { StudentRepository} from "./student.repository";
import { TeacherRepository } from "./teacher.repository";
import { ClassRoomRepository } from "./classRoom.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { HelperService } from "./helper.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [StudentRepository,{provide: StaticDataSource, useClass: RestDataSource}, RestDataSource, TeacherRepository, ClassRoomRepository, AuthService, HelperService ]
})
export class ModelModule {}

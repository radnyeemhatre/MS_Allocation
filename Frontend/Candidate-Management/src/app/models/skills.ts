export class skill{
public skill_id:number;
public skillname:string;
public createdBy:String;
public createdOn:Date;

constructor(id,skill,createdOn,createdBy)
{
    this.skill_id=id,
    this.skillname=skill,
    this.createdOn=createdOn,
    this.createdBy=createdBy,

}
}
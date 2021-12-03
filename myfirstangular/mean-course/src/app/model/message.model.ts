export class Message {
  constructor(public id?: number, public messagerName?: string, public message?: string, public handsUp?: boolean, public hasMessage?:boolean){}

  // constructor(jsonStr: string){
  //   let jsonObj: any = JSON.parse(jsonStr);
  //   for (let prop in jsonObj) {
  //     console.log("prop"+jsonObj[prop]);
  //     this[prop] = jsonObj[prop];
  //   }
  // }
}

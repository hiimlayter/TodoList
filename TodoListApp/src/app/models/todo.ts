export class Todo{
    Title: string;
    Description: string;
    IsDone: boolean;
    Date: Date;
    constructor(title: string, description: string, date: Date, isDone: boolean = true){
      this.Title = title;
      this.Description = description;
      this.IsDone = isDone;
      this.Date = date;
    }
  }
  
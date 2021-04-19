import { Component, VERSION, ViewChild } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  file = "empty";
  @ViewChild('deleteRecord') private deleteRecord: SwalComponent;

  public deleteFile(file: any): void {}
}

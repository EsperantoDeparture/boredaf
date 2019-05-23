import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ToolbarItemComponent } from "./components/toolbar-item/toolbar-item.component";

@NgModule({
  declarations: [ToolbarComponent, ToolbarItemComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent, ToolbarItemComponent]
})
export class ToolbarModule {}

import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'Tabs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    // If no tab is active, activate the first tab
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // Deactivate all tabs
    this.tabs.toArray().forEach(t => t.active = false);
    // Activate the selected tab
    tab.active = true;
  }
}

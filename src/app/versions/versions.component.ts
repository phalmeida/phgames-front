import { Component, OnInit } from '@angular/core';
import {Version} from "./shared/version";
import {VersionsService} from "./versions.service";

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  public versions: Version[] = [];

  constructor(private versionsService: VersionsService) { }

  ngOnInit() {

    this.versionsService.getVersions().subscribe(
        data => this.versions = data
    );

  }

}

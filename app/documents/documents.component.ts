import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "DocumentDashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfasfaf",
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Second Doc",
      description: "asdfasfaf",
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Third Doc",
      description: "asdfasfaf",
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  profileForm: FormGroup;
  error: string;

  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      title: [''],
      profile: ['']
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.profileForm.get('title').value);
    formData.append('profile', this.profileForm.get('profile').value);
    formData.append('userid','eyJpdiI6IlwvY0ZERGFzTGVMMTRXYmh3NzhTMUxnPT0iLCJ2YWx1ZSI6IlwvWnhSbkNWcGR4UHdEd1wvVlJyVE5hQT09IiwibWFjIjoiNDA5M2Q1ZDVkOThlN2FhMDA2ODQ5ZmYwMDY1NzIzZmEzMjgzZWZjYmJiOTM4ZjJlNjAzMDBlYzE5ZTY4MTUzOCJ9');
    formData.append('title', 'testing');
    formData.append('category', '1');
    formData.append('description', 'heloo image');

    this.fileUploadService.upload(formData).subscribe(
      res => this.fileUpload = res,
      err => this.error = err
    );
  }

}
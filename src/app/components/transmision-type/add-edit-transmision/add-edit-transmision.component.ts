import { TransmisiontypeService } from './../../../core/service/transmisiontype.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'src/app/core/service/toastr.service';

@Component({
  selector: 'app-add-edit-transmision',
  templateUrl: './add-edit-transmision.component.html',
  styleUrls: ['./add-edit-transmision.component.css'],
})
export class AddEditTransmisionComponent implements OnInit {
  transmisionForm: FormGroup;
  id: string;
  isAddModal: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private transmisionService: TransmisiontypeService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddModal = !this.id;
    this.transmisionForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle('Add');
  }
  get name(): FormControl {
    return this.transmisionForm.get('name') as FormControl;
  }

  save() {
    if (this.isAddModal) {
      this.createTransmision();
    } else {
      this.updateTransmision();
    }
  }
  createTransmision() {
    this.transmisionService.create(this.transmisionForm.value).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Transmision add ');
        this.router.navigate(['/transmision'], { relativeTo: this.route });
      },
      (error) => {
       // this.toastr.error('Please try agains later');
      }
    );
  }
  updateTransmision() {
    this.transmisionService
      .update(this.id, this.transmisionForm.value)
      .subscribe((data) => {
        this.toastr.success('Edit succefull');
        this.router.navigate(['/transmision'], { relativeTo: this.route });
      }),
      (error) => {
        this.toastr.error('Please try agains later');
      };
  }
}

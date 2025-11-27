import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drink } from '../../interfaces/Drink';
import { DrinksService } from '../../services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css',
})
export class DrinksComponent {
  form!: FormGroup;
  drinks: Drink[] = [];
  editMode: boolean = false;
  selectedId: string | null = null;

  constructor(private fb: FormBuilder, private service: DrinksService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      preco: [0, Validators.required],
      descricao: ['', Validators.required],
    });

    this.load();
  }

  load() {
    this.service.getAll().subscribe((data) => {
      this.drinks = data;
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const model: Drink = this.form.value;

    if (this.editMode && this.selectedId) {
      this.service.update(this.selectedId, model).subscribe(() => {
        this.resetForm();
        this.load();
      });
      return;
    }

    this.service.create(model).subscribe(() => {
      this.resetForm();
      this.load();
    });
  }

  edit(item: Drink) {
    this.editMode = true;
    this.selectedId = item._id!;

    this.form.patchValue({
      nome: item.nome,
      preco: item.preco,
      descricao: item.descricao,
    });
  }

  delete(id: string) {
    this.service.delete(id).subscribe(() => {
      this.load();
    });
  }

  resetForm() {
    this.editMode = false;
    this.selectedId = null;

    this.form.reset({
      nome: '',
      preco: 0,
      descricao: '',
    });
  }
}

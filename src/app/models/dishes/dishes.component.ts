import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dishe } from '../../interfaces/Dishe';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css'
})
export class DishesComponent implements OnInit {

  form!: FormGroup;
  dishes: Dishe[] = [];
  editMode = false;
  selectedId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private dishesService: DishesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      preco: ['', [Validators.required]],
      descricao: ['']
    });

    this.loadDishes();
  }

  loadDishes() {
    this.dishesService.getAll().subscribe(data => {
      this.dishes = data;
    });
  }

  save() {
    if (this.form.invalid) return;

    const dishe: Dishe = this.form.value;

    if (this.editMode && this.selectedId) {
      this.dishesService.update(this.selectedId, dishe).subscribe(() => {
        this.resetForm();
        this.loadDishes();
      });
    } else {
      this.dishesService.create(dishe).subscribe(() => {
        this.resetForm();
        this.loadDishes();
      });
    }
  }

  edit(item: Dishe) {
    this.editMode = true;
    this.selectedId = item._id!;
    this.form.patchValue(item);
  }

  delete(id: string) {
    if (confirm('Deseja remover este prato?')) {
      this.dishesService.delete(id).subscribe(() => {
        this.loadDishes();
      });
    }
  }

  resetForm() {
    this.editMode = false;
    this.selectedId = null;
    this.form.reset();
  }
}

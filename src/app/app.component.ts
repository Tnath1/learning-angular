import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = 'Arome';

  isAvailable: boolean = true;

  imgUrl =
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU';

  inputType = 'password';

  printData() {
    console.log('Hello');

    this.isAvailable = !this.isAvailable;
  }
}

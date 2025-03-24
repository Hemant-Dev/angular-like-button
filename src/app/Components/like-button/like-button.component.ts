import { booleanAttribute, Component, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.scss'
})
export class LikeButtonComponent {
  liked = input(false, { transform: booleanAttribute });
  _liked = linkedSignal(() => this.liked());

  likedChange = output<boolean>({ alias: 'likedchange' });

  toggleLike() {
    this._liked.update(value => !value);
    this.likedChange.emit(this._liked());
  }
}

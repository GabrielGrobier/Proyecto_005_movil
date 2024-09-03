import { Component, OnInit, ElementRef,ViewChildren  } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.page.html',
  styleUrls: ['./animaciones.page.scss'],
})
export class AnimacionesPage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  private animation! : Animation;

  constructor( private animacionCtrl : AnimationController) { }
  ngAfterViewInit(){
    const cardA = this.animacionCtrl
    .create()
    .addElement(this.cardElements.get(0)!.nativeElement)

    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(0) ' },
    ]);

    this.animation = this.animacionCtrl
    .create()
    .duration(2000)
    .iterations(Infinity)
    .addAnimation([cardA])

    this.animation.play()

  }


  ngOnInit() {
  }

}

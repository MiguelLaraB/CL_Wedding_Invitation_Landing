import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {
  options: AnimationOptions = {
    path: '/assets/animations/Wind.json',
    autoplay: true,
    loop: true
  };

  showLetter = false;
  isPlaying = false;

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {

    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.25;

    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      // Intentamos reproducir automáticamente al cargar la vista
      this.audioPlayer.nativeElement.play().then(() => {
        this.isPlaying = true;
      }).catch(e => {
        console.warn("Autoplay preventivo: el navegador bloqueó la música por falta de interacción", e);
        this.isPlaying = false;
      });
    }
  }

  toggleView() {
    this.showLetter = !this.showLetter;
  }

  toggleMusic() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      if (this.isPlaying) {
        this.audioPlayer.nativeElement.pause();
      } else {
        // Enforce user interaction by ensuring play comes from a click
        this.audioPlayer.nativeElement.play().catch(e => console.error("Audio play failed:", e));
      }
      this.isPlaying = !this.isPlaying;
    }
  }

}

import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit, OnInit {
  options: AnimationOptions = {
    path: '/assets/animations/Wind.json',
    autoplay: true,
    loop: true,
    rendererSettings: {
      progressiveLoad: true
    }
  };

  showLetter = false;
  isPlaying = false;
  showEnvelope = true;
  envelopeOpening = false;

  openEnvelope() {
    if (this.envelopeOpening) return;
    this.envelopeOpening = true;
    // Tras la animación de apertura, ocultamos el sobre y mostramos el contenido
    setTimeout(() => {
      this.showEnvelope = false;
    }, 1400);
  }

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  @ViewChild('lottieRef', { static: false }) lottieRef!: any;

  ngOnInit() {
    this.detectPerformance();
    this.isReady = false;
  }

  /*Ocultar elementos hasta que angular cargue todo, esto porque vi que cuando carga la página o se refresca
   se ve como carga todos los elementos en pantalla primero y luego las esconde
   */

  isReady = false;

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.isReady = true;
      }, 30);
    });
    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.25;
    //Si el dispositivo es lento apaga las aniamciones de Lottie
    if (this.isLowPerformance) {
      this.lottieRef?.animationItem?.stop();
    }

    // Los navegadores bloquean autoplay sin interacción previa del usuario.
    // Intentamos reproducir de inmediato; si falla, esperamos el primer click.
    audio.play().then(() => {
      this.isPlaying = true;
    }).catch(() => {
      const startOnInteraction = () => {
        audio.play().then(() => {
          this.isPlaying = true;
        }).catch(() => { });
        document.removeEventListener('click', startOnInteraction);
        document.removeEventListener('keydown', startOnInteraction);
      };
      document.addEventListener('click', startOnInteraction);
      document.addEventListener('keydown', startOnInteraction);
    });
  }

  toggleView() {
    this.showLetter = !this.showLetter;

    const anim: AnimationItem = this.lottieRef?.animationItem;

    if (anim) {
      if (this.showLetter) {
        anim.pause();
      } else {
        anim.play();
      }
    }
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


  // Esto es para detectar si el cliente tiene un dispositivo lento y activa modo de rendimiento:

  isLowPerformance = false;

  detectPerformance() {
    let lastTime = performance.now(); //para ver el tiempo inicial
    let frames = 0; //El contador de frames

    const checkFPS = (time: number) => {
      frames++; // Este cuenta los frames

      //Cada segundo se evaluan los fps
      if (time - lastTime >= 1000) {
        const fps = frames;

        console.log('FPS:', fps);

        //Si baja de 45fps se activa el modo rendimiento
        if (fps < 45) {
          this.isLowPerformance = true;
          console.log('Modo de rendimiento activado hell yeah');
        }

        frames = 0; //reinicia el contador
        lastTime = time; //reinicia tiempo
      }

      //Se sigue midiendo SÖLo cuando no está en modo rendimiento
      if (!this.isLowPerformance) {
        requestAnimationFrame(checkFPS);
      }
    };

    //Inicia monitoreo
    requestAnimationFrame(checkFPS);

    //Si el usuario quiere menos animaciones

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isLowPerformance = true;
    }
  }



}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { StoryComponent } from './components/story.component';
import { GalleryComponent } from './components/gallery.component';
import { VenueComponent } from './components/venue.component';
import { FooterComponent } from './components/footer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, StoryComponent, GalleryComponent, VenueComponent, FooterComponent],
  template: `
    <main class="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200">
      <app-hero />
      <app-story />
      <app-gallery />
      <app-venue />
      <app-footer />
    </main>
  `,
})
export class App {}

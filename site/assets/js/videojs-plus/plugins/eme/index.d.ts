import videojs from 'video.js';

declare module 'video.js' {
  export interface EmePlugin extends videojs.Plugin {}

  interface VideoJsPlayer {
    eme: () => EmePlugin;
  }
}

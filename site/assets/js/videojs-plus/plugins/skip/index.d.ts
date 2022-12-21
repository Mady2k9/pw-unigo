import videojs from 'video.js';

declare module 'video.js' {
  export interface SkipPlugin extends videojs.Plugin {}

  interface VideoJsPlayer {
    skip: () => SkipPlugin;
  }
}

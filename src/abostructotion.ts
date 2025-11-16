// interface MediaPlayer {
//   Play(): void;
//   Pause(): void;
//   Stop(): void;
// }

// class PlayMusic implements MediaPlayer {
//   Play(): void {
//     console.log("music play ");
//   }
//   Pause(): void {
//     console.log("music Pause");
//   }
//   Stop(): void {
//     console.log("Music Stop");
//   }
// }

// const musicPlayer = new PlayMusic();
// musicPlayer.Pause;
// console.log(musicPlayer);

abstract class MaxPlayer {
  abstract play(): void;
  abstract pause(params: string): void;
}

class PlayMusic extends MaxPlayer {
  play(): void {
    console.log("Music Playing......");
  }
  pause(params: string): void {
    console.log("Music Pause by click....");
  }
}

const music1 = new PlayMusic();
const music2 = new PlayMusic();
music1.play();
music1.pause("hasan");

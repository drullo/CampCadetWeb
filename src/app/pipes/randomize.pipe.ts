import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(array: string[]): string[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: any;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  private random<T>(arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
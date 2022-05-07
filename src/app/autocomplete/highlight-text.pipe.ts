import {
  Pipe,
  PipeTransform
} from '@angular/core'

@Pipe({
  name: 'highlightText',
})
export class HighlightTextPipe implements PipeTransform {

  transform(text: string, highlightedText: string) {
    return text.replace(new RegExp(`(${highlightedText})`, 'gi'), '<b>$1</b>')
  }
}

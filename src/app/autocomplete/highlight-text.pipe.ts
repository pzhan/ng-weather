import {
  Pipe,
  PipeTransform
} from '@angular/core'

@Pipe({
  name:  'highlightText',
  pure: true
})
export class HighlightTextPipe implements PipeTransform {

  transform(text: string, searchValue) {
    return text.replace(new RegExp(`(${searchValue})`, 'gi'), '<b>$1</b>')
  }
}

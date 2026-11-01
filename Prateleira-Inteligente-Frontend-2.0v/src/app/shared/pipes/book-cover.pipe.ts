import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bookCover' })
export class BookCoverPipe implements PipeTransform {
  transform(cover: string | null | undefined): string {
    if (!cover) {
      return 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
    }

    if (/^(https?:\/\/|data:image\/)/i.test(cover)) return cover;

    let mimeType = 'image/jpeg';
    if (cover.startsWith('iVBOR')) mimeType = 'image/png';
    else if (cover.startsWith('UklGR')) mimeType = 'image/webp';
    else if (cover.startsWith('R0lGOD')) mimeType = 'image/gif';

    return `data:${mimeType};base64,${cover}`;
  }
}

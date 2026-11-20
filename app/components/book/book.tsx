import Image from 'next/image';
import './styles.css'

export function Book({ cover, title }: { cover: string; title: string }) {
  return (
    <div className="book-items">
      <div className="main-book-wrap">
        <div className="book-cover">
          <div className="book-inside"></div>
          <div className="book-image">
            <Image
              src={cover}
              fill
              sizes="(min-width: 768px) 210px, (min-width: 500px) 45vw, 90vw"
              alt={`${title} book cover`}
            />
            <div className="effect"></div>
            <div className="light"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import './styles.css'

export function Book({ cover }: { cover: string }) {
  return (
    <div className="book-items">
      <div className="main-book-wrap">
        <div className="book-cover">
          <div className="book-inside"></div>
          <div className="book-image">
            <Image
              src={cover}
              width={576}
              height={459}
              alt="Designing Data-Intensive Applications book cover."
            />
            <div className="effect"></div>
            <div className="light"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

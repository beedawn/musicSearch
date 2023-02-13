import { render, screen} from '@testing-library/react';
import React from 'react';
import ResultLoader from '../views/components/ResultLoader';
import '@testing-library/jest-dom';

describe('Render musicData', () => {
  it('api text', () => {
    render(
      <ResultLoader
        handleData={[
          {
            album: {
              cover: 'pizza',
              cover_big: 'pizza',
              cover_small: 'pizza',
              cover_xl: 'pizza',
              id: 1,
              md5_image: 'pizza',
              title: 'pizza',
              tracklist: 'pizza',
              type: 'pizza',
            },
            artist: {
              id: 1,
              link: 'pizza',
              name: 'pizza',
              picture: 'pizza',
              picture_big: 'pizza',
              picture_medium: 'pizza',
              picture_small: 'pizza',
              picture_xl: 'pizza',
              tracklist: 'pizza',
              type: 'pizza',
            },
            duration: 1,
            explicit_content_cover: 1,
            explicit_content_lyrics: 1,
            explicit_lyrics: true,
            id: 1,
            link: 'pizza',
            md5_image: 'pizza',
            preview: 'pizza',
            rank: 1,
            title: 'pizza',
            title_short: 'pizza',
            title_version: 'pizza',
            type: 'pizza',
          },
        ]}
      />
    );

    const card = screen.getByAltText('Card cap');
    expect(card).toBeInTheDocument();
  });
});

describe('check no data',()=>{it('no data',()=>{render(<ResultLoader handleData={[]} submitPressed={true}/>);
const loading = screen.getByText("No results found, please try again.");
expect(loading).toBeInTheDocument();
})})

describe('check loading',()=>{it('loading',()=>{render(<ResultLoader handleData={undefined} submitPressed={false}/>);
const loading = screen.getByText("Loading...");
expect(loading).toBeInTheDocument();
})})

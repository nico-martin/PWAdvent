import React from 'react';
import { DayData } from '@app/types';

import './ContentCalendar.css';

import Prism from '@utils/prism';
import ContentAuthor from '@app/Content/ContentAuthor';
import { LazyImage } from '@theme';

const ContentCalendar = ({
  day,
  number,
  className = '',
}: {
  day: DayData;
  number: number;
  className?: string;
}) => {
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    Prism.highlightAll();
  }, [contentRef, day.content]);

  return (
    <div className={`content-calendar ${className}`}>
      <p className="content-calendar__date">
        <b>Day {number}:</b> {day.date.format('L')}
      </p>
      {day.excerpt && (
        <p className="content-calendar__excerpt">{day.excerpt}</p>
      )}
      {day.image && (
        <LazyImage image={day.image} className="content-calendar__image" />
      )}
      {day.author && (
        <ContentAuthor
          author={day.author}
          className="content-calendar__author"
        />
      )}
      <div
        ref={contentRef}
        className="content-calendar__content gutenberg-content"
        dangerouslySetInnerHTML={{
          __html: day.content,
        }}
      />
    </div>
  );
};

export default ContentCalendar;

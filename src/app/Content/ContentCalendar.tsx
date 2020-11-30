import React from 'react';
import { DayData } from '@app/types';

import './ContentCalendar.css';

import Prism from '@utils/prism';
import ContentAuthor from '@app/Content/ContentAuthor';
import { Button, LazyImage, Notification } from '@theme';
import dayjs from '@utils/dayjs';
import useWindowSize from '@app/hooks/useWindowSize';

const ContentCalendar = ({
  day,
  number,
  className = '',
  error = '',
}: {
  day: DayData;
  number: number;
  className?: string;
  error?: string;
}) => {
  const contentRef = React.useRef(null);
  const date = React.useMemo(() => dayjs(day.date), [day.date]);
  const { width } = useWindowSize();

  const originalSource = React.useMemo(
    () => (day.source ? new URL(day.source) : null),
    [day.source]
  );

  React.useEffect(() => {
    Prism.highlightAll();
  }, [contentRef, day.content]);

  if (error !== '') {
    return (
      <div className={`content-calendar ${className}`}>
        <p className="content-calendar__error">{error}</p>
      </div>
    );
  }

  return (
    <div className={`content-calendar ${className}`}>
      <p className="content-calendar__date">
        <b>Day {number}:</b> {date && date.format('L')}
      </p>
      {originalSource && (
        <Notification className="content-calendar__cannonical">
          This article was originally published on{' '}
          <a href={originalSource.href} target="_blank">
            {originalSource.host}
          </a>
        </Notification>
      )}
      {day.excerpt && (
        <p className="content-calendar__excerpt">{day.excerpt}</p>
      )}
      {day.image && (
        <LazyImage image={day.image} className="content-calendar__image" />
      )}
      {day.author && (
        <div className="content-calendar__meta">
          <ContentAuthor
            author={day.author}
            className="content-calendar__author"
            small={width <= 700}
          />
          {'share' in navigator ? (
            <Button
              className={`content-share ${className}`}
              onClick={() =>
                navigator.share({
                  url: window.location.href,
                  text: 'Have a look at the awesome article on PWAdvent.dev',
                  title: `${day.title} - PWAdvent`,
                })
              }
              layout="empty"
              round
              icon="mdi/share"
              iconRight
              size={width <= 700 ? 'small' : 'medium'}
            >
              Share
            </Button>
          ) : (
            <Button
              className={`content-share ${className}`}
              onClick={() =>
                console.log({
                  url: window.location.href,
                  text: 'Have a look at the awesome feature',
                  title: `${day.title} - PWAdvent`,
                })
              }
              layout="ghost"
              round
              icon="mdi/share"
              iconRight
              size={width <= 700 ? 'small' : 'medium'}
            >
              Share
            </Button>
          )}
        </div>
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

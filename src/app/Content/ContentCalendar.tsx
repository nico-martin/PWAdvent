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

  const content = React.useMemo(() => {
    const regex = /<code class="language-markup">((.|\n)*?)<\/code>/gm;
    let m;
    let c = day.content;

    while ((m = regex.exec(c)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      c = c.replace(m[1], m[1].replace(/</g, '&lt;'));
    }

    return c;
  }, [day.content]);

  React.useEffect(() => {
    Prism.highlightAll();
  }, [contentRef, content]);

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
          {'share' in navigator && (
            <Button
              className={`content-share ${className}`}
              onClick={() =>
                navigator.share({
                  url: window.location.href,
                  text: 'Have a look at the awesome article on PWAdvent.dev',
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
          __html: content,
        }}
      />
      {originalSource && (
        <Notification className="content-calendar__cannonical">
          This article was originally published on{' '}
          <a href={originalSource.href} target="_blank">
            {originalSource.host}
          </a>
        </Notification>
      )}
    </div>
  );
};

export default ContentCalendar;

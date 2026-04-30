'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Fast, Clean, and Priced Up Front</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://pipemonkeys.com/) no-repeat center center / cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#101d2b',
                }}
              />
              {/* [TODO: Replace with Pipe Monkeys team or job site photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every call starts the same way: we show up, diagnose the problem in front
                of you, explain exactly what needs to happen, and give you the price before
                a single tool touches your drain. No guessing, no surprise invoices — just
                a straight answer and a plan.
              </p>
              <p>
                <strong>Step 1: Diagnose.</strong> Our tech assesses the blockage and
                identifies the right tool for the job — snake, auger, or hydro jet.
              </p>
              <p>
                <strong>Step 2: Approve &amp; Clear.</strong> You get the price first.
                Once you&apos;re ready, we go to work. Most jobs are done in under an hour.
              </p>
              <p>
                <strong>Step 3: Confirm &amp; Clean Up.</strong> We test the flow in front
                of you, clean the work area, and don&apos;t leave until the drain is
                fully clear.
              </p>
            </div>

            <SecondaryButton
              href="/contact-us"
              label="Schedule Service"
              wow
              style={{ marginTop: '2.5rem' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

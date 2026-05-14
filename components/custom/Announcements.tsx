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
          <h3 className="h3">Honest Estimates. Quality Work. No Surprises.</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(/images/IMG_9688-1024x682.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#252525',
                }}
              />
              {/* [TODO: Replace with Bellerose Roofing & Siding job site or team photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every project starts the same way: we assess the job honestly, explain
                exactly what needs to happen, and give you a written estimate before any
                work begins. We&rsquo;ve been doing this for 35 years — we know how to
                price a job accurately and get it done right.
              </p>
              <p>
                <strong>Step 1: Free Inspection.</strong> We assess the roof, siding, or
                windows and document all damage with photos. You know what we found before
                any work starts.
              </p>
              <p>
                <strong>Step 2: Written Estimate.</strong> You get a detailed, accurate
                quote. If an issue comes up mid-project, we discuss it with you and explain
                your options — no surprises at billing.
              </p>
              <p>
                <strong>Step 3: Quality Install &amp; Cleanup.</strong> Our crew does the
                work right and hauls away all debris before leaving. Free anti-mold and
                anti-moss strips included on every roofing job.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="/contact-us"
                label="Get a Free Estimate"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

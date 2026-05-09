'use client';
import { useEffect, useState } from 'react';
import PrimaryButton from './buttons/PrimaryButton';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scroll-width', sw + 'px');
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-12 md:pt-24 bg-brand-navy mb-16 relative overflow-x-clip">

      <div className="inner overflow-visible relative">
        <div className="max-w-8xl max-[767px]:pl-10">

         <div className='relative z-20'>
          <h1
            className={[
              'text-white font-medium leading-tight mb-16',
              'text-6xl font-extrabold! md:text-7xl lg:text-8xl max-w-7xl',
              'overflow-hidden transition-[opacity,transform] duration-800',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full',
            ].join(' ')}
          >
            Queens &amp; Long Island Roofing, Siding &amp; Windows
          </h1>

          <div className="flex justify-start pb-20 max-[767px]:block max-[767px]:pb-8">

            <div
              className={[
                'text-white mr-20',
                'max-w-6xl',
                'transition-[opacity,transform] duration-800 delay-100',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              ].join(' ')}
            >
              <p className="text-[1.9rem] leading-[1.6]">
                Family-owned and operated for over 35 years. Roofing repairs,
                full installs, siding, and windows across the 5 boroughs,
                Nassau, and Suffolk County. Licensed &amp; insured. Free estimates.
              </p>
            </div>

            <PrimaryButton
              label="Call (516) 355-0977"
              href="tel:5163550977"
              dark
              wow
              visible={visible}
            />
          </div>
         </div>

          <div
            className={[
              'relative',
              'w-[calc((100vw-var(--scroll-width)-930px)/2+930px)]',
              'max-[990px]:w-[calc(100%+3rem)]',
              'max-[767px]:w-[106%]',
            ].join(' ')}
          >
            <div
              className={[
                'w-84.75 h-84.75 absolute right-0 bottom-full z-5 pointer-events-none',
                'max-[767px]:w-36.75 max-[767px]:h-36.75',
              ].join(' ')}
            >
              <span
                className="block w-full h-full overflow-hidden"
                style={{
                  transformOrigin: 'left bottom',
                  transform: visible ? 'rotate(0deg)' : 'rotate(90deg)',
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.8s 0.8s, transform 0.8s 0.8s',
                }}
              >
                <span
                  className="block"
                  style={{
                    width: '200%',
                    height: '200%',
                    border: '1px dashed rgba(161,197,211,.2)',
                    borderRadius: '50%',
                  }}
                />
              </span>
              <span
                className="absolute bottom-0 right-0 w-2.5 bg-brand-orange max-[767px]:w-1 h-full"
                style={{
                  transformOrigin: 'right bottom',
                  transform: visible ? 'rotate(0deg)' : 'rotate(-90deg)',
                  transition: 'transform 0.8s ease 0.5s',
                }}
              />
            </div>

            <div className="w-full relative overflow-hidden pb-[38%] max-[767px]:pb-[50%] z-10">
              <div
                className={[
                  'absolute bottom-0 left-0 right-0',
                  'transition-[height,transform] duration-1000 delay-300',
                  visible ? 'h-full scale-100' : 'h-0 scale-[1.2]',
                ].join(' ')}
              >
                {/* TODO: Replace src with a Bellerose Roofing & Siding hero image or video */}
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto max-w-[200%]"
                >
                  <source
                    src="https://www.nccer.org/media/2023/03/Hero-Website-Video-3.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[105vw] h-1/2 bg-white z-3 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import DoorSVG from '../svgs/DoorSVG'
import SecondaryButton from '../buttons/SecondaryButton';


interface InsightAccordionItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    learnHref: string;
    links: Array<{
      label: string;
      href: string;
      external?: boolean;
    }>;
  };
  isOpen: boolean;
  setActiveId: (id: string) => void;
}

const InsightAccordionItem: React.FC<InsightAccordionItemProps> = ({
  item,
  isOpen,
  setActiveId
}) => {
  return (
    <div
      key={item.id}
      className={`accordion-item${isOpen ? " opened" : ""}`}
      data-detect={item.id}
    >
      <div className="accordion-item-in">
        <div className="accordion-item__door relative z-10">
          <DoorSVG />
        </div>
        <div
          className="accordion-item__title h4 relative z-20"
          onClick={() => setActiveId(item.id)}
        >
          {item.title}
          <i className="icon-arr-down" />
        </div>
        <div
          className="accordion-item__desc relative z-20"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="accordion-item__links">
            {item.links.map((link) => (
              <div key={link.label} className="accordion-item__link">
                <Link
                  href={link.href}
                  className="ia-link"
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <span className='text-(--color-brand-navy)'>{link.label}</span>
                  {link.external && <em className="icon-external" />}
                </Link>
              </div>
            ))}
          </div>
          {/* Mobile only: description + btn */}
          <div className="mob-version">
            <div className="content-entry mb-4!">
              <p className='text-(--color-brand-navy)!'>{item.description}</p>
            </div>
            <SecondaryButton
              label="Learn More"
              href={item.learnHref}
              wow
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightAccordionItem
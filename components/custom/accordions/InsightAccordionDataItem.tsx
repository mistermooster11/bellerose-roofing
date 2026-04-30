'use client';

import SecondaryButton from '@/components/custom/buttons/SecondaryButton';

interface InsightAccordionDataItemProps {
    item: {
        id: string;
        title: string;
        description: string;
        learnHref: string;
        image: string;
    };
    isOpen: boolean;
}

const InsightAccordionDataItem: React.FC<InsightAccordionDataItemProps> = ({
    item,
    isOpen
}) => {
    return (
        <div
            key={item.id}
            className={`accordion-data${isOpen ? " opened" : ""}`}
            data-detect={item.id}
            style={{ display: isOpen ? "block" : "none" }}
        >
            <div className="accordion-image">
                <div
                    className="vape-img"
                    style={{
                        background: `url(${item.image}) no-repeat 50% 50% / cover`,
                    }}
                />
            </div>
            <div className="accordion-info">
                <div className="content-entry mb-4">
                    <p className='text-(--color-brand-navy)!'>{item.description}</p>
                </div>
                <SecondaryButton
                    label="Learn More"
                    href={item.learnHref}
                />
            </div>
        </div>
    )
}

export default InsightAccordionDataItem
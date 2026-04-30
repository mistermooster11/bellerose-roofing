
type AccordionLink = { label: string; href: string; external?: boolean };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Associations",
    image: "https://www.nccer.org/media/2022/12/iStock-530983109-1.jpg",
    description:
      "NCCER can help provide your members with a complete workforce development program that includes recruitment, training, and retention tools. These tools can be incorporated into the services you offer to better serve your membership and help your organization generate non-dues revenue.",
    learnHref: "https://www.nccer.org/explore/associations/",
    links: [
      { label: "Become NCCER Accredited", href: "https://www.nccer.org/benefits-of-nccer-accreditation/" },
      { label: "Contact Our WFD Solutions Team", href: "https://www.nccer.org/nccer-workforce-development-team/" },
      { label: "Order Books & Modules", href: "https://www.nccer.org/order-books-modules/" },
      { label: "Promote Your Program With Pre-Designed Templates", href: "https://hs.nccer.org/association-resources-kit", external: true },
      { label: "View Journey-Level Assessments", href: "https://www.nccer.org/assessments/" },
    ] as AccordionLink[],
  },
  {
    id: "accordion-1",
    title: "Contractors",
    image: "https://www.nccer.org/media/2023/03/IMG_9688-1024x682.jpg",
    description:
      "NCCER provides programs that contractors use to assess, educate and train their craft workforce and develop customized training plans utilizing NCCER curricula.",
    learnHref: "https://www.nccer.org/explore/contractors/",
    links: [
      { label: "Contractors Workforce Development Assessment", href: "https://www.nccer.org/programs-crafts/contractors-workforce-development-assessment/" },
      { label: "Learn About Industry-Recognized Credentials", href: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
      { label: "National Training Service Agreement", href: "https://www.nccer.org/national-training-service-agreement/" },
      { label: "Verify Credentials", href: "https://web.myaccount.nccer.org/#/online-verification", external: true },
      { label: "View Our Journey-Level Assessments", href: "https://www.nccer.org/assessments/" },
    ] as AccordionLink[],
  },
  {
    id: "accordion-2",
    title: "High Schools",
    image: "https://www.nccer.org/media/2023/02/Image.jpg",
    description:
      "NCCER's program accreditation is recognized by many state Departments of Education and links secondary, postsecondary and journeyman-level training for skilled craft professionals.",
    learnHref: "https://www.nccer.org/explore/high-schools/",
    links: [
      { label: "Access the Instructor Toolbox", href: "https://toolbox.nccer.org/", external: true },
      { label: "Become NCCER Accredited", href: "https://www.nccer.org/benefits-of-nccer-accreditation/" },
      { label: "Learn About High School Builder Program", href: "https://www.nccer.org/builderprogram/" },
      { label: "Order Books & Modules", href: "https://www.nccer.org/order-books-modules/" },
    ] as AccordionLink[],
  },
  {
    id: "accordion-3",
    title: "Postsecondary",
    image: "https://www.nccer.org/media/2023/03/Masonrycompetition11-1024x680.jpg",
    description:
      "NCCER programs offered by postsecondary institutions provide learners with a pathway to lucrative jobs, and countless opportunities for growth and advancement within a rewarding career in construction.",
    learnHref: "https://www.nccer.org/explore/postsecondary/",
    links: [
      { label: "Access the Instructor Toolbox", href: "https://toolbox.nccer.org/", external: true },
      { label: "Become NCCER Accredited", href: "https://www.nccer.org/benefits-of-nccer-accreditation/" },
      { label: "Order Books & Modules", href: "https://www.nccer.org/order-books-modules/" },
      { label: "Learn About Automated Remote Proctoring", href: "https://www.nccer.org/automated-remote-proctoring/" },
    ] as AccordionLink[],
  },
];
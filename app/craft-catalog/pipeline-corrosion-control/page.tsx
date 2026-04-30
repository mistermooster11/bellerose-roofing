import CraftHero           from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar      from "@/components/custom/channel/ChannelSidebar";
import CraftOverview       from "@/components/custom/craft-catalog/CraftOverview";
import CraftAnnouncement   from "@/components/custom/craft-catalog/CraftAnnouncement";
import CraftSnapshot       from "@/components/custom/craft-catalog/CraftSnapshot";
import CurriculumDetails   from "@/components/custom/craft-catalog/CurriculumDetails";
import ContributingExperts from "@/components/custom/craft-catalog/ContributingExperts";
import InstructorResources from "@/components/custom/craft-catalog/InstructorResources";
import RelatedCrafts       from "@/components/custom/craft-catalog/RelatedCrafts";

import {
  navItems,
  snapshotItems,
  curriculumLevels,
  competencyLinks,
  smeGroups,
  instructorResources,
  relatedCrafts,
} from "@/data/pipeline-corrosion-control";

export const metadata = {
  title: "Pipeline Corrosion Control – NCCER",
  description:
    "NCCER offers thirty-six Covered Task training courses focused on Pipeline Corrosion Control, complying with 49 CFR and DOL apprenticeship standards.",
};

export default function PipelineCorrosionControlPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Pipeline Corrosion Control"
        bgImage="https://www.nccer.org/media/2023/03/Pipeline-Corrosion-Control-1.jpg"
        breadcrumbs={[
          { label: "Craft Catalog", href: "/craft-catalog" },
          { label: "Pipeline Corrosion Control" },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={navItems} />

          <div className="channel-container">
            <CraftOverview
              overviewContent={
                <>
                  <p>
                    NCCER offers thirty-six different Covered Task training courses focused on{" "}
                    <strong>Pipeline Corrosion Control</strong>, including test leads, damage and corrosion
                    inspections, rectifier operation, coating removal and application, measurement of mechanical
                    or corrosion damage, installation of rectifiers and associated equipment, and monitoring of
                    probes and the injection rate of the corrosion inhibitor, and more.
                  </p>
                  <p>
                    Pipeline Corrosion Control Covered Task online training courses directly respond to the
                    requirements of 49 CFR part 192, subpart N and 49 CFR part 195, subpart G.
                  </p>
                  <p>
                    The Pipeline Corrosion Control curriculum complies with the U.S. Department of
                    Labor&apos;s standards for Pipeline Corrosion Technician apprenticeship programs.
                  </p>
                </>
              }
              quickLinks={[
                { label: "Covered Tasks Online Training", href: "https://store.nccer.org/pipeline-courses" },
                { label: "Instructor Toolbox",            href: "https://toolbox.nccer.org" },
              ]}
            />

            <CraftAnnouncement
              message={
                <p>
                  Looking for Pipeline Performance Profile Sheets? Find them in the Reports section after
                  signing into your NCCER Account.
                </p>
              }
              btnLabel="Sign In"
              btnHref="https://web.account.nccer.org"
            />

            <CraftSnapshot items={snapshotItems} />

            <div className="banner-craft ia-bg-sky fadeInUp wow">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Not accredited?</strong>{" "}
                    <a href="/contact-us">Contact us</a> to learn how your organization can offer NCCER
                    credentials.
                  </p>
                </div>
              </div>
            </div>

            <CurriculumDetails
              editionLabel="3rd Edition"
              competencyLinks={competencyLinks}
              catalogPdfHref="https://www.nccer.org/media/2024/08/NCCER-FULL-Catalog.pdf"
              levels={curriculumLevels}
            />

            <ContributingExperts groups={smeGroups} />

            <InstructorResources resources={instructorResources} />

            <RelatedCrafts
              description={
                <p>
                  This program includes an introduction to several other NCCER crafts, which allows
                  opportunities for further career development.
                </p>
              }
              crafts={relatedCrafts}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our Services – Bellerose Roofing & Siding",
  description:
    "Bellerose Roofing & Siding offers roofing repairs, full installs, siding, and windows across Queens, the 5 boroughs, Nassau County, and Suffolk County. Free estimates. 35+ years of experience.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}

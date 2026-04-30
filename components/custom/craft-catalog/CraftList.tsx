"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import type { CraftItem } from "@/data/craft-catalog/crafts";

/* ── CraftRow ───────────────────────────────────────────── */
function CraftRow({ item, index }: { item: CraftItem; index: number }) {
  const odd = index % 2 !== 0;
  return (
    <Link
      href={`/craft-catalog/${item.slug}/`}
      className={`craft-item craft-item-leng${odd ? " craft-item--odd" : " craft-item--even"}`}
    >
      <div className="craft-item-title h4 ia-medium">
        {item.title}
        <em>
          <i className="icon-arrow-right" />
        </em>
      </div>
      <div className="craft-item-assessment">
        {item.hasAssessment ? <i className="icon-assesment" /> : null}
      </div>
      <div className="craft-item-translation">
        {item.hasTranslation ? <i className="icon-translate" /> : null}
      </div>
    </Link>
  );
}

/* ── CraftList ──────────────────────────────────────────── */
interface Props {
  items: CraftItem[];
  totalCount: number;
  sortAsc: boolean;
  onSort: () => void;
  onClearAll: () => void;
}

export default function CraftList({ items, totalCount, sortAsc, onSort, onClearAll }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="inner inner--slim-1172 crafts-wrap relative z-0">
      <div className={`crafts-list fadeInUpS wow${vis}`} style={{ transitionDelay: "0.2s" }}>

        {/* Table header */}
        <div className="crafts-list-head">
          <div className="crafts-list-th">
            {/* crafts-list-mob: shown on mobile (sort hidden, count visible) */}
            <div className="crafts-list-mob">
              Craft / Title
              <button type="button" className="sort" onClick={onSort}>
                <em>Sort {sortAsc ? "A to Z" : "Z to A"}</em>
                <span>
                  <span className={`sort-up icon-arr-up${sortAsc ? " active" : ""}`} />
                  <span className={`sort-down icon-arr-down${!sortAsc ? " active" : ""}`} />
                </span>
              </button>
              <div className="filter-result-count">
                <span>{totalCount}</span> Results
              </div>
            </div>
          </div>
          <div className="crafts-list-th">
            <i className="icon-assesment" /> Assessment
          </div>
          <div className="crafts-list-th">
            <i className="icon-translate" /> Translation
          </div>
        </div>

        {/* Table body */}
        <div className="crafts-list-items">
          {items.length === 0 ? (
            <div className="craft-item craft-item--even">
              <div className="craft-item-title">
                No crafts match your filters.{" "}
                <button type="button" className="ia-link" onClick={onClearAll}>
                  <span>Clear all filters</span>
                </button>
              </div>
              <div className="craft-item-assessment" />
              <div className="craft-item-translation" />
            </div>
          ) : (
            items.map((item, i) => (
              <CraftRow key={item.slug} item={item} index={i} />
            ))
          )}
        </div>

      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { crafts, type CraftItem } from "@/data/craft-catalog/crafts";
import CraftFilterBar from "./CraftFilterBar";
import CraftList from "./CraftList";

export default function CraftCatalogClient() {
  /* ── shared filter state ── */
  const [keyword,     setKeyword]     = useState("");
  const [category,    setCategory]    = useState("");
  const [discipline,  setDiscipline]  = useState("");
  const [assessment,  setAssessment]  = useState(false);
  const [translation, setTranslation] = useState(false);
  const [sortAsc,     setSortAsc]     = useState(true);

  /* ── derived filtered + sorted list ── */
  const filtered = useMemo<CraftItem[]>(() => {
    const list = crafts.filter((c) => {
      if (keyword    && !c.title.toLowerCase().includes(keyword.toLowerCase())) return false;
      if (category   && !c.categories.includes(category))   return false;
      if (discipline && !c.disciplines.includes(discipline)) return false;
      if (assessment  && !c.hasAssessment)  return false;
      if (translation && !c.hasTranslation) return false;
      return true;
    });
    return [...list].sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  }, [keyword, category, discipline, assessment, translation, sortAsc]);

  /* ── active chips (exclude keyword — shown separately as search-phrase) ── */
  const chips = [
    ...(category   ? [{ label: category,                    clear: () => setCategory("")        }] : []),
    ...(discipline ? [{ label: discipline,                  clear: () => setDiscipline("")      }] : []),
    ...(assessment  ? [{ label: "Journey Level Assessment", clear: () => setAssessment(false)   }] : []),
    ...(translation ? [{ label: "Translation Available",    clear: () => setTranslation(false)  }] : []),
  ];

  const clearAll = () => {
    setKeyword(""); setCategory(""); setDiscipline("");
    setAssessment(false); setTranslation(false);
  };

  return (
    <>
      <CraftFilterBar
        keyword={keyword}         setKeyword={setKeyword}
        category={category}       setCategory={setCategory}
        discipline={discipline}   setDiscipline={setDiscipline}
        assessment={assessment}   setAssessment={setAssessment}
        translation={translation} setTranslation={setTranslation}
        chips={chips}
        clearAll={clearAll}
        resultCount={filtered.length}
        sortAsc={sortAsc}
        onSort={() => setSortAsc((v) => !v)}
      />
      <CraftList
        items={filtered}
        totalCount={filtered.length}
        sortAsc={sortAsc}
        onSort={() => setSortAsc((v) => !v)}
        onClearAll={clearAll}
      />
    </>
  );
}

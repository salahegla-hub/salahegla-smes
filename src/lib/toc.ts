/** Shared rules for the table of contents.
 *
 *  These live outside TOC.astro because the article pages need the same
 *  answer *before* they render it: on desktop the contents become a sticky
 *  side column, so whether a TOC exists decides whether the grid has a second
 *  column at all. Two copies of this predicate would drift and leave an empty
 *  250px gutter on pages with too few headings.
 */

export interface Heading {
  depth: number;
  slug: string;
  text: string;
}

/** H2 and H3 only — deeper levels make the list compete with the article. */
export const tocItems = (headings: Heading[]): Heading[] =>
  headings.filter((h) => h.depth === 2 || h.depth === 3);

/** Under three entries a contents list costs more attention than it saves. */
export const hasTOC = (headings: Heading[]): boolean => tocItems(headings).length >= 3;

// Crispy Bits from the Bottom of the Wok — a childhood memory.
//
// On summer evenings my grandmother fried rice in a dented wok while the
// cicadas screamed outside, and she always slipped me the crispy scraped
// bits from the bottom before anyone else sat down to eat.
//
// One sentence, no more: a kitchen, a summer evening, the smell of fresh
// rice, and the small honest detail that makes it lived rather than
// greeting-card — the dented wok, the cicadas, the scraped bits she saved
// just for me. The warmth is in what she did; the ache is in knowing those
// evenings are over.
//
// The program writes exactly that sentence — and nothing else — to
// /output/entry.txt, deterministically, every run. Gate: the file must be
// UTF-8 text of 1 to 280 characters, not only whitespace; this sentence is
// well under the cap, with no trailing newline, so the memory alone is the
// whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "On summer evenings my grandmother fried rice in a dented wok while the cicadas screamed outside, and she always slipped me the crispy scraped bits from the bottom before anyone else sat down to eat.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), ENTRY, "utf8");

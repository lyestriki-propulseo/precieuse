import { V4CLettresA, type LettreVM } from "./lettres-variants/V4CLettresA";

export function V4CLettres({ lettres }: { lettres: LettreVM[] }) {
  return (
    <div id="lettres" className="scroll-mt-20">
      <V4CLettresA lettres={lettres} />
    </div>
  );
}

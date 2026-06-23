"use client";

import dynamic from "next/dynamic";

// Le Studio Sanity est strictement côté client (il utilise React.createContext).
// On le charge avec ssr:false pour qu'il ne soit jamais évalué au prerender —
// sinon le build casse ("createContext is not a function").
const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioClient() {
  return <Studio />;
}

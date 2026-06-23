/**
 * Server component that emits a JSON-LD `<script>` for structured data.
 *
 * Pass any schema.org-shaped object; it is serialised as-is. Keep payloads
 * free of unverified data (e.g. don't invent prices).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is built server-side from typed data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

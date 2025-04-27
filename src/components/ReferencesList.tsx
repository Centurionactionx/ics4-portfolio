export default function ReferencesList({
  references,
}: {
  references: Array<{ name: string; url: string }>;
}) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
      {references.map((ref) => (
        <li key={ref.url}>
          <a
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {ref.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

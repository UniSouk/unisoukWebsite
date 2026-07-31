export type OperationName =
  | "listings"
  | "inventory"
  | "orders"
  | "fulfilment"
  | "payments"
  | "analytics";

export function OperationIcon({ name }: { name: OperationName }) {
  return (
    <svg className="operation-icon" viewBox="0 0 24 24" aria-hidden="true">
      {name === "listings" && (
        <>
          <path d="M4.5 5.5h9l6 6-8 8-7-7z" />
          <path d="M8.2 9.2h.1" />
        </>
      )}
      {name === "inventory" && (
        <>
          <path d="m4.5 8 7.5-4 7.5 4v8L12 20l-7.5-4z" />
          <path d="m4.5 8 7.5 4 7.5-4M12 12v8" />
        </>
      )}
      {name === "orders" && (
        <>
          <path d="M6 5.5h12v15H6z" />
          <path d="M9 5.5V4h6v1.5M9 10h6M9 14h6M9 18h4" />
        </>
      )}
      {name === "fulfilment" && (
        <>
          <path d="M3.5 6.5h10v10h-10zM13.5 10h3.8l3.2 3.5v3h-7z" />
          <path d="M7 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </>
      )}
      {name === "payments" && (
        <>
          <path d="M3.5 6h17v12h-17z" />
          <path d="M3.5 10h17M7 14h3" />
        </>
      )}
      {name === "analytics" && (
        <>
          <path d="M5 19V9M10 19V5M15 19v-7M20 19V3" />
          <path d="M3 19h19" />
        </>
      )}
    </svg>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

function normalizePath(path: string) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

function matchesPath(
  pathname: string,
  path: string,
  includeDescendants: boolean,
) {
  const currentPath = normalizePath(pathname);
  const candidatePath = normalizePath(path);

  return (
    currentPath === candidatePath ||
    (includeDescendants && currentPath.startsWith(candidatePath))
  );
}

type RouteAwareLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "aria-current" | "href"
> & {
  href: string;
  activePaths?: readonly string[];
  includeDescendants?: boolean;
};

export function RouteAwareLink({
  activePaths,
  includeDescendants = false,
  href,
  ...props
}: RouteAwareLinkProps) {
  const pathname = usePathname();
  const paths = activePaths ?? [href];
  const isCurrent = paths.some((path) =>
    matchesPath(pathname, path, includeDescendants),
  );

  return (
    <Link
      {...props}
      href={href}
      aria-current={isCurrent ? "page" : undefined}
    />
  );
}

type RouteAwareSummaryProps = ComponentPropsWithoutRef<"summary"> & {
  activePaths: readonly string[];
};

export function RouteAwareSummary({
  activePaths,
  ...props
}: RouteAwareSummaryProps) {
  const pathname = usePathname();
  const isActive = activePaths.some((path) =>
    matchesPath(pathname, path, true),
  );

  return <summary {...props} data-active={isActive ? "true" : undefined} />;
}

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Max-width page shell with consistent gutters and vertical rhythm for web layouts. */
export function WebCanvas({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 sm:py-10 lg:space-y-8 lg:py-12">
      {children}
    </div>
  );
}

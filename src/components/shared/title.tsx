import { PropsWithChildren } from "react";

export const Title = (props: PropsWithChildren) => {
  return (
    <h1 className="text-lg font-mono md:text-2xl lg:text-4xl font-semibold text-slate-800 text-pretty max-w-3xl">
      {props.children}
    </h1>
  );
};

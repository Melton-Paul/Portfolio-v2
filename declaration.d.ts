// declaration.d.ts
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

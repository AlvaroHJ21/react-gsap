interface Props {
  title: string;
  children: React.ReactNode;
}
export const LayoutSection = ({ children, title }: Props) => {
  return (
    <section className="container m-auto">
      <h1 className="mb-4 text-3xl font-bold text-green-900 underline uppercase">{title}</h1>
      {children}
    </section>
  );
};

export function Button({ children, asChild, ...props }) {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100" {...props}>
      {children}
    </Comp>
  );
}

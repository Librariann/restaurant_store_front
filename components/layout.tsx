type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className="w-full p-0">{children}</div>
    </>
  );
}

export default Layout;

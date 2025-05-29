const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <main>{children}</main>
    </div>
  );
};

export default Page;

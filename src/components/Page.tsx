import Header from './Header';

const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main className='max-w-[1200px] mx-auto p-4'>{children}</main>
    </div>
  );
};

export default Page;

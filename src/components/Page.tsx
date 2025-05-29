import Header from './Header';

const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Page;

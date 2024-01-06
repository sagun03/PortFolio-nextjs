const MidSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-custom2 m-6 px-2 overflow-y-auto overscroll-auto">
      {children}
    </main>
  );
};

export default MidSection;

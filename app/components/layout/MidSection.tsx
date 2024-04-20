"use client"
const MidSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-custom2 h-auto sm:m-6 sm:px-2">
      {children}
    </main>
  );
};

export default MidSection;

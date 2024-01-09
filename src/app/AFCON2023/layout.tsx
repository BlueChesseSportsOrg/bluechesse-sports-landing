import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AfconLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" bg-black min-h-screen">
      <Header />

      {children}
      <Footer />
    </div>
  );
}
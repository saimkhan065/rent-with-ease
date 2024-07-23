import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
      <div>Properties Home</div>
      <Link href="/properties">Show Properties</Link>
    </>
  );
};

export default HomePage;

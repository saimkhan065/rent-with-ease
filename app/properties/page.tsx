import React from "react";
import Link from "next/link";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

const PropertiesPage: React.FC = () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          {/* <PropertySearchForm /> */}
        </div>
      </section>
      {properties.map((prop) => (
        <PropertyCard key={prop._id} property={prop} />
      ))}
      {/* <Properties /> */}
    </>
  );
};

export default PropertiesPage;

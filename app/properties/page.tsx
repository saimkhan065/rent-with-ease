import React from "react";
import Link from "next/link";
//import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage: React.FC = async () => {
  const properties = await fetchProperties();

  //console.log(properties); //test fetch working
  // console.log("----------------");
  // console.log(typeof data);
  // console.log("------props---------");
  // console.log(data.properties);
  // console.log("----------------");
  // console.log("-------only data---------");
  // console.log(data);
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          {/* <PropertySearchForm /> */}
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.properties.map((prop: any) => (
          <PropertyCard key={prop._id} property={prop} />
        ))}
      </div>
      {/* <Properties /> */}
    </>
  );
};

export default PropertiesPage;

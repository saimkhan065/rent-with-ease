import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

interface propertyCard {
  property: any;
}

const PropertyCard: React.FC<propertyCard> = ({ property }) => {
  const getRateDisplay = () => {
    const { rates }: any = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="p-4 relative">
        <h3 className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right">
          ${getRateDisplay()}
        </h3>
        <div className="text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <div className="flex justify-between text-gray-500 mb-4">
          <p className="flex items-center">
            <FaBed className="inline mr-2" /> {property.beds}{" "}
            <span className="hidden md:inline">Beds</span>
          </p>
          <p className="flex items-center">
            <FaBath className="inline mr-2" /> {property.baths}{" "}
            <span className="hidden md:inline">Baths</span>
          </p>
          <p className="flex items-center">
            <FaRulerCombined className="inline mr-2" /> {property.square_feet}{" "}
            <span className="hidden md:inline">sqft</span>
          </p>
        </div>
        <div className="flex gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p className="flex items-center">
              <FaMoneyBill className="inline mr-2" /> Nightly
            </p>
          )}
          {property.rates.weekly && (
            <p className="flex items-center">
              <FaMoneyBill className="inline mr-2" /> Weekly
            </p>
          )}
          {property.rates.monthly && (
            <p className="flex items-center">
              <FaMoneyBill className="inline mr-2" /> Monthly
            </p>
          )}
        </div>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaMapMarker className="text-orange-700" />
            <span className="text-orange-700">
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;

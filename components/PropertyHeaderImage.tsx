import Image from "next/image";

const PropertyHeaderImage = ({ image }: any) => {
  return (
    <section>
      <h2>Header Image</h2>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`} //change to dynamic later
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
export default PropertyHeaderImage;

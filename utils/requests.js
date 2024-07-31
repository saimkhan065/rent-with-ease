const apiDomain = process.env.NEXT_PUBLIC_DOMAIN_API;

// Fetch Basic - Test
async function fetchAllBasic() {
  try {
    const res = await fetch("http://localhost:3000/api/properties", {
      cache: "no-store",
    });
    return res.json();
    //can also await here
    //must await to resolve before using in map
  } catch (error) {
    console.log(error);
  }
}

// Fetch all properties
async function fetchProperties({ showFeatured = false } = {}) {
  try {
    console.log("apidomain->", apiDomain); //test
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    // const res = await fetch(
    //   `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
    //   { cache: "no-store" }
    // );
    const res = await fetch(`${apiDomain}/properties`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch single property
async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }
    // hit api to attempt CRUD with routes
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty, fetchAllBasic };

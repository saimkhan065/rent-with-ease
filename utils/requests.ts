const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
      { cache: "no-store" }
    );

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
async function fetchProperty(id: number) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty, fetchAllBasic };

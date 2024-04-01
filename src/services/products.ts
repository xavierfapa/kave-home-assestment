export async function getProducts() {
  const res = await fetch(
    "https://kavehome.com/nfeeds/es/es/templatebuilder/20240221"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

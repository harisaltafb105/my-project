import client from '../../../sanityClient';

export default async function Home() {
  const products = await client.fetch(`*[_type == 'product']`);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product:any) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
            <img
              src={product.imagePath}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="mb-2">{product.description}</p>
            <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
            <p className="text-gray-500">Category: {product.category}</p>
            <p className="text-gray-500">Stock Level: {product.stockLevel}</p>
            <p className="text-gray-500">
              Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

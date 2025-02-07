import Image from "next/image";

export default function DessertMenu() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-2 gap-6">
        <div className="relative w-full h-80">
          <Image
            src="/dessert.png"
            alt="Dessert Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Dessert</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <div>
                <h3 className="font-semibold">Fig and lemon cake</h3>
                <p className="text-gray-600 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-500 text-sm">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">32$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-semibold">Creamy mascarpone cake</h3>
                <p className="text-gray-600 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-gray-500 text-sm">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">43$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-semibold">Pastry, blueberries, lemon juice</h3>
                <p className="text-gray-600 text-sm">Ground cumin, avocadoes, peeled and cubed</p>
                <p className="text-gray-500 text-sm">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">14$</span>
            </li>
            <li className="flex justify-between">
              <div>
                <h3 className="font-semibold">Pain au chocolat</h3>
                <p className="text-gray-600 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              </div>
              <span className="text-orange-500 font-bold">35$</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
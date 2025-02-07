import Image from "next/image";

const StarterMenu: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start p-6 lg:p-10 gap-8 bg-gray-50">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/menu.png" // Replace with the correct path to your image
          alt="Starter Menu"
          width={448}
          height={626}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Menu Items Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
          Starter Menu
        </h2>
        <ul className="space-y-8">
          {/* Menu Item 1 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Alder Grilled Chinook Salmon
              </h3>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-sm text-gray-500 mt-1">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500 mt-2 sm:mt-0">
              32$
            </span>
          </li>

          {/* Menu Item 2 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-orange-500">
                Berries and Crème Tart
              </h3>
              <p className="text-sm text-gray-500">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-sm text-gray-500 mt-1">700 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500 mt-2 sm:mt-0">
              43$
            </span>
          </li>

          {/* Menu Item 3 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Tormentoso Bush Pizza Pintoage
              </h3>
              <p className="text-sm text-gray-500">
                Ground cumin, avocado, peeled and cubed
              </p>
              <p className="text-sm text-gray-500 mt-1">1000 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500 mt-2 sm:mt-0">
              14$
            </span>
          </li>

          {/* Menu Item 4 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-sm text-gray-500">
                Spreadable crème cheese, crumbled blue cheese
              </p>
              <p className="text-sm text-gray-500 mt-1">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500 mt-2 sm:mt-0">
              35$
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StarterMenu;

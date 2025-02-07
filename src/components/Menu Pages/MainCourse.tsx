import Image from "next/image";

const MainCourse: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly  p-6 lg:p-10 gap-16 bg-gray-50">
     
      {/* Menu Items Section */}
      <div className="w-full lg:w-[448px] ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
          Main Course
        </h2>
        <ul className="space-y-8">
          {/* Menu Item 1 */}
          <li className="flex justify-between items-start">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Optic Big Breakfast Combo Menu
              </h3>
              <p className="text-sm text-gray-500">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className="text-sm text-gray-500">580 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500">32$</span>
          </li>
          {/* Menu Item 2 */}
          <li className="flex justify-between  ">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Cashew Chicken with Stir-Fry
              </h3>
              <p className="text-sm text-gray-500">
                Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className="text-sm text-gray-500">700 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500">43$</span>
          </li>
          {/* Menu Item 3 */}
          <li className="flex justify-between items-start">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Vegetables & Green Salad
              </h3>
              <p className="text-sm text-gray-500">
                Ground cumin, avocado, peeled and cubed
              </p>
              <p className="text-sm text-gray-500">1000 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500">14$</span>
          </li>
          {/* Menu Item 4 */}
          <li className="flex justify-between items-start">
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-sm text-gray-500">
                Spreadable cream cheese, crumbled blue cheese
              </p>
              <p className="text-sm text-gray-500">560 CAL</p>
            </div>
            <span className="text-lg font-bold text-orange-500">35$</span>
          </li>
        </ul>
      </div>
 {/* Image Section */}
 <div className="w-full lg:w-[448px] flex ">
        <Image
          src="/mainCourse.png" 
          alt="Main Course"
          width={448}
          height={626}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>


    </section>
  );
};

export default MainCourse;

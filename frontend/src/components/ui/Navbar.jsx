import React from "react";
import { ShoppingCart, Globe } from "lucide-react";
import { Button } from "./Button";
import Logo from "../../assets/logo.png";

export default function UdemyNavbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Udemy Logo" className="h-12 aspect-auto" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sales
          </a>
          <a
            href="/business"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Billing Prediction
          </a>
          <a
            href="/teach"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Detailed Analysis
          </a>
        </div>

        <Button variant="outline" className="">
          Log in
        </Button>
        <Button className=" bg-black text-white">Sign up</Button>
      </div>
    </nav>
  );
}

// import React from "react";
// import { Menu, Search, ShoppingCart, Globe } from "lucide-react";
// import { Button } from "./Button";
// import { Input } from "../ui/input";
// import Logo from "../../assets/salesforce_crm.png";
// import CategoriesDropdown from "./Categories";

// export default function Navbar() {
//   return (
//     <nav className="w-full min-h-[80px] p-3  flex items-center border-b border-gray-200">
//       {/* Large Screen Navbar */}
//       <div className="hidden md:flex items-center justify-between px-4 py-2  w-full h-full">
//         <div className="flex items-center space-x-4 h-full">
//           <img src={Logo} alt="Udemy Logo" className="h-12 aspect-auto" />
//           <div className="relative h-full">
//             <CategoriesDropdown />
//           </div>
//         </div>
//         <div className="flex-1 max-w-xl px-4">
//           <div className="relative">
//             <Input
//               type="text"
//               placeholder="Search for anything"
//               className="w-full pl-10 pr-4 py-2 rounded-full"
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <a
//             href="#"
//             className="text-sm font-medium text-gray-700 hover:text-gray-900"
//           >
//             About Us
//           </a>
//           <a
//             href="#"
//             className="text-sm font-medium text-gray-700 hover:text-gray-900"
//           >
//             Teach on Udemy
//           </a>
//           <ShoppingCart className="h-6 w-6 text-gray-700" />
//           <Button variant="outline" className="text-sm">
//             Log in
//           </Button>
//           <Button className="text-sm">Sign up</Button>
//         </div>
//       </div>

//       {/* Small Screen Navbar */}
//       <div className="md:hidden flex items-center justify-between px-4 py-2 w-full">
//         <Button variant="ghost" size="icon">
//           <Menu className="h-6 w-6" />
//         </Button>
//         <img src={Logo} alt="Udemy Logo" className="h-8 w-24" />
//         <div className="flex items-center space-x-2">
//           <Button variant="ghost" size="icon">
//             <Search className="h-6 w-6" />
//           </Button>
//           <Button variant="ghost" size="icon">
//             <ShoppingCart className="h-6 w-6" />
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// }

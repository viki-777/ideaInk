import Footer from "@/components/Footer";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { BrainCircuitIcon, Filter, Heart} from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    
    <div>

    
    <div className="pt-40 md:h-screen md:w-screen">
      <div className="md:px-0 px-5">
           
          <h1 className="md:text-5xl text-4xl text-primary capitalize font-semibold text-center mb-3">Business Name </h1> 
          <p className="md:text-5xl text-4xl text-primary capitalize font-semibold text-center mb-3"> Generator</p>

           
          <p className="text-zinc-500 text-center text-xl">Generate the perfect  Business name by our ai-powered business name generator tool!</p>

          <Search />
      </div>
      <div className="md:flex justify-between gap-10 md:px-56 px-5 mt-28">
        <div className="md:mb-0 mb-10 border border-gray-300 rounded p-8 cursor-pointer text-black hover:bg-violet-300 hover:scale-105">
          <BrainCircuitIcon className="text-primary mb-3" size={42} />
          <h4 className="text-black text-xl font-semibold">Generate Idea</h4>
          <p className="text-black">
          Unlock endless possibilities with our AI-powered business name generator. Enter a keyword, and we’ll create unique, innovative, and memorable names tailored to your vision. Let your journey to success begin with the perfect name idea that captures your brand’s essence and sets you apart from the competition.
          </p>
        </div>
        <div className=" md:mb-0 mb-10 border border-gray-300 rounded p-8 cursor-pointer text-black hover:bg-violet-300 hover:scale-105">
          <Filter className="text-primary mb-3" size={42} />
          <h4 className="text-black text-xl font-semibold">Filter Result</h4>
          <p className="text-black">
          Easily filter and refine your business name options to find the one that truly represents your brand. With customizable filters and smart suggestions, focus on names that align with your mission, values, and goals. Simplify your decision-making process and choose a name that stands out and resonates with your audience.
          </p>
        </div>
        <div className="md:mb-0 mb-10 border border-gray-300 rounded p-8 cursor-pointer text-black hover:bg-violet-300 hover:scale-105">
          <Heart className="text-primary mb-3" size={42} />
          <h4 className="text-black text-xl font-semibold">Save Name</h4>
          <p className="text-black">
          Found a name you love? Save it instantly and keep all your top choices in one place. Our save feature ensures you never lose track of the names that inspire you. Compare your favorites, share them with your team, and take the next step with confidence and ease.
          </p>
        </div>
      </div>
      
    <div>
      <Footer />
    </div>
    </div>
    
    </div>
  );
}

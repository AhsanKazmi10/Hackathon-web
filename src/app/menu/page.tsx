
import Dessert from "@/components/Menu Pages/Dessert";
import Drink from "@/components/Menu Pages/Drinks";
import Experience from "@/components/Menu Pages/Experience";
import MainCours from "@/components/Menu Pages/MainCourse";
import StarterMenu from "@/components/Menu Pages/StartMenu";
import PartnersAndClients from "@/components/Menu Pages/PartnerClient";
import Hero from "@/components/Menu Pages/MenuHero";

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}
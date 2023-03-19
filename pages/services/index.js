import Divider from "@/components/Divider";
import HeaderSection from "@/components/HeaderSection";
import ServiceInformation from "@/components/services/ServiceInformation";

export default function Services() {
  return (
    <div>
      <HeaderSection
        title="Our Services"
        imageBackground="/images/1066_websize.jpg"
      />
      <Divider/>
      <ServiceInformation/>
    </div>
  )
}
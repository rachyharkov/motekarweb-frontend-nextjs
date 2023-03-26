import Divider from "@/components/Divider";
import HeaderSection from "@/components/HeaderSection";

export default function Pricing() {
  return (
    <div>
      <HeaderSection
        title="Pricing"
        imageBackground="images/1066_websize.jpg"
      />
      <Divider/>
      <section className="section-vh-auto general">
        <div className="container-fluid general-inner section-inner h-100">
          <h4 className="section-subtitle section-subtitle-with-bg mb-3">More Than Just Freelance</h4>
          <div className="row">
            <div className="col-12">
              <h4>WEDDING FILM EDITING</h4>
              <p className="text-accent">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem fugiat praesentium omnis quisquam, rem reprehenderit error necessitatibus perferendis dolorum maxime debitis vitae deleniti natus sapiente dolores totam dolore blanditiis dignissimos?
              </p>
              <h4>POST-PRODUCTION ASSISTANCE</h4>
              <p className="text-accent">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem fugiat praesentium omnis quisquam, rem reprehenderit error necessitatibus perferendis dolorum maxime debitis vitae deleniti natus sapiente dolores totam dolore blanditiis dignissimos?
              </p>
              <h4>THE PROCESS</h4>
              <p className="text-accent">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem fugiat praesentium omnis quisquam, rem reprehenderit error necessitatibus perferendis dolorum maxime debitis vitae deleniti natus sapiente dolores totam dolore blanditiis dignissimos?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
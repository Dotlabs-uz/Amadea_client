import TitlePage from "@/components/children/TitlePage";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   return (
      <>
         <TitlePage>About Us</TitlePage>
         <section className="custom-container">
            {[0, 1, 2].map((item: number) => {
               return (
                  <div key={item} className="mb-6">
                     <h2 className="text-4xl max-lg:text-3xl font-semibold mb-6 max-md:mb-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Pariatur, voluptate.
                     </h2>
                     <p className="mb-4 max-md:mb-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam optio vel nihil delectus consequatur reiciendis
                        amet libero odio, unde perferendis rem saepe esse iusto
                        sapiente doloremque culpa aliquam quos ipsa? Placeat
                        consectetur iure ullam nemo quo voluptatem impedit
                        perferendis magni neque soluta ipsa explicabo, sit quis.
                        Possimus repudiandae iure necessitatibus?
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam optio vel nihil delectus consequatur reiciendis
                        amet libero odio, unde perferendis rem saepe esse iusto
                        sapiente doloremque culpa aliquam quos ipsa? Placeat
                        consectetur iure ullam nemo quo voluptatem impedit
                        perferendis magni neque soluta ipsa explicabo, sit quis.
                        Possimus repudiandae iure necessitatibus?
                     </p>
                  </div>
               );
            })}
         </section>
      </>
   );
};

export default AboutUs;

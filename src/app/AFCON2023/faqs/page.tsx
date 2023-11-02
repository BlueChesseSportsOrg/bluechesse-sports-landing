'use client';
import { useState } from "react";

export default function FAQ(){
    const [accordion ,setAccordion] = useState(0)
    const faqs = [
        {
            title: "1.  What does Blue Chesse Sports do?",
            description: `
              <p class="mb-3">Blue Chesse Sports, is a sports investment group managed by DIH Group( Damalie Innovations Holdings,LLC)  that builds and invests in innovations in the sports value chain globally. </p>
              <p>Our brand ,Blue Chesse Sports Travel ,is an online and community driven travel booking service for sports enthusiasts, providing assistance with bookings, accommodations, event tickets, and related travel needs for various sporting events and destinations worldwide. </p>
            `
        },
        {
            title: "2. Can I book sports travel services online?",
            description: `
              <p>Yes, you can book your sports travel arrangements through our  <a href="https://bluechessesports.com/AFCON2023" class="underline font-bold text-blue-700">website</a> or by contacting our customer support team via <a  class="underline font-bold text-blue-700">info@bluechessesports.com</a></p>
            `
        },
        {
            title: "3. How do I book a sports travel package with your agency?",
            description: `
              <p>To book a sports travel package, simply visit our website, choose your desired sporting event or destination, and follow the booking instructions. You can also contact our team for personalized assistance.
              </p>
            `
        },
        {
            title: "4. What types of sports events do you offer travel packages for?",
            description: `
              <p class="mb-3">We offer travel packages for a wide range of sports events, including but not limited to football (soccer), basketball, tennis, and major international sporting events like the Olympics, World Cup ,F1 etc. </p>
              <p class="mb-3"> 
                Our current sporting event we are promoting is the <a class="text-blue-700 font-bold underline" href="https://www.cafonline.com/caf-africa-cup-of-nations/" target="_blank"> African Cup of Nations 2023 </a> to be hosted in Cote D’Ivoire  from January 13th -11th February 2024.
              </p>
              <p class="mb-2">Read more details about the tournament here </p>
              <a class="text-blue-700 font-normal " href="https://www.cocan2023.ci/en/la-can-2023/" target="_blank"> https://www.cocan2023.ci/en/la-can-2023/ </a>
            `
        },
        {
            title: "5. Can I customize my travel package?",
            description: `
             <p> Yes, we offer customizable travel packages to suit your preferences. Contact our team, and we'll tailor your trip to meet your specific needs. </p>
            `
        },
        {
            title: "6. How do I make payments for my travel package?",
            description: `
             <p class="mb-3"> We process payments via our payments processor Stripe . You can select your desired membership package and then proceed to add payment details to make payment. </p>
             <p> See membership packages <a class="font-normal underline text-blue-700"  href="https://bit.ly/3FzwpYC" target="_blank">here</a> </p>
            `
        },
        {
            title: "7. Are there any additional fees beyond the membership fee?",
            description: `
             <p class="mb-3"> The membership fees typically cover the essentials outlined on our <a class="font-normal underline text-blue-700"  href="https://bit.ly/3FzwpYC" target="_blank">pricing page</a> </p>
             <p class="mb-3"> By subscribing , you are guaranteed services such as  concierge service to help you book accommodation , buy game tickets ,ensure you have access to private transfers, etc.</p>
             <p class="mb-3"> Note that our membership does not include the cost of your air travel ticket, accommodation ,game tickets or travel insurance.
             </p>
             <p class="mb-3">  Any additional fees or optional add-ons will be clearly communicated to you before booking.
             </p>
            `
        },
        {
            title: "8. What travel documentation do I need for international sports travel?",
            description: `
             <p class="mb-3"> The specific requirements vary by destination, but you'll generally need a valid passport and, in some cases, a visa. We'll provide guidance to help you obtain the necessary documentation.</p>
            `
        },
        {
            title: "9. What is your cancellation policy?",
            description: `
             <p class="mb-1"> Our cancellation policy may vary depending on the event and services booked</p>
             <p class="mb-3"> Please refer to our <a class="font-normal underline text-blue-700"  href="https://bluechessesports.com/AFCON2023/terms" target="_blank">Terms and Conditions</a> for detailed information regarding cancellations and refunds.</p>
            `
        },
        {
            title: "10. How can I get in touch with Blue Chesse Sports Travel?",
            description: `
             <p class="mb-3"> You can reach us through the following channels:</p>
             <ul class="ml-8"> 
                 <li class="list-disc mb-1"> <span class="font-bold">Email: </span>  info@bluechessesports.com</li>
                 <li class="list-disc mb-1"> <span class="font-bold">Phone: </span>  +17628001669</li>
                 <div class="flex flex-row gap-3"> 
                    <li class="list-disc mb-1"> <span class="font-bold">Address: </span> </li>
                     <div>
                       <p class="mb-1"> Blue Chesse Sports</p>
                       <p class="mb-1"> 12333 Sowden Road</p>
                       <p class="mb-1"> Houston, TX 77080 US</p>
                     </div>
                 </div>
             </ul>
            `
        },
        {
            title: "11. What are your business hours?",
            description: `
             <p class="mb-3"> Our customer support team is available during regular business hours 9 am - 7:00 pm UTC.</p>
             
            `
        },
    ]
    return (
      <div className="container xl:max-w-7xl mx-auto px-8">
        <div className="flex flex-col py-4">
          <div className="py-4">
            <h2 className="font-bold text-white text-lg font-gotham">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="py-4">
            {
                faqs.map((item,index) => {
                    return (
                      <div key={"accord--" + index} className="collapse collapse-arrow border-b border-white rounded-none">
                        <input
                          type="radio"
                          name={`chesse-${index}`}
                          checked={accordion === index + 1 ? true : false}
                          onChange={() => setAccordion(index+1)}
                        />
                        <div className="collapse-title text-xl font-gotham text-white  font-bold">
                          <p>{item.title}</p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: item.description}} className="collapse-content font-avenir font-normal pt-3  text-white leading-loose">
                           
                        </div>
                      </div>
                    );
                })
            }
            
            
           
          </div>
        </div>
      </div>
    );
}
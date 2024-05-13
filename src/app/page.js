import React from "react";
import Image from "next/image";
import factsimg from "@/../public/factsimg.jpg";
import Link from "next/link";
import {Reem_Kufi } from "next/font/google";


const reem = Reem_Kufi({ subsets: ["arabic"] });


export default function Home() {
  return (
    <div>
      <div className={`p ${reem.className}`}>
        <p >
          <span>Welcome to FactHub!</span> FactHub is your ultimate destination for verified
          facts and reliable information. Our mission is to empower knowledge
          seekers like you with a treasure trove of accurate and trustworthy
          facts, covering a wide range of topics from science and history to
          technology and current events.
        </p>
        <p>
          Whether you're a student conducting research, a professional seeking
          credible sources, or simply curious about the world around you,
          FactHub is here to help you discover the truth. Our community of
          FactSharers is dedicated to promoting transparency, critical
          thinking, and intellectual curiosity.
        </p>
        <p>
          Explore our collection of facts, engage with fellow FactSharers, and
          join us in the pursuit of truth and enlightenment. Together, let's
          build a world where facts matter and knowledge prevails. Start your
          journey with FactHub today!
        </p>
      </div>
      
        <div className="image-container">
        <Link href="/facts">
          <Image className="image"  src={factsimg} alt="fact image" width={500} height={500} />
          </Link>
        </div>
   
      <div className={`arabic-text ${reem.className}`}>
        <p>
          بمرحباً بكم في FactHub! FactHub هو الوجهة النهائية للحقائق
          الموثوقة والمعلومات الموثوقة. مهمتنا هي تمكين الباحثين عن المعرفة
          مثلك بكنز من الحقائق الدقيقة والموثوقة، تغطي مجموعة واسعة من
          المواضيع من العلوم والتاريخ إلى التكنولوجيا والأحداث الحالية.
        </p>
        <p>
          سواء كنت طالبًا يُجري البحوث، أو محترفًا يبحث عن مصادر موثوقة، أو
          ببساطة فضوليًا بالعالم من حولك، FactHub هنا لمساعدتك في اكتشاف
          الحقيقة. مجتمعنا من مشاركي الحقائق ملتزم بتعزيز الشفافية والتفكير
          النقدي والفضول الفكري.
        </p>
        <p>
          استكشف مجموعتنا من الحقائق، تفاعل مع زملائك FactSharers، وانضم إلينا
          في سعينا وتحقيق الحقيقة والإنارة. معًا، دعونا نبني عالمًا يحترم فيه
          الحقائق ويتفوق المعرفة. ابدأ رحلتك مع FactHub اليوم!
        </p>
      </div>
    </div> )}


import Image from "next/image"
import { Button } from "../ui/button"
import { Download, CircleCheckBig } from "lucide-react"
export default function Hero(){
return(
    <>
    <section className="w-full h-screen flex items-center justify-center gap-70 dark:bg-gradient-to-br dark:from-gray-900 dark:via-[#0f1523] dark:to-black">
    <div className="grid ml-4 mb-50">
    
    <span className="font-fira font-light text-primary">{"<SOFTWARE ENGINEER>"}</span>
    <h3 className="grid pb-5">
        <span className="font-inter font-extrabold text-5xl">Building the </span>
        <span className="font-inter font-extrabold text-5xl">future,</span>
        <span className="font-inter font-extrabold text-5xl bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent">one line of code</span>
        <span className="font-inter font-extrabold text-5xl">at a time</span>
    </h3>
    <p className="font-fira max-w-105 pb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis magni quia, autem doloribus, iste asperiores aliquid eius molestiae ad libero, officia facilis nihil tempora tenetur voluptates temporibus voluptas tempore?
    </p>
<div className="flex gap-3 font-fira ">
    <Button className="bg-primary">View_Projects()</Button>
    <Button className="bg-gray-700 hover:bg-gray-600">
        <Download />
        resume.pdf</Button>
</div>
    </div>
       
        <div className="relative w-120 h-120 max-w-3xl group mb-50">
        
        {/* 2. Dekoratif Arka Plan Katmanı (Mor Efekt) 
          - absolute: Görselin arkasında serbest dolaşması için.
          - inset-0: Kapsayıcıyı doldurur.
          - -rotate-2: Hafif sola eğiklik verir.
          - rounded-[32px]: Görselden biraz daha geniş yuvarlak köşeler.
          - bg-gradient...: Görseldeki mor geçiş efekti.
        */}
        <div className="absolute inset-0 translate-x-2 translate-y-3 -rotate-2 bg-gradient-to-tr from-primary via-violet-300 to-chart-2 rounded-[32px] opacity-80 blur-[1px]" />

        {/* 3. Ana Görsel Alanı 
          - relative: Arka planın üzerinde durması için (z-index mantığı).
          - rounded-3xl: Köşeleri yumuşatır.
          - overflow-hidden: Görselin köşelerden taşmasını engeller.
          - shadow-2xl: Derinlik hissini güçlendirir.
          - border: İnce gri çerçeve.
        */}
        <div className="relative bg-[#0a0a0a] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Next.js Image Bileşeni */}
            <div className="relative aspect-video w-120 h-120">
              <Image 
                src="/photo.png" 
                alt="selim"
                fill
                className="object-cover opacity-90 grayscale" // Hafif şeffaflık kod editörü hissi verir
                priority
              />
              
              {/* İsteğe bağlı: Üzerine koyu bir filtre (overlay) atarak kodun okunurluğunu artırır */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

        </div>
    <div className="relative bottom-15 right-5 w-105 h-18 bg-bounce-card rounded-md border-2 border-gray-500 flex items-center justify-left animate-bounce">
        <div>
            <CircleCheckBig className="text-green-600 ml-5" />
        </div>
        <div className="grid font-fira">
            <span className="text-gray-400 ml-4 mt-4">STATUS</span>
            <span className=" ml-4 mb-4">ready_to_work = true</span>
        </div>
        </div>
      </div>
    </section>
    </>
)

}
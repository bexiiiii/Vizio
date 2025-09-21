"use client"

import Image from "next/image"
import { LinesPatternCard, LinesPatternCardBody } from "@/components/ui/card-with-lines-patter"

export default function PlugAndPlayComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LinesPatternCard>
        <LinesPatternCardBody>
          <h3 className="text-2xl font-bold mb-1 text-foreground">
            Софт
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            На вашем устройстве найдите <b>Vizio</b> и нажмите «Установить». <br />
            Наше приложение доступно для загрузки на Amazon, Android и Chrome-устройствах.
          </p>
          <Image
            src="/images/software.jpeg"
            alt="Software"
            width={400}
            height={250}
            className="mt-4 rounded-2xl object-cover w-full h-auto"
          />
        </LinesPatternCardBody>
      </LinesPatternCard>

      <LinesPatternCard>
        <LinesPatternCardBody>
          <h3 className="text-2xl font-bold mb-1 text-foreground">
            Подключение экрана
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            Когда вы установите и запустите приложение <b>Vizio Player</b>, вы получите 6-значный код. 
            Введите его в своём аккаунте Studio, чтобы подключить экран.
          </p>
          <Image
            src="/images/screen-pairing.jpeg"
            alt="Screen Pairing"
            width={400}
            height={250}
            className="mt-4 rounded-2xl object-cover w-full h-auto"
          />
        </LinesPatternCardBody>
      </LinesPatternCard>
    </div>
  )
}

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Link href="#">

        <div className="
          relative
          flex
          flex-col
          overflow-hidden
          shadow-2xl
          bg-[#1E042D]
          lg:flex-row
        ">

          {/* =========================
              GLASS PANEL (1/3)
          ========================== */}
          <div className="
            relative
            z-20
            flex
            flex-col
            justify-center
            p-8
            lg:w-1/3
            lg:p-14
          ">

            {/* glass card */}
            <div className="
              relative
              rounded-[2rem]
              border
              border-white/20
              bg-white/10
              backdrop-blur-3xl
              p-8
              shadow-xl
            ">

              {/* glow */}
              <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />

              <h2 className="text-4xl font-black leading-[1] text-white">
                Pre-Order <br />
                <span className="text-primary">GTA VI</span>
              </h2>

              <p className="mt-5 text-white/80">
                Secure your copy early and be first to experience the next chapter.
              </p>

              {/* CTA */}
              <button className="
                cursor-pointer
                group
                mt-7
                flex
                items-center
                gap-4
                rounded-full
                bg-white/20
                px-3
                py-3
                pl-6
                font-bold
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/30
              ">
                Pre-Order

                <span className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  transition
                  group-hover:-rotate-45
                ">
                  <ArrowRight className="size-5" />
                </span>

              </button>

            </div>
          </div>

          {/* =========================
              IMAGE (2/3)
          ========================== */}
          <div className="relative lg:w-2/3">

            <div className="relative h-[420px] lg:h-[700px]">

              <Image
                src="https://www.thetoyshop.com/medias/2026-p7-gta-preorder-pod-530x530.jpg?context=bWFzdGVyfHJvb3R8MjA2NDc5fGltYWdlL2pwZWd8YURZeUwyZ3lNUzh4TWpnd05EZzNNRFF3TmpFM05DOHlNREkyTFhBM0xXZDBZUzF3Y21WdmNtUmxjaTF3YjJRdE5UTXdlRFV6TUM1cWNHY3w1NzNjNzk5N2I0ZWU2NzllNGM3NDVhY2MxMjlkYmU3ZmU1ZjM5ZWYxNDIwZGJlZmQwNDVmNjRjOTU0MDYyZmJm"
                alt="GTA VI"
                fill
                className="object-cover"
                priority
              />

              {/* overlays */}

              {/* glow blobs */}
              <div className="absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-3xl" />

            </div>

            {/* floating badge */}
            <div className="absolute right-10 top-10 hidden lg:block">

            <div className="rounded-full bg-primary px-6 py-6 text-center text-primary-foreground shadow-2xl">
              <div className="text-5xl font-black">50%</div>
              <div className="text-xs font-bold tracking-[0.3em]">OFF</div>
            </div>

          </div>

          <div className="absolute bottom-10 right-20 hidden rotate-[-8deg] lg:block">

            <div className="rounded-2xl bg-yellow-400 px-5 py-4 font-black text-black shadow-xl">
              LIMITED TIME
              <div className="text-xs font-medium opacity-70">Ends soon</div>
            </div>

          </div>

          </div>

        </div>
      </Link>

    </section>
  )
}
import { fyjSystems } from "@/data/constants"
import Image from "next/image"
import React from "react"

export default function Systems() {
  return (
    <>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <Image
            src="https://images.pexels.com/photos/7203694/pexels-photo-7203694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="FYJ Features"
            height={96}
            width={96}
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fahari ya Jamii Data Systems
            </h2>
            <p className="mt-4 text-gray-500">
              A collection of Systems used by Fahari Ya Jamii.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-[14rem] lg:mb-[7rem] lg:max-w-5xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {fyjSystems.map((system) => (
                <a key={system.id} href={system.url} target="_blank" rel="noopener noreferrer" className="relative pl-16" data-testid="systemLink">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <system.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {system.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {system.description}
                  </dd>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

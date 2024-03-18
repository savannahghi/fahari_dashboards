import React from "react"
import Link from "next/link"
import Image from "next/image"
import { features } from "@/data/constants"

export default function Admin() {
  return (
    <>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <Image
            src="https://images.pexels.com/photos/6366444/pexels-photo-6366444.jpeg"
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
              Fahari ya Jamii Data Repository
            </h2>
            <p className="mt-4 text-gray-500">
              A collection of Dashboards, Systems and EMRs used by Fahari Ya
              Jamii.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-[14rem] lg:mb-[5rem] lg:max-w-5xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <Link
                  key={feature.name}
                  href={`/${feature.path}`}
                  data-testid="featureItem"
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

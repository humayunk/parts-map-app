"use client";

import { FingerPrintIcon, PencilSquareIcon, MapIcon } from '@heroicons/react/20/solid';


const features = [
  {
    name: 'Easily create parts.',
    description:
      `Click a button, start typing, and voila, you've started tracking a part.`,
    icon: FingerPrintIcon,
  },
  {
    name: 'Add notes.',
    description: 'Get to know your parts over time and jot down what you learn as you go.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Map relationships.',
    description: `Discover clusters of parts and how they work or don't work together.`,
    icon: MapIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Know Thyself</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All of Thyself</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ditch the worksheets, the notebooks, and the endless scraps of papers. Keep track of your parts as you get to know them one by one.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

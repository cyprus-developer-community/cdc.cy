import { Fragment } from 'react'
import {
  CalendarIcon,
  EllipsisVerticalIcon,
  MapPinIcon
} from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import type { Maybe } from '~/types'
import type { getEvents } from '~/features/providers/github/commands/getEvents'
import { getConfig, getGithubNewIssueLink } from '~/features/configuration'

type GetEventsResult = Awaited<ReturnType<typeof getEvents>>
type Day = GetEventsResult['days'][0]

const formatDay = (day: Day): Maybe<string> => {
  const datePart = day.date.split('-').pop()
  return datePart ? datePart.replace(/^0/, '') : undefined
}

export const Events: React.FC<GetEventsResult> = ({ upcoming, past, days }) => {
  const config = getConfig()

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-secondary-700 sm:text-4xl mb-12 text-center md:text-left">
          Upcoming events
        </h2>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
            <div className="flex items-center text-secondary-900">
              {/* <button
                  type="button"
                  className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-secondary-400 hover:text-secondary-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button> */}
              <div className="flex-auto font-semibold">
                {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
                  new Date()
                )}
              </div>
              {/* <button
                  type="button"
                  className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-secondary-400 hover:text-secondary-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button> */}
            </div>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-secondary-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-secondary-200 text-sm shadow ring-1 ring-secondary-200">
              {days.map((day, dayIdx) => {
                // console.log(day, dayIdx)
                return (
                  <button
                    key={day.date}
                    className={`py-1.5 hover:bg-secondary-100 focus:z-10 ${
                      day.isCurrentMonth ? 'bg-white' : 'bg-secondary-50'
                    }
                    ${day.isSelected || day.isToday ? 'font-semibold' : ''}
                    ${day.isSelected ? 'text-white' : ''}
                    ${
                      !day.isSelected && day.isCurrentMonth && !day.isToday
                        ? 'text-secondary-900'
                        : ''
                    }
                    ${
                      !day.isSelected && !day.isCurrentMonth && !day.isToday
                        ? 'text-secondary-400'
                        : ''
                    }
                    ${day.hasEvent ? 'bg-cyan-200' : ''}
                    ${day.isToday && !day.isSelected ? 'text-cyan-600' : ''}
                    ${dayIdx === 0 ? 'rounded-tl-lg' : ''}
                    ${dayIdx === 6 ? 'rounded-tr-lg' : ''}
                    ${dayIdx === days.length - 7 ? 'rounded-bl-lg' : ''}
                    ${dayIdx === days.length - 1 ? 'rounded-br-lg' : ''}`}
                  >
                    <time
                      dateTime={day.date}
                      className="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                    >
                      {formatDay(day)}
                    </time>
                  </button>
                )
              })}
            </div>
            <a
              href={getGithubNewIssueLink(config)}
              className="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Add event
            </a>
          </div>
          <ol className="mt-4 divide-y divide-secondary-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
            {upcoming.map((event) => (
              <li
                key={event.id}
                className="relative flex space-x-6 py-6 xl:static"
              >
                <img
                  src={event.imageUrl}
                  alt=""
                  className="h-14 w-14 flex-none rounded-full"
                />
                <div className="flex-auto">
                  {event.status === 'CANCELLED' && (
                    <h3 className="pr-10 font-semibold text-secondary-900 xl:pr-0">
                      <span className="line-through">{event.title}</span>
                      <span className="inline-flex ml-2 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                        Cancelled
                      </span>
                    </h3>
                  )}
                  {event.status !== 'CANCELLED' && (
                    <h3 className="pr-10 font-semibold text-secondary-900 xl:pr-0">
                      {event.title}
                    </h3>
                  )}
                  <dl className="mt-2 flex flex-col text-secondary-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <CalendarIcon
                          className="h-5 w-5 text-secondary-400"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <time dateTime={event.datetime}>
                          {event.date} at {event.time}
                        </time>
                      </dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-secondary-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        <MapPinIcon
                          className="h-5 w-5 text-secondary-400"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>{event.location}</dd>
                    </div>
                  </dl>
                </div>
                <Menu
                  as="div"
                  className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
                >
                  <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-secondary-500 hover:text-secondary-600">
                      <span className="sr-only">Open options</span>
                      <EllipsisVerticalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <Menu.Item>
                          {() => (
                            <a
                              href={event.url}
                              className="bg-secondary-100 text-secondary-900"
                            >
                              Details
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <h2 className="text-lg font-semibold text-secondary-900 text-center md:text-left">
          Past events
        </h2>
        <ol className="mt-4 divide-y divide-secondary-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {past.map((event) => (
            <li
              key={event.id}
              className="relative flex space-x-6 py-6 xl:static"
            >
              <img
                src={event.imageUrl}
                alt=""
                className="h-14 w-14 flex-none rounded-full"
              />
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-secondary-900 xl:pr-0">
                  {event.title}
                </h3>
                <dl className="mt-2 flex flex-col text-secondary-500 xl:flex-row">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon
                        className="h-5 w-5 text-secondary-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <time dateTime={event.datetime}>
                        {event.date} at {event.time}
                      </time>
                    </dd>
                  </div>
                  <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-secondary-400 xl:border-opacity-50 xl:pl-3.5">
                    <dt className="mt-0.5">
                      <span className="sr-only">Location</span>
                      <MapPinIcon
                        className="h-5 w-5 text-secondary-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>{event.location}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

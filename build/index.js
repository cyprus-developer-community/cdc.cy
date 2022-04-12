var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/patrick/Sites/cyprus-developer-community/cdc.cy/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/windi.css
var windi_default = "/build/_assets/windi-CL5UBJGM.css";

// app/components/Header.jsx
function Header() {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-start lg:w-0 lg:flex-1"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Cyprus Developer Community"), /* @__PURE__ */ React.createElement("img", {
    className: "h-16 w-16",
    src: "/cdc-logo.png",
    alt: "Cyprus Developer Community"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "-mr-2 -my-2 md:hidden"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
    "aria-expanded": "false"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open menu"), /* @__PURE__ */ React.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })))), /* @__PURE__ */ React.createElement("nav", {
    className: "hidden md:flex space-x-10"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "text-lg font-bold text-gray-500 hover:text-gray-900"
  }, "Home"), /* @__PURE__ */ React.createElement("a", {
    href: "/events",
    className: "text-lg font-bold text-gray-500 hover:text-gray-900"
  }, "Events")), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:flex items-center justify-end md:flex-1 lg:w-0"
  }))));
}

// route:/Users/patrick/Sites/cyprus-developer-community/cdc.cy/app/root.jsx
var links = () => [{ rel: "stylesheet", href: windi_default }];
var meta = () => ({
  charset: "utf-8",
  title: "Cyprus Developer Community | CDC.cy",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "antialiased font-sans bg-white"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/patrick/Sites/cyprus-developer-community/cdc.cy/app/routes/events.jsx
var events_exports = {};
__export(events_exports, {
  default: () => EventsRoute,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");
var import_react4 = require("react");
var import_solid = require("@heroicons/react/solid");
var import_react5 = require("@headlessui/react");

// app/utils/github.server.js
var import_auth_app = require("@octokit/auth-app");
var import_graphql = require("@octokit/graphql");
var import_date_fns = require("date-fns");
var import_date_fns_tz = __toESM(require("date-fns-tz"));
var { zonedTimeToUtc } = import_date_fns_tz.default;
function calculateDays(events) {
  function compareDateStrings(a, b) {
    const aDate = a.split("T")[0];
    return aDate === b;
  }
  const days = [];
  const today = new Date();
  let slider = (0, import_date_fns.sub)((0, import_date_fns.startOfMonth)(today), { days: 5 });
  for (let idx = 0; idx < 40; idx++) {
    const currentday = {
      date: (0, import_date_fns.format)(slider, "yyyy-MM-dd")
    };
    if ((0, import_date_fns.isSameDay)(slider, today)) {
      currentday.isToday = true;
    }
    if ((0, import_date_fns.isSameMonth)(slider, today)) {
      currentday.isCurrentMonth = true;
    }
    days.push(currentday);
    slider = (0, import_date_fns.add)(slider, { days: 1 });
  }
  for (const event of events) {
    const found = days.findIndex((d) => compareDateStrings(event.start, d.date));
    if (found > 0) {
      days[found].hasEvent = true;
      days[found].eventTitle = event.title;
    }
  }
  return days;
}
async function getEvents() {
  var _a, _b;
  const timeZone = "Europe/Nicosia";
  const { default: bodyParser } = await import("@zentered/issue-forms-body-parser/src/parse.js");
  const auth = (0, import_auth_app.createAppAuth)({
    appId: parseInt(process.env.GH_APP_ID),
    privateKey: atob(process.env.GH_PRIVATE_KEY),
    installationId: process.env.GH_APP_INSTALLATION_ID
  });
  const graphqlWithAuth = import_graphql.graphql.defaults({
    request: {
      hook: auth.hook
    }
  });
  const locationsFile = await fetch("https://raw.githubusercontent.com/cyprus-developer-community/events/main/locations.json");
  const locations = await locationsFile.json();
  const response = await graphqlWithAuth(`
      query lastIssues($owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          issues(
            filterBy: {labels: "Approved :white_check_mark:"}
            orderBy: {field: CREATED_AT, direction: ASC}
            first: 100
          ) {
            edges {
              node {
                id
                url
                title
                body
                createdAt
                updatedAt
                labels(first:10) {
                  nodes {
                    name
                  }
                }
                author {
                  ... on User {
                    login
                    name
                    url
                  }
                }
                reactions(first: 100, content: THUMBS_UP) {
                  edges {
                    node {
                      user {
                        name
                        login
                        url
                      }
                    }
                  }
                }
              }
            }
            totalCount
          }
        }
      }
    `, {
    owner: "cyprus-developer-community",
    repo: "events"
  });
  const events = [];
  let idx = 0;
  for (const edge of response.repository.issues.edges) {
    const issue = edge.node;
    const parsedBody = await bodyParser(issue.body);
    if (parsedBody && Object.keys(parsedBody).length > 0) {
      const startTime = parsedBody.time;
      const startDate = parsedBody.date;
      const duration = (_a = parsedBody.duration) == null ? void 0 : _a.duration;
      const content = parsedBody["event-description"];
      const location = parsedBody.location;
      if (startDate && startDate.date && startTime.time) {
        const zonedDateTime = `${startDate.date}T${startTime.time}`;
        const utcDate = zonedTimeToUtc(zonedDateTime, timeZone).toJSON();
        const organizer = issue.author.name && issue.author.name.length > 0 ? issue.author.name : (_b = issue.author) == null ? void 0 : _b.login;
        const event = {
          id: idx++,
          start: utcDate,
          date: startDate.date,
          time: startTime.time,
          duration,
          title: issue.title,
          datetime: utcDate,
          description: content.text,
          url: issue.url,
          categories: issue.labels.nodes.map((l) => l.name),
          status: "CONFIRMED",
          organizer: { name: organizer },
          attendees: issue.reactions.edges.map((r) => {
            var _a2;
            return {
              name: ((_a2 = r.node.user.name) == null ? void 0 : _a2.length) > 0 ? r.node.user.name : r.node.user.login,
              rsvp: true,
              partstat: "ACCEPTED",
              dir: r.node.user.url
            };
          })
        };
        if (locations && locations.length > 0) {
          const locationLookup = locations.find((l) => l.id === location.id);
          if (!locationLookup) {
            event.location = location.text;
          } else {
            event.location = locationLookup.name;
            if (locationLookup.geo) {
              const [lat, lon] = locationLookup.geo;
              event.geo = { lat, lon };
            }
          }
        } else {
          event.location = location.text;
        }
        events.push(event);
      }
    }
  }
  const days = calculateDays(events);
  const sorted = events.sort((a, b) => new Date(a.start) - new Date(b.start));
  const upcoming = sorted.filter((e) => new Date(e.start) > new Date());
  const past = sorted.filter((e) => new Date(e.start) < new Date());
  return {
    upcoming,
    past,
    days
  };
}

// route:/Users/patrick/Sites/cyprus-developer-community/cdc.cy/app/routes/events.jsx
async function loader() {
  return getEvents();
}
function EventsRoute() {
  const { upcoming, past, days } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "py-24 bg-gray-50 sm:py-32 mb-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl"
  }, "Cyprus Developer Community"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center"
  }, "Your #1 source for developer events in Cyprus."))), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-semibold text-gray-900"
  }, "Upcoming events"), /* @__PURE__ */ React.createElement("div", {
    className: "lg:grid lg:grid-cols-12 lg:gap-x-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center text-gray-900"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Previous month"), /* @__PURE__ */ React.createElement(import_solid.ChevronLeftIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto font-semibold"
  }, "January"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Next month"), /* @__PURE__ */ React.createElement(import_solid.ChevronRightIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500"
  }, /* @__PURE__ */ React.createElement("div", null, "M"), /* @__PURE__ */ React.createElement("div", null, "T"), /* @__PURE__ */ React.createElement("div", null, "W"), /* @__PURE__ */ React.createElement("div", null, "T"), /* @__PURE__ */ React.createElement("div", null, "F"), /* @__PURE__ */ React.createElement("div", null, "S"), /* @__PURE__ */ React.createElement("div", null, "S")), /* @__PURE__ */ React.createElement("div", {
    className: "isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
  }, days.map((day, dayIdx) => /* @__PURE__ */ React.createElement("button", {
    key: day.date,
    type: "button",
    className: `py-1.5 hover:bg-gray-100 focus:z-10 ${day.isCurrentMonth ? "bg-white" : "bg-gray-50"}
                    ${day.isSelected || day.isToday ? "font-semibold" : ""}
                    ${day.isSelected ? "text-white" : ""}
                    ${!day.isSelected && day.isCurrentMonth && !day.isToday ? "text-gray-900" : ""}
                    ${!day.isSelected && !day.isCurrentMonth && !day.isToday ? "text-gray-400" : ""}
                    ${day.hasEvent ? "bg-cyan-200" : ""}
                    ${day.isToday && !day.isSelected ? "text-cyan-600" : ""}
                    ${dayIdx === 0 ? "rounded-tl-lg" : ""}
                    ${dayIdx === 6 ? "rounded-tr-lg" : ""}
                    ${dayIdx === days.length - 7 ? "rounded-bl-lg" : ""}
                    ${dayIdx === days.length - 1 ? "rounded-br-lg" : ""}`
  }, /* @__PURE__ */ React.createElement("time", {
    dateTime: day.date,
    className: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
  }, day.date.split("-").pop().replace(/^0/, ""))))), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/cyprus-developer-community/events/issues/new?assignees=&labels=Event+%3Asparkles%3A&template=event.yml&title=Event+Title",
    className: "focus:outline-none mt-8 w-full rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
  }, "Add event")), /* @__PURE__ */ React.createElement("ol", {
    className: "mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8"
  }, upcoming.map((event) => /* @__PURE__ */ React.createElement("li", {
    key: event.id,
    className: "relative flex space-x-6 py-6 xl:static"
  }, /* @__PURE__ */ React.createElement("img", {
    src: event.imageUrl,
    alt: "",
    className: "h-14 w-14 flex-none rounded-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "pr-10 font-semibold text-gray-900 xl:pr-0"
  }, event.title), /* @__PURE__ */ React.createElement("dl", {
    className: "mt-2 flex flex-col text-gray-500 xl:flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start space-x-3"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "mt-0.5"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Date"), /* @__PURE__ */ React.createElement(import_solid.CalendarIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement("time", {
    dateTime: event.datetime
  }, event.date, " at ", event.time))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "mt-0.5"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Location"), /* @__PURE__ */ React.createElement(import_solid.LocationMarkerIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("dd", null, event.location)))), /* @__PURE__ */ React.createElement(import_react5.Menu, {
    as: "div",
    className: "absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react5.Menu.Button, {
    className: "-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open options"), /* @__PURE__ */ React.createElement(import_solid.DotsHorizontalIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_react5.Transition, {
    as: import_react4.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Items, {
    className: "focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: event.url,
    className: "bg-gray-100 text-gray-900"
  }, "Details"))))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 sm:px-6 lg:px-8 mt-16"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-semibold text-gray-900"
  }, "Past events"), /* @__PURE__ */ React.createElement("ol", {
    className: "mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8"
  }, past.map((event) => /* @__PURE__ */ React.createElement("li", {
    key: event.id,
    className: "relative flex space-x-6 py-6 xl:static"
  }, /* @__PURE__ */ React.createElement("img", {
    src: event.imageUrl,
    alt: "",
    className: "h-14 w-14 flex-none rounded-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "pr-10 font-semibold text-gray-900 xl:pr-0"
  }, event.title), /* @__PURE__ */ React.createElement("dl", {
    className: "mt-2 flex flex-col text-gray-500 xl:flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start space-x-3"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "mt-0.5"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Date"), /* @__PURE__ */ React.createElement(import_solid.CalendarIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement("time", {
    dateTime: event.datetime
  }, event.date, " at ", event.time))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "mt-0.5"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Location"), /* @__PURE__ */ React.createElement(import_solid.LocationMarkerIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("dd", null, event.location)))), /* @__PURE__ */ React.createElement(import_react5.Menu, {
    as: "div",
    className: "absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react5.Menu.Button, {
    className: "-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open options"), /* @__PURE__ */ React.createElement(import_solid.DotsHorizontalIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_react5.Transition, {
    as: import_react4.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Items, {
    className: "focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: event.url,
    className: "bg-gray-100 text-gray-900"
  }, "View"))))))))))));
}

// route:/Users/patrick/Sites/cyprus-developer-community/cdc.cy/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("main", {
    class: "max-w-3xl mx-auto"
  }, /* @__PURE__ */ React.createElement("section", null, "We're just starting up. There will be more content and events soon. Stay tuned."), /* @__PURE__ */ React.createElement("section", {
    class: "my-16"
  }, /* @__PURE__ */ React.createElement("h3", {
    class: "my-2 text-lg leading-6 font-medium text-cyan-900"
  }, "Participating Groups"), /* @__PURE__ */ React.createElement("div", {
    class: "grid grid-cols-2 gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "h-32",
    src: "https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/cyprusjs.jpeg",
    alt: "CyprusJS"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "h-32",
    src: "https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/aws-user-group-cyprus.jpg",
    alt: "AWS User Group Cyprus"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "h-32",
    src: "https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/gdgcyprus.png",
    alt: "GCG Cyprus"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "h-32",
    src: "https://raw.githubusercontent.com/cyprus-developer-community/home/main/assets/pydata-cyprus.jpeg",
    alt: "PyData Cyprus"
  }))), /* @__PURE__ */ React.createElement("p", null, "Reach out on", " ", /* @__PURE__ */ React.createElement("a", {
    class: "text-cyan-400",
    href: "https://chat.cdc.cy",
    target: "_blank",
    rel: "noreferrer"
  }, "Discord"), " ", "if you want to join us.")), /* @__PURE__ */ React.createElement("section", {
    class: "my-16"
  }, /* @__PURE__ */ React.createElement("h3", {
    class: "my-2 text-lg leading-6 font-medium text-cyan-900"
  }, "Chat"), /* @__PURE__ */ React.createElement("p", null, "Join us on", " ", /* @__PURE__ */ React.createElement("a", {
    class: "text-cyan-400",
    href: "https://chat.cdc.cy",
    target: "_blank",
    rel: "noreferrer"
  }, "Discord"), " ", "or follow our", " ", /* @__PURE__ */ React.createElement("a", {
    class: "text-cyan-400",
    href: "https://github.com/cyprus-developer-community/home/discussions",
    target: "_blank",
    rel: "noreferrer"
  }, "discussions on GitHub.")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "5af86300", "entry": { "module": "/build/entry.client-X3KHG7BO.js", "imports": ["/build/_shared/chunk-7PZLR26B.js", "/build/_shared/chunk-YFMRV5TT.js", "/build/_shared/chunk-WE4I4FD6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FZDY7L3U.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/events": { "id": "routes/events", "parentId": "root", "path": "events", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/events-2CX43VSP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PPEEYOZJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5AF86300.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/events": {
    id: "routes/events",
    parentId: "root",
    path: "events",
    index: void 0,
    caseSensitive: void 0,
    module: events_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L1VzZXJzL3BhdHJpY2svU2l0ZXMvY3lwcnVzLWRldmVsb3Blci1jb21tdW5pdHkvY2RjLmN5L2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9IZWFkZXIuanN4IiwgInJvdXRlOi9Vc2Vycy9wYXRyaWNrL1NpdGVzL2N5cHJ1cy1kZXZlbG9wZXItY29tbXVuaXR5L2NkYy5jeS9hcHAvcm91dGVzL2V2ZW50cy5qc3giLCAiLi4vYXBwL3V0aWxzL2dpdGh1Yi5zZXJ2ZXIuanMiLCAicm91dGU6L1VzZXJzL3BhdHJpY2svU2l0ZXMvY3lwcnVzLWRldmVsb3Blci1jb21tdW5pdHkvY2RjLmN5L2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICJpbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKVxuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSlcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvblxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0J1xuaW1wb3J0IHdpbmRpU3R5bGVzaGVldFVybCBmcm9tICcuL3N0eWxlcy93aW5kaS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9IZWFkZXIuanN4J1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogd2luZGlTdHlsZXNoZWV0VXJsIH1dXG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4gKHtcbiAgY2hhcnNldDogJ3V0Zi04JyxcbiAgdGl0bGU6ICdDeXBydXMgRGV2ZWxvcGVyIENvbW11bml0eSB8IENEQy5jeScsXG4gIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCI+PC9saW5rPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImFudGlhbGlhc2VkIGZvbnQtc2FucyBiZy13aGl0ZVwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1heC13LTd4bCBteC1hdXRvIHB4LTQgcHktNiBzbTpweC02IG1kOmp1c3RpZnktc3RhcnQgbWQ6c3BhY2UteC0xMCBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgbGc6dy0wIGxnOmZsZXgtMVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkN5cHJ1cyBEZXZlbG9wZXIgQ29tbXVuaXR5PC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2XCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2RjLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDeXBydXMgRGV2ZWxvcGVyIENvbW11bml0eVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiAtbXktMiBtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTEwXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIvZXZlbnRzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgbWQ6ZmxleC0xIGxnOnctMFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJJY29uLFxuICBDaGV2cm9uTGVmdEljb24sXG4gIENoZXZyb25SaWdodEljb24sXG4gIERvdHNIb3Jpem9udGFsSWNvbixcbiAgTG9jYXRpb25NYXJrZXJJY29uXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXG5pbXBvcnQgeyBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgZXZlbnRzIGZyb20gJ34vdXRpbHMvZ2l0aHViLnNlcnZlcidcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgcmV0dXJuIGV2ZW50cygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50c1JvdXRlKCkge1xuICBjb25zdCB7IHVwY29taW5nLCBwYXN0LCBkYXlzIH0gPSB1c2VMb2FkZXJEYXRhKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxtYWluPlxuICAgICAgICB7LyogSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTI0IGJnLWdyYXktNTAgc206cHktMzIgbWItMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gcGwtNCBwci04IHNtOm1heC13LWxnIHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZWFkaW5nLTEwIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgdGV4dC1jZW50ZXIgc206dGV4dC01eGwgc206bGVhZGluZy1ub25lIGxnOnRleHQtNnhsXCI+XG4gICAgICAgICAgICAgIEN5cHJ1cyBEZXZlbG9wZXIgQ29tbXVuaXR5XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiBtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LXhsIGxlYWRpbmctbm9ybWFsIHRleHQtZ3JheS01MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgWW91ciAjMSBzb3VyY2UgZm9yIGRldmVsb3BlciBldmVudHMgaW4gQ3lwcnVzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBVcGNvbWluZyBldmVudHNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Z3JpZCBsZzpncmlkLWNvbHMtMTIgbGc6Z2FwLXgtMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC1jZW50ZXIgbGc6Y29sLXN0YXJ0LTggbGc6Y29sLWVuZC0xMyBsZzpyb3ctc3RhcnQtMSBsZzptdC05IHhsOmNvbC1zdGFydC05XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLW0tMS41IGZsZXggZmxleC1ub25lIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEuNSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91cyBtb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gZm9udC1zZW1pYm9sZFwiPkphbnVhcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1tLTEuNSBmbGV4IGZsZXgtbm9uZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xLjUgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dCBtb250aDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTcgdGV4dC14cyBsZWFkaW5nLTYgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+TTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+VDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+VzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+VDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+RjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+UzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+UzwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29sYXRlIG10LTIgZ3JpZCBncmlkLWNvbHMtNyBnYXAtcHggcm91bmRlZC1sZyBiZy1ncmF5LTIwMCB0ZXh0LXNtIHNoYWRvdyByaW5nLTEgcmluZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgIHtkYXlzLm1hcCgoZGF5LCBkYXlJZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtkYXkuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTEuNSBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czp6LTEwICR7XG4gICAgICAgICAgICAgICAgICAgICAgZGF5LmlzQ3VycmVudE1vbnRoID8gJ2JnLXdoaXRlJyA6ICdiZy1ncmF5LTUwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR7ZGF5LmlzU2VsZWN0ZWQgfHwgZGF5LmlzVG9kYXkgPyAnZm9udC1zZW1pYm9sZCcgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgJHtkYXkuaXNTZWxlY3RlZCA/ICd0ZXh0LXdoaXRlJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICFkYXkuaXNTZWxlY3RlZCAmJiBkYXkuaXNDdXJyZW50TW9udGggJiYgIWRheS5pc1RvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWdyYXktOTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgIWRheS5pc1NlbGVjdGVkICYmICFkYXkuaXNDdXJyZW50TW9udGggJiYgIWRheS5pc1RvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR7ZGF5Lmhhc0V2ZW50ID8gJ2JnLWN5YW4tMjAwJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAke2RheS5pc1RvZGF5ICYmICFkYXkuaXNTZWxlY3RlZCA/ICd0ZXh0LWN5YW4tNjAwJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAke2RheUlkeCA9PT0gMCA/ICdyb3VuZGVkLXRsLWxnJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAke2RheUlkeCA9PT0gNiA/ICdyb3VuZGVkLXRyLWxnJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAke2RheUlkeCA9PT0gZGF5cy5sZW5ndGggLSA3ID8gJ3JvdW5kZWQtYmwtbGcnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICR7ZGF5SWR4ID09PSBkYXlzLmxlbmd0aCAtIDEgPyAncm91bmRlZC1ici1sZycgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lPXtkYXkuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggaC03IHctNyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXkuZGF0ZS5zcGxpdCgnLScpLnBvcCgpLnJlcGxhY2UoL14wLywgJycpfVxuICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eS9ldmVudHMvaXNzdWVzL25ldz9hc3NpZ25lZXM9JmxhYmVscz1FdmVudCslM0FzcGFya2xlcyUzQSZ0ZW1wbGF0ZT1ldmVudC55bWwmdGl0bGU9RXZlbnQrVGl0bGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBtdC04IHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctY3lhbi02MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzaGFkb3cgaG92ZXI6YmctY3lhbi03MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctY3lhbi01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgZXZlbnRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibXQtNCBkaXZpZGUteSBkaXZpZGUtZ3JheS0xMDAgdGV4dC1zbSBsZWFkaW5nLTYgbGc6Y29sLXNwYW4tNyB4bDpjb2wtc3Bhbi04XCI+XG4gICAgICAgICAgICAgIHt1cGNvbWluZy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBzcGFjZS14LTYgcHktNiB4bDpzdGF0aWNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtldmVudC5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IGZsZXgtbm9uZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci0xMCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgeGw6cHItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtldmVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTIgZmxleCBmbGV4LWNvbCB0ZXh0LWdyYXktNTAwIHhsOmZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cIm10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFySWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtldmVudC5kYXRldGltZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmRhdGV9IGF0IHtldmVudC50aW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtMyB4bDptdC0wIHhsOm1sLTMuNSB4bDpib3JkZXItbCB4bDpib3JkZXItZ3JheS00MDAgeGw6Ym9yZGVyLW9wYWNpdHktNTAgeGw6cGwtMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwibXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2NhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uTWFya2VySWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e2V2ZW50LmxvY2F0aW9ufTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgcmlnaHQtMCB4bDpyZWxhdGl2ZSB4bDp0b3AtYXV0byB4bDpyaWdodC1hdXRvIHhsOnNlbGYtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwiLW0tMiBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgcC0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gb3B0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb3RzSG9yaXpvbnRhbEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIGFic29sdXRlIHJpZ2h0LTAgei0xMCBtdC0yIHctMzYgb3JpZ2luLXRvcC1yaWdodCByb3VuZGVkLW1kIGJnLXdoaXRlIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtldmVudC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggbXQtMTZcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5QYXN0IGV2ZW50czwvaDI+XG4gICAgICAgICAgPG9sIGNsYXNzTmFtZT1cIm10LTQgZGl2aWRlLXkgZGl2aWRlLWdyYXktMTAwIHRleHQtc20gbGVhZGluZy02IGxnOmNvbC1zcGFuLTcgeGw6Y29sLXNwYW4tOFwiPlxuICAgICAgICAgICAge3Bhc3QubWFwKChldmVudCkgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggc3BhY2UteC02IHB5LTYgeGw6c3RhdGljXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17ZXZlbnQuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IGZsZXgtbm9uZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci0xMCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgeGw6cHItMFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZXZlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTIgZmxleCBmbGV4LWNvbCB0ZXh0LWdyYXktNTAwIHhsOmZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwibXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZT17ZXZlbnQuZGF0ZXRpbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuZGF0ZX0gYXQge2V2ZW50LnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtMyB4bDptdC0wIHhsOm1sLTMuNSB4bDpib3JkZXItbCB4bDpib3JkZXItZ3JheS00MDAgeGw6Ym9yZGVyLW9wYWNpdHktNTAgeGw6cGwtMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cIm10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uTWFya2VySWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkZD57ZXZlbnQubG9jYXRpb259PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiByaWdodC0wIHhsOnJlbGF0aXZlIHhsOnRvcC1hdXRvIHhsOnJpZ2h0LWF1dG8geGw6c2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCItbS0yIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBwLTIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gb3B0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8RG90c0hvcml6b250YWxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBhYnNvbHV0ZSByaWdodC0wIHotMTAgbXQtMiB3LTM2IG9yaWdpbi10b3AtcmlnaHQgcm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtldmVudC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUFwcEF1dGggfSBmcm9tICdAb2N0b2tpdC9hdXRoLWFwcCdcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdAb2N0b2tpdC9ncmFwaHFsJ1xuaW1wb3J0IHtcbiAgZm9ybWF0LFxuICBhZGQsXG4gIHN1YixcbiAgaXNTYW1lRGF5LFxuICBpc1NhbWVNb250aCxcbiAgc3RhcnRPZk1vbnRoXG59IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHBrZyBmcm9tICdkYXRlLWZucy10eidcbmNvbnN0IHsgem9uZWRUaW1lVG9VdGMgfSA9IHBrZ1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEYXlzKGV2ZW50cykge1xuICBmdW5jdGlvbiBjb21wYXJlRGF0ZVN0cmluZ3MoYSwgYikge1xuICAgIGNvbnN0IGFEYXRlID0gYS5zcGxpdCgnVCcpWzBdXG4gICAgcmV0dXJuIGFEYXRlID09PSBiXG4gIH1cblxuICBjb25zdCBkYXlzID0gW11cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIGxldCBzbGlkZXIgPSBzdWIoc3RhcnRPZk1vbnRoKHRvZGF5KSwgeyBkYXlzOiA1IH0pXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IDQwOyBpZHgrKykge1xuICAgIGNvbnN0IGN1cnJlbnRkYXkgPSB7XG4gICAgICBkYXRlOiBmb3JtYXQoc2xpZGVyLCAneXl5eS1NTS1kZCcpXG4gICAgfVxuXG4gICAgaWYgKGlzU2FtZURheShzbGlkZXIsIHRvZGF5KSkge1xuICAgICAgY3VycmVudGRheS5pc1RvZGF5ID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChpc1NhbWVNb250aChzbGlkZXIsIHRvZGF5KSkge1xuICAgICAgY3VycmVudGRheS5pc0N1cnJlbnRNb250aCA9IHRydWVcbiAgICB9XG5cbiAgICBkYXlzLnB1c2goY3VycmVudGRheSlcbiAgICBzbGlkZXIgPSBhZGQoc2xpZGVyLCB7IGRheXM6IDEgfSlcbiAgfVxuXG4gIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgY29uc3QgZm91bmQgPSBkYXlzLmZpbmRJbmRleCgoZCkgPT4gY29tcGFyZURhdGVTdHJpbmdzKGV2ZW50LnN0YXJ0LCBkLmRhdGUpKVxuICAgIGlmIChmb3VuZCA+IDApIHtcbiAgICAgIGRheXNbZm91bmRdLmhhc0V2ZW50ID0gdHJ1ZVxuICAgICAgZGF5c1tmb3VuZF0uZXZlbnRUaXRsZSA9IGV2ZW50LnRpdGxlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRheXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRzKCkge1xuICBjb25zdCB0aW1lWm9uZSA9ICdFdXJvcGUvTmljb3NpYSdcbiAgY29uc3QgeyBkZWZhdWx0OiBib2R5UGFyc2VyIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgJ0B6ZW50ZXJlZC9pc3N1ZS1mb3Jtcy1ib2R5LXBhcnNlci9zcmMvcGFyc2UuanMnXG4gIClcblxuICBjb25zdCBhdXRoID0gY3JlYXRlQXBwQXV0aCh7XG4gICAgYXBwSWQ6IHBhcnNlSW50KHByb2Nlc3MuZW52LkdIX0FQUF9JRCksXG4gICAgcHJpdmF0ZUtleTogYXRvYihwcm9jZXNzLmVudi5HSF9QUklWQVRFX0tFWSksXG4gICAgaW5zdGFsbGF0aW9uSWQ6IHByb2Nlc3MuZW52LkdIX0FQUF9JTlNUQUxMQVRJT05fSURcbiAgfSlcblxuICBjb25zdCBncmFwaHFsV2l0aEF1dGggPSBncmFwaHFsLmRlZmF1bHRzKHtcbiAgICByZXF1ZXN0OiB7XG4gICAgICBob29rOiBhdXRoLmhvb2tcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbG9jYXRpb25zRmlsZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY3lwcnVzLWRldmVsb3Blci1jb21tdW5pdHkvZXZlbnRzL21haW4vbG9jYXRpb25zLmpzb24nXG4gIClcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgbG9jYXRpb25zRmlsZS5qc29uKClcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdyYXBocWxXaXRoQXV0aChcbiAgICBgXG4gICAgICBxdWVyeSBsYXN0SXNzdWVzKCRvd25lcjogU3RyaW5nISwgJHJlcG86IFN0cmluZyEpIHtcbiAgICAgICAgcmVwb3NpdG9yeShvd25lcjogJG93bmVyLCBuYW1lOiAkcmVwbykge1xuICAgICAgICAgIGlzc3VlcyhcbiAgICAgICAgICAgIGZpbHRlckJ5OiB7bGFiZWxzOiBcIkFwcHJvdmVkIDp3aGl0ZV9jaGVja19tYXJrOlwifVxuICAgICAgICAgICAgb3JkZXJCeToge2ZpZWxkOiBDUkVBVEVEX0FULCBkaXJlY3Rpb246IEFTQ31cbiAgICAgICAgICAgIGZpcnN0OiAxMDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIGJvZHlcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgICAgICAgICBsYWJlbHMoZmlyc3Q6MTApIHtcbiAgICAgICAgICAgICAgICAgIG5vZGVzIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdXRob3Ige1xuICAgICAgICAgICAgICAgICAgLi4uIG9uIFVzZXIge1xuICAgICAgICAgICAgICAgICAgICBsb2dpblxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFjdGlvbnMoZmlyc3Q6IDEwMCwgY29udGVudDogVEhVTUJTX1VQKSB7XG4gICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxDb3VudFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAge1xuICAgICAgb3duZXI6ICdjeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eScsXG4gICAgICByZXBvOiAnZXZlbnRzJ1xuICAgIH1cbiAgKVxuXG4gIGNvbnN0IGV2ZW50cyA9IFtdXG4gIGxldCBpZHggPSAwXG4gIGZvciAoY29uc3QgZWRnZSBvZiByZXNwb25zZS5yZXBvc2l0b3J5Lmlzc3Vlcy5lZGdlcykge1xuICAgIGNvbnN0IGlzc3VlID0gZWRnZS5ub2RlXG4gICAgY29uc3QgcGFyc2VkQm9keSA9IGF3YWl0IGJvZHlQYXJzZXIoaXNzdWUuYm9keSlcblxuICAgIGlmIChwYXJzZWRCb2R5ICYmIE9iamVjdC5rZXlzKHBhcnNlZEJvZHkpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBhcnNlZEJvZHkudGltZVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gcGFyc2VkQm9keS5kYXRlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlZEJvZHkuZHVyYXRpb24/LmR1cmF0aW9uXG4gICAgICBjb25zdCBjb250ZW50ID0gcGFyc2VkQm9keVsnZXZlbnQtZGVzY3JpcHRpb24nXVxuICAgICAgY29uc3QgbG9jYXRpb24gPSBwYXJzZWRCb2R5LmxvY2F0aW9uXG5cbiAgICAgIGlmIChzdGFydERhdGUgJiYgc3RhcnREYXRlLmRhdGUgJiYgc3RhcnRUaW1lLnRpbWUpIHtcbiAgICAgICAgY29uc3Qgem9uZWREYXRlVGltZSA9IGAke3N0YXJ0RGF0ZS5kYXRlfVQke3N0YXJ0VGltZS50aW1lfWBcblxuICAgICAgICBjb25zdCB1dGNEYXRlID0gem9uZWRUaW1lVG9VdGMoem9uZWREYXRlVGltZSwgdGltZVpvbmUpLnRvSlNPTigpXG5cbiAgICAgICAgY29uc3Qgb3JnYW5pemVyID1cbiAgICAgICAgICBpc3N1ZS5hdXRob3IubmFtZSAmJiBpc3N1ZS5hdXRob3IubmFtZS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGlzc3VlLmF1dGhvci5uYW1lXG4gICAgICAgICAgICA6IGlzc3VlLmF1dGhvcj8ubG9naW5cblxuICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICBpZDogaWR4KyssXG4gICAgICAgICAgc3RhcnQ6IHV0Y0RhdGUsXG4gICAgICAgICAgZGF0ZTogc3RhcnREYXRlLmRhdGUsXG4gICAgICAgICAgdGltZTogc3RhcnRUaW1lLnRpbWUsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHRpdGxlOiBpc3N1ZS50aXRsZSxcbiAgICAgICAgICBkYXRldGltZTogdXRjRGF0ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY29udGVudC50ZXh0LFxuICAgICAgICAgIHVybDogaXNzdWUudXJsLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IGlzc3VlLmxhYmVscy5ub2Rlcy5tYXAoKGwpID0+IGwubmFtZSksXG4gICAgICAgICAgc3RhdHVzOiAnQ09ORklSTUVEJyxcbiAgICAgICAgICBvcmdhbml6ZXI6IHsgbmFtZTogb3JnYW5pemVyIH0sXG4gICAgICAgICAgYXR0ZW5kZWVzOiBpc3N1ZS5yZWFjdGlvbnMuZWRnZXMubWFwKChyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgICAgIHIubm9kZS51c2VyLm5hbWU/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgID8gci5ub2RlLnVzZXIubmFtZVxuICAgICAgICAgICAgICAgICAgOiByLm5vZGUudXNlci5sb2dpbixcbiAgICAgICAgICAgICAgcnN2cDogdHJ1ZSxcbiAgICAgICAgICAgICAgcGFydHN0YXQ6ICdBQ0NFUFRFRCcsXG4gICAgICAgICAgICAgIGRpcjogci5ub2RlLnVzZXIudXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2NhdGlvbnMgJiYgbG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBsb2NhdGlvbkxvb2t1cCA9IGxvY2F0aW9ucy5maW5kKChsKSA9PiBsLmlkID09PSBsb2NhdGlvbi5pZClcbiAgICAgICAgICBpZiAoIWxvY2F0aW9uTG9va3VwKSB7XG4gICAgICAgICAgICBldmVudC5sb2NhdGlvbiA9IGxvY2F0aW9uLnRleHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQubG9jYXRpb24gPSBsb2NhdGlvbkxvb2t1cC5uYW1lXG4gICAgICAgICAgICBpZiAobG9jYXRpb25Mb29rdXAuZ2VvKSB7XG4gICAgICAgICAgICAgIGNvbnN0IFtsYXQsIGxvbl0gPSBsb2NhdGlvbkxvb2t1cC5nZW9cbiAgICAgICAgICAgICAgZXZlbnQuZ2VvID0geyBsYXQsIGxvbiB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ZW50LmxvY2F0aW9uID0gbG9jYXRpb24udGV4dFxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF5cyA9IGNhbGN1bGF0ZURheXMoZXZlbnRzKVxuXG4gIGNvbnN0IHNvcnRlZCA9IGV2ZW50cy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLnN0YXJ0KSAtIG5ldyBEYXRlKGIuc3RhcnQpKVxuICBjb25zdCB1cGNvbWluZyA9IHNvcnRlZC5maWx0ZXIoKGUpID0+IG5ldyBEYXRlKGUuc3RhcnQpID4gbmV3IERhdGUoKSlcbiAgY29uc3QgcGFzdCA9IHNvcnRlZC5maWx0ZXIoKGUpID0+IG5ldyBEYXRlKGUuc3RhcnQpIDwgbmV3IERhdGUoKSlcblxuICByZXR1cm4ge1xuICAgIHVwY29taW5nLFxuICAgIHBhc3QsXG4gICAgZGF5c1xuICB9XG59XG5cbi8qKiBcbiAqIHRoZXNlIGFyZSBmb3IgY2xvdWRmbGFyZSB3b3JrZXJzIHdpdGhvdXQgdXNpbmcgdGhlIGdpdGh1YiBsaWJyYXJpZXNcbmFzeW5jIGZ1bmN0aW9uIGdldEFjY2Vzc1Rva2VuKGNvbnRleHQpIHtcbiAgY29uc3QgYXBwSW5zdGFsbGF0aW9uSWQgPSBwYXJzZUludChjb250ZXh0LkdIX0FQUF9JTlNUQUxMQVRJT05fSUQpXG5cbiAgLy8gYXV0aGVudGljYXRlIHRoZSBnaXRodWIgYXBwXG4gIGNvbnN0IGF1dGggPSBhd2FpdCBjcmVhdGVBcHBBdXRoKHtcbiAgICBhcHBJZDogcGFyc2VJbnQoY29udGV4dC5HSF9BUFBfSUQpLFxuICAgIHByaXZhdGVLZXk6IGF0b2IoY29udGV4dC5HSF9QUklWQVRFX0tFWSksXG4gICAgaW5zdGFsbGF0aW9uSWQ6IGFwcEluc3RhbGxhdGlvbklkXG4gIH0pXG4gIGNvbnN0IGFwcEF1dGhlbnRpY2F0aW9uID0gYXdhaXQgYXV0aCh7IHR5cGU6ICdhcHAnIH0pXG5cbiAgLy8gZmV0Y2ggYW4gYWNjZXNzIHRva2VuIGZvciB0aGUgaW5zdGFsbGF0aW9uXG4gIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthcHBBdXRoZW50aWNhdGlvbi50b2tlbn1gLFxuICAgICdVc2VyLUFnZW50JzogJ1JlbWl4LVJ1bidcbiAgfSlcbiAgY29uc3QgdG9rZW5SZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vYXBwL2luc3RhbGxhdGlvbnMvJHthcHBJbnN0YWxsYXRpb25JZH0vYWNjZXNzX3Rva2Vuc2AsXG4gICAgeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogaGVhZGVycyB9XG4gIClcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0b2tlblJlcXVlc3QuanNvbigpXG5cbiAgcmV0dXJuIGFjY2Vzc1Rva2VuLnRva2VuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFdmVudHMoY29udGV4dCkge1xuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKGNvbnRleHQpXG5cbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgJ1VzZXItQWdlbnQnOiAnUmVtaXgtUnVuJ1xuICB9KVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9jeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eS9ldmVudHMvaXNzdWVzJyxcbiAgICB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfVxuICApXG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2coYm9keVBhcnNlcilcbiAgY29uc29sZS5sb2coYm9keVBhcnNlcigpKVxuICBjb25zdCB0ZXN0aW5nID0gYXdhaXQgYm9keVBhcnNlcihldmVudHNbMF0pXG4gIGNvbnNvbGUubG9nKHRlc3RpbmcpXG4gIHJldHVybiBldmVudHMubWFwKChlKSA9PiB7XG4gICAgcmV0dXJuIGVcbiAgfSlcbn1cbiAqL1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgPG1haW4gY2xhc3M9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICBXZSdyZSBqdXN0IHN0YXJ0aW5nIHVwLiBUaGVyZSB3aWxsIGJlIG1vcmUgY29udGVudCBhbmQgZXZlbnRzIHNvb24uXG4gICAgICAgICAgU3RheSB0dW5lZC5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm15LTE2XCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwibXktMiB0ZXh0LWxnIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWN5YW4tOTAwXCI+XG4gICAgICAgICAgICBQYXJ0aWNpcGF0aW5nIEdyb3Vwc1xuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzcz1cImgtMzJcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eS9ob21lL21haW4vYXNzZXRzL2N5cHJ1c2pzLmpwZWdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkN5cHJ1c0pTXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpjb2wtc3Bhbi0yIGxnOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzPVwiaC0zMlwiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2N5cHJ1cy1kZXZlbG9wZXItY29tbXVuaXR5L2hvbWUvbWFpbi9hc3NldHMvYXdzLXVzZXItZ3JvdXAtY3lwcnVzLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiQVdTIFVzZXIgR3JvdXAgQ3lwcnVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpjb2wtc3Bhbi0yIGxnOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzPVwiaC0zMlwiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2N5cHJ1cy1kZXZlbG9wZXItY29tbXVuaXR5L2hvbWUvbWFpbi9hc3NldHMvZ2RnY3lwcnVzLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiR0NHIEN5cHJ1c1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzcz1cImgtMzJcIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eS9ob21lL21haW4vYXNzZXRzL3B5ZGF0YS1jeXBydXMuanBlZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiUHlEYXRhIEN5cHJ1c1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFJlYWNoIG91dCBvbnsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY3lhbi00MDBcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaGF0LmNkYy5jeVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEaXNjb3JkXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIGlmIHlvdSB3YW50IHRvIGpvaW4gdXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibXktMTZcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJteS0yIHRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtY3lhbi05MDBcIj5DaGF0PC9oMz5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSm9pbiB1cyBvbnsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY3lhbi00MDBcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaGF0LmNkYy5jeVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEaXNjb3JkXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgIG9yIGZvbGxvdyBvdXJ7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWN5YW4tNDAwXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eS9ob21lL2Rpc2N1c3Npb25zXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGRpc2N1c3Npb25zIG9uIEdpdEh1Yi5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzVhZjg2MzAwJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1YM0tIRzdCTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1BaTFIyNkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZRk1SVjVUVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdFNEk0RkQ2LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1GWkRZN0wzVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V2ZW50cyc6eydpZCc6J3JvdXRlcy9ldmVudHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZXZlbnRzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2V2ZW50cy0yQ1g0M1ZTUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtUFBFRVlPWkouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNUFGODYzMDAuanMnfTsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3BhdHJpY2svU2l0ZXMvY3lwcnVzLWRldmVsb3Blci1jb21tdW5pdHkvY2RjLmN5L2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9wYXRyaWNrL1NpdGVzL2N5cHJ1cy1kZXZlbG9wZXItY29tbXVuaXR5L2NkYy5jeS9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3BhdHJpY2svU2l0ZXMvY3lwcnVzLWRldmVsb3Blci1jb21tdW5pdHkvY2RjLmN5L2FwcC9yb3V0ZXMvZXZlbnRzLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcGF0cmljay9TaXRlcy9jeXBydXMtZGV2ZWxvcGVyLWNvbW11bml0eS9jZGMuY3kvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2V2ZW50c1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXZlbnRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImV2ZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfVxuICB9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxZQUF1Qjs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUVoQix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFB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

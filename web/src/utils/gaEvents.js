// eslint-disable-next-line
import ReactGA from "react-ga4";

export function sendGAEvent(data) {
  ReactGA.event(data);
}

export function sendRelationEvent(parent, child) {
  ReactGA.event({
    category: "relationship click",
    action: `changed from ${parent} to ${child}`,
  });
}

export function sendClickEvent(element, name) {
  ReactGA.event({
    category: "clicked element",
    action: "click",
    label: `${element}:${name}`,
  });
}

// export function
// Relation Cards are clickable
// Tell Me More Button Click
// Breadcrumbs click
//

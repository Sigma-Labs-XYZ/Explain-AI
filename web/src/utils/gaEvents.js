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

export function sendBreadCrumbEvent(child, parent) {
  ReactGA.event({
    category: "breadCrumb click",
    action: `changed from ${child} to ${parent}`,
  });
}

export function sendClickEvent(element, name) {
  ReactGA.event({
    category: "clicked element",
    action: "click",
    label: `${element}:${name}`,
  });
}

export function sendAudienceLevelSubjectEvent(subject, audience) {
  ReactGA.event({
    category: "changed level",
    action: "audience for subject",
    label: `${subject}:${audience}}`,
  });
}

export function sendAudienceLevelChangeEvent(level) {
  ReactGA.event({
    category: "changed level",
    action: "Changed audience age level",
    label: `Changed to :${level}}`,
  });
}
// export function
// Relation Cards are clickable
// Tell Me More Button Click
// Breadcrumbs click
//

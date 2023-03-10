// eslint-disable-next-line
import ReactGA from "react-ga4";

export function sendGAEvent(data) {
  ReactGA.event(data);
}

export function sendRelationEvent(parent, child) {
  ReactGA.event({
    category: "relationship click",
    action: "navigated to a related card",
    label: `changed from ${parent} to ${child}`,
  });
}

export function sendBreadCrumbEvent(child, parent) {
  ReactGA.event({
    category: "breadCrumb click",
    action: "navigated to a breadcrumb",
    label: `changed from ${child} to ${parent}`,
  });
}

export function sendClickEvent(element, name) {
  ReactGA.event({
    category: "clicked element",
    action: "click",
    label: `${element}:${name}`,
  });
}

export function audienceChangeOnSubjectEvent(subject, audience) {
  ReactGA.event({
    category: "audience level for subject",
    action: "audience for subject changed",
    label: `${subject}:${audience}`,
  });
}

export function sendAudienceLevelChangeEvent(level) {
  ReactGA.event({
    category: "changed audience level",
    action: "Changed audience age level",
    label: `Changed to :${level}`,
  });
}

/*
  WEBWORKS STUDIO — WEEK 10

  TODO:
  Turn this file into a reusable React component.

  The component should:
  - be named ServiceCard;
  - receive changing service information through props;
  - return the semantic <article> markup used by the starter cards;
  - display categoryLabel, title, description, and detail;
  - export the component as default.

  Do not hard-code one specific service into this component.
*/

function ServiceCard(props) {
  console.log(props);
  return (
    <article className="service-card">
      {/* Replace these placeholders with prop values. */}
      <p className="service-category">Category</p>
      <h3 className="service-title">Service title</h3>
      <p className="service-description">Service description</p>
      <p className="service-detail">Supporting detail</p>
    </article>
  );
}

export default ServiceCard;

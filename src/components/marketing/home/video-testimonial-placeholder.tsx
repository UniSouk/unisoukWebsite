export function VideoTestimonialPlaceholder() {
  return (
    <section
      className="video-testimonial"
      id="customer-story"
      aria-labelledby="customer-story-title"
    >
      <div className="container video-testimonial__inner">
        <div className="video-testimonial__copy">
          <h2 id="customer-story-title">
            Commerce, from the seller&apos;s side.
          </h2>
          <p>
            A customer story will live here, shared in their own words with the
            work and results behind it.
          </p>
        </div>
        <figure
          className="video-testimonial__media"
          aria-label="Video testimonial placeholder"
        >
          <div className="video-testimonial__stage">
            <div className="video-testimonial__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M9 7.5v9l7-4.5-7-4.5Z" />
              </svg>
            </div>
            <div className="video-testimonial__meta">
              <span>Customer story</span>
              <span>Video coming soon</span>
            </div>
          </div>
          <figcaption>
            Reserved for a customer video, identity and verified outcome.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
